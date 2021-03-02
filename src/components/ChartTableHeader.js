import React from "react";
import styled from "styled-components";

const ChartTableHeader = () => {
  return (
    <Wrap>
      <IndexCell>순위</IndexCell>
      <ThumbnailCell></ThumbnailCell>
      <TitleCell>앨범</TitleCell>
    </Wrap>
  );
};

export default ChartTableHeader;

const Wrap = styled.div`
  color: #565656;
  font-size: 1em;
  font-family: "Roboto", "Noto", sans-serif;
  height: 25px;
  display: flex;
  align-items: center;
`;

const IndexCell = styled.div`
  vertical-align: middle;
  min-width: 100px;
  vertical-align: middle;
  text-align: center;
`;

const ThumbnailCell = styled.div`
  min-width: 110px;
`;

const TitleCell = styled.div``;
