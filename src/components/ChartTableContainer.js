import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChartTableHeader from "./ChartTableHeader";
import ChartTableRow from "./ChartTableRow";
import SearchBar from "./SearchBar";

import jsonData from "../apis/jsonData";

const ChartTableContainer = () => {
  const [datas, setDatas] = useState([]);
  const [term, setTerm] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await jsonData.get();
    setDatas(res.data.feed.entry);
  };

  useEffect(() => {
    searchData();
  }, [term]);

  const searchData = async () => {
    const tempResponse = await jsonData.get();
    const res = tempResponse.data.feed.entry;

    const timeoutId = setTimeout(() => {
      if (term) {
        setDatas(search(res, term));
      } else if (!term) {
        setDatas(res);
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

  const renderList = () => {
    if (!datas) {
      return null;
    } else {
      return datas.map((data, index) => {
        return <ChartTableRow data={data} key={index} />;
      });
    }
  };

  console.log(term);

  return (
    <Wrap>
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
