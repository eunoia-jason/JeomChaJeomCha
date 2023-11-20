import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/img/점차점자로고.svg";

function NavBar() {
  return (
    <Div>
      <LinkDiv>
        <Link to="/login">
          <Body>로그인</Body>
        </Link>
      </LinkDiv>
      <Header>
        <RowDiv>
          점차점자
          <MainLogo src={Logo} alt="점차점자 로고" />
        </RowDiv>
        <SubHeader>
        서비스 설명 한줄 정도는 들어가면 좋을 것 같다.
        </SubHeader>
      </Header>
    </Div>
  );
}
export default NavBar;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 348px;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const Body = styled.body`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  width: 80px;
`;

const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 30px;
  padding-left: 860px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 150px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.header0};
  font-size: 50px;
  width: 1000px;
  font-family: "Nanum Myeongjo";
`;

const SubHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.header1};
  font-size: 26px;
`;

const MainLogo = styled.img`
  background-color: ${({ theme }) => theme.colors.black};
  width: 300px;
  height: auto;
`;