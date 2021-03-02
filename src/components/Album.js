import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Album = ({ location }) => {
  const [data, setData] = useState({});
  const [cover, setCover] = useState();
  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [release, setRelease] = useState();
  const [genre, setGenre] = useState();
  const [copyright, setCopyright] = useState();

  useEffect(() => {
    const tempData = location.state.data;
    setData(tempData);
    setCover(tempData["im:image"][2]["label"]);
    setTitle(tempData["im:name"]["label"]);
    setArtist(tempData["im:artist"]["label"]);
    setRelease(tempData["im:releaseDate"]["attributes"]["label"]);
    setGenre(tempData["category"]["attributes"]["term"]);
    setCopyright(tempData["rights"]["label"]);
  }, [data]);

  return (
    <Wrap>
      <AlbumInfo>
        <CoverContainer>
          <Cover alt="cover_img" src={cover} />
        </CoverContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Artist>{artist}</Artist>
          <DetailInfo>
            <Genre>{genre}</Genre>
            <ReleaseInfo>{release}</ReleaseInfo>
          </DetailInfo>
        </InfoContainer>
      </AlbumInfo>
      <OtherInfo>
        <InfoContainer>
          <ReleaseInfo>{release}</ReleaseInfo>
          <Copyright>{copyright}</Copyright>
        </InfoContainer>
      </OtherInfo>
    </Wrap>
  );
};

export default Album;

const Wrap = styled.div`
  width: 70%;
  padding-top: 100px;
  margin: 0 auto;
`;

const AlbumInfo = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const CoverContainer = styled.div`
  width: 300px;
  height: 300px;
`;

const Cover = styled.img`
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  margin-left: 5%;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 15px;
`;

const Artist = styled.div`
  font-size: 30px;
  color: #fa233b;
  margin-bottom: 15px;
`;

const DetailInfo = styled.div`
  display: flex;
  color: #8a8a92;
`;

const Genre = styled.div``;

const ReleaseInfo = styled.div`
  margin-left: 15px;
  color: #8a8a92;
`;

const OtherInfo = styled.div`
  margin-top: 30px;
  border-top: 1px solid #eeeeee;
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
  text-align: right;
`;

const Copyright = styled.div`
  color: #8a8a92;
  margin-top: 10px;
`;
