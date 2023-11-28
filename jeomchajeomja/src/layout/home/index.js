import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import NavBar from "../../common/NavBar";
import { Button } from "./components/Button";
import Search from "./components/Search";

function Home() {
  const newBook = useSelector((state) => state.book.book[0]);
  const keyWords = ["점자학습", "초등저학", "초등고학", "중등", "고등"];

  return (
    <>
      <NavBar />
      {/* <Row>
        {newBook && <BookTitle>{newBook.title}</BookTitle>}
        <NewBook>NEW BOOK</NewBook>
      </Row> */}
      <Line />
      <Div>
        <ColumnsDiv2>
          <SubDiv>
            <Header>학습자료 검색</Header>
            <Body>
              음성 검색은 alt 키를 누른 후 벨소리가 나면 키워드를 말해주세요.
            </Body>
          </SubDiv>
          <Search />
        </ColumnsDiv2>
        <Space />
        <ColumnsDiv2>
          <SubDiv>
            <Header>키워드 검색</Header>
            <Body>
              해당 키워드를 마우스로 클릭, 또는 키보드로 번호를 누르면
              검색됩니다.
            </Body>
          </SubDiv>
          <ButtonContainer>
            {keyWords.map((keyWordText, index) => (
              <Button key={index}>
                <span>{index + 1}</span>
                <span>{keyWordText}</span>
              </Button>
            ))}
          </ButtonContainer>
        </ColumnsDiv2>
      </Div>
    </>
  );
}

export default Home;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: fit-content;
  gap: 5px;
`;

const Header = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.header1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.header1};
`;

const Body = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70px;
  padding-left: 200px;
  width: 100%;
  gap: 30px;
`;

const ColumnsDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BookTitle = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights.header0};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
`;

const NewBook = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights.header0};
  font-size: ${({ theme }) => theme.fontSizes.header1};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: fit-content;
  height: fit-content;
`;

const Line = styled.div`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 55px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Space = styled.div`
  width: 100%;
  height: 80px;
`;