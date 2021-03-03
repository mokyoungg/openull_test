import React from "react";
import styled from "styled-components";

const SearchBar = ({ term, setTerm }) => {
  //const [term, setTerm] = useState();

  return (
    <Wrap>
      <SearchBarContainer>
        <Label>Album Search</Label>
        <Search
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </SearchBarContainer>
    </Wrap>
  );
};

export default SearchBar;

const Wrap = styled.div`
  font-family: "Roboto", sans-serif;
`;

const SearchBarContainer = styled.div`
  display: flex;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 2em;
`;

const Search = styled.input`
  margin-left: 20px;
  width: 250px;
`;
