import React from "react";
import styled from "styled-components";

const SortOption = ({ handleCategory, handleOrder }) => {
  return (
    <Wrap>
      <CategoryContainer>
        <Category onChange={handleCategory}>
          <Option value="인기순">인기순</Option>
          <Option value="발매일순">발매일순</Option>
          <Option value="가나다순">가나다순</Option>
        </Category>
      </CategoryContainer>
      <OrderContainer>
        <Order onChange={handleOrder}>
          <Option value="오름차순">오름차순</Option>
          <Option value="내림차순">내림차순</Option>
        </Order>
      </OrderContainer>
    </Wrap>
  );
};

export default SortOption;

const Wrap = styled.div`
  display: flex;
`;

const CategoryContainer = styled.div``;

const Category = styled.select``;

const Option = styled.option``;

const OrderContainer = styled.div`
  margin-left: 1%;
`;

const Order = styled.select``;
