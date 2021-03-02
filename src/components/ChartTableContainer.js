import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChartTableHeader from "./ChartTableHeader";
import ChartTableRow from "./ChartTableRow";

import jsonData from "../apis/jsonData";

const ChartTableContainer = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await jsonData.get();
    setDatas(res.data.feed.entry);
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
