import React from "react";
import TitleBar from "./components/TitleBar";
import EnterSearch from "./components/EnterSearch";
import magnifyingGlass from "../../img/magnifying_glass.svg";
import styled from "styled-components";
import BookBlock from "./components/BookBlock";

const SearchResult = () => {
  return (
    <Column>
      <TitleBar />
      <EnterSearch />
      <div style={{ height: "75px" }} />
      <>
        <BookBlock />
        <div style={{ height: "100px" }} />
      </>
      {/* <>
        <img src={magnifyingGlass} alt="돋보기 아이콘" />
        <div style={{ height: "24px" }} />
        <SubTitle>‘키워드’에 맞는 검색 결과가 없습니다</SubTitle>
        <div style={{ height: "200px" }} />
      </> */}
      <Body>찾으시는 자료가 없다면, 새로 신청할 수 있습니다. </Body>
      <div style={{ height: "12px" }} />
      <Button>학습자료 신청하기</Button>
      <div style={{ height: "50px" }} />
    </Column>
  );
};

export default SearchResult;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1_reg};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
`;

const Button = styled.button`
  padding: 9px 25px;
  white-space: nowrap;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.button1};
  font-size: ${({ theme }) => theme.fontSizes.button1};
`;

const Body = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.body1_reg};
`;
