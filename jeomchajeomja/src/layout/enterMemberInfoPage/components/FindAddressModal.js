import React from "react";
import styled from "styled-components";
import Search from "./Search";
import AddressCardList from "./AddressCardList";

function FindAddressModal({ modalClose }) {
  return (
    <Backdrop>
      <ModalContainer>
        <ModalHeaderDiv>
          <Row1>
            <ModalHeader1>주소 찾기</ModalHeader1>
            <ModalBody2>
              스페이스바를 1초간 누른 후 벨소리가 나면 음성 검색이 활성화됩니다.
            </ModalBody2>
          </Row1>
          <ModalHeader2>
            다음과 같은 조항으로 검색을 해서 더욱 정확한 결과가 검색됩니다.
          </ModalHeader2>
          <Row2>
            <ModalBody1>도로명 + 건물번호</ModalBody1>
            <ModalBody2>예) 삼양로73가길</ModalBody2>
          </Row2>
          <Row2>
            <ModalBody1> 지역명 + 번지 또는 건물명</ModalBody1>
            <ModalBody2>예) 한빛맹학교</ModalBody2>
          </Row2>
        </ModalHeaderDiv>
        <Search />
        <AddressCardList />
        <CloseBtn onClick={modalClose}>닫기</CloseBtn>
      </ModalContainer>
    </Backdrop>
  );
}

export default FindAddressModal;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalContainer = styled.div`
  width: 960px;
  height: 700px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 0;
`;

const ModalHeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 34px 40px 20px 40px;
  width: 100%;
  max-height: 258px;
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20px;
`;

const ModalHeader1 = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 75px;
`;

const ModalHeader2 = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 37.5px;
  padding-bottom: 10px;
`;

const ModalBody1 = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
`;

const ModalBody2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`;

const CloseBtn = styled.button`
  display: inline-flex;
  padding: 9px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.black};
  gap: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 52.5px;
  margin-top: 23px;
`;

const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  width: fit-content;
  padding-bottom: 20px;
  gap: 20px;
`;

const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  width: fit-content;
  gap: 20px;
`;
