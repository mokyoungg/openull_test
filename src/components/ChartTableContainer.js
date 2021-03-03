import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChartTableHeader from "./ChartTableHeader";
import ChartTableRow from "./ChartTableRow";
import SearchBar from "./SearchBar";
import SortOption from "./SortOption";

import jsonData from "../apis/jsonData";

const ChartTableContainer = () => {
  const [datas, setDatas] = useState([]);
  const [term, setTerm] = useState();
  const [category, setCategory] = useState("인기순");
  const [order, setOrder] = useState("오름차순");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await (await jsonData.get()).data.feed.entry;
    const orderRes = sort(res, category, order);
    setDatas(orderRes);
  };

  useEffect(() => {
    searchData();
  }, [term]);

  const searchData = async () => {
    const tempResponse = await jsonData.get();
    const res = tempResponse.data.feed.entry;

    const timeoutId = setTimeout(() => {
      if (term) {
        const searchDatas = search(res, term);
        setDatas(sort(searchDatas, category, order));
      } else if (!term) {
        setDatas(sort(res, category, order));
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  };

  const search = (arr, str) => {
    const tempTerm = str.toLowerCase();
    let result = [];
    result = arr.filter((el) => {
      return el["im:name"]["label"].toLowerCase().includes(tempTerm);
    });
    return result;
  };

  useEffect(() => {
    sortData();
  }, [category, order]);

  const sortData = () => {
    const sortedDatas = sort(datas, category, order);
    setDatas(sortedDatas);
  };

  const sort = (arr, str1, str2) => {
    let result = [];
    if (str1 === "인기순") {
      if (str2 === "오름차순") {
        result = arr.sort((a, b) => {
          return a["im:itemCount"]["label"] - b["im:itemCount"]["label"];
        });
      } else if (str2 === "내림차순") {
        result = arr.sort((a, b) => {
          return b["im:itemCount"]["label"] - a["im:itemCount"]["label"];
        });
      }
    } else if (str1 === "발매일순") {
      if (str2 === "오름차순") {
        result = arr.sort((a, b) => {
          return (
            new Date(a["im:releaseDate"]["label"]) -
            new Date(b["im:releaseDate"]["label"])
          );
        });
      } else if (str2 === "내림차순") {
        result = arr.sort((a, b) => {
          return (
            new Date(b["im:releaseDate"]["label"]) -
            new Date(a["im:releaseDate"]["label"])
          );
        });
      }
    } else if (str1 === "가나다순") {
      if (str2 === "오름차순") {
        result = arr.sort((a, b) => {
          return a["im:name"]["label"].toLowerCase() <
            b["im:name"]["label"].toLowerCase()
            ? -1
            : a["im:name"]["label"].toLowerCase() >
              b["im:name"]["label"].toLowerCase()
            ? 1
            : 0;
        });
      } else if (str2 === "내림차순") {
        result = arr.sort((a, b) => {
          return a["im:name"]["label"].toLowerCase() >
            b["im:name"]["label"].toLowerCase()
            ? -1
            : a["im:name"]["label"].toLowerCase() <
              b["im:name"]["label"].toLowerCase()
            ? 1
            : 0;
        });
      }
    }
    return result;
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleOrder = (e) => {
    setOrder(e.target.value);
  };

  const renderList = () => {
    if (!datas) {
      return null;
    } else {
      return datas.map((data, index) => {
        return <ChartTableRow data={data} key={index} />;
      });
    }
  };

  return (
    <Wrap>
      <SortOption handleCategory={handleCategory} handleOrder={handleOrder} />
      <SearchBar term={term} setTerm={setTerm} />
      <ChartTableHeader />
      {renderList()}
    </Wrap>
  );
};

export default ChartTableContainer;

const Wrap = styled.div`
  width: 70%;
  margin: 0 auto;
`;
