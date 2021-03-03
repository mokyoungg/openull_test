import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const ChartTableRow = ({ data }) => {
  const thumbnail = data["im:image"][0]["label"];
  const title = data["im:name"]["label"];
  const artist = data["im:artist"]["label"];
  const ranking = data["im:itemCount"]["label"];
  const id = data["id"]["attributes"]["im:id"];
  const date = data["im:releaseDate"]["label"].substring(0, 10);

  return (
    <Wrap>
      <IndexCell>{ranking}</IndexCell>
      <ThumbnailCell>
        <Thumbnail alt="thumbnail" src={thumbnail} />
      </ThumbnailCell>
      <Link
        to={{
          pathname: `/album/${id}`,
          state: {
            data: data,
          },
        }}
      >
        <TitleCell>
          <Title>{title}</Title>
          <SingerName>{artist}</SingerName>
        </TitleCell>
      </Link>
      <ReleaseCell>{date}</ReleaseCell>
    </Wrap>
  );
};

export default withRouter(ChartTableRow);

const Wrap = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  border-top: 1px solid #eeeeee;
  color: #565656;
  height: 85px;
  font-size: 1em;
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  position: relative;
`;

const IndexCell = styled.div`
  text-align: center;
  vertical-align: middle;
  font-size: 1.5em;
  min-width: 100px;
`;

const ThumbnailCell = styled.div`
  min-width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 45px;
`;

const TitleCell = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 1.1em;
  color: #2793e6;
  height: 20px;
`;

const SingerName = styled.div`
  font-size: 1.1em;
  height: 20px;
`;

const ReleaseCell = styled.div`
  position: absolute;
  margin-left: 90%;
`;
