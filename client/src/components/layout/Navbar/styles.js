import styled from 'styled-components';

export const Container = styled.section`
  height: 50px;
  display: flex;
  width: 100%;
  flex: 1;
  z-index: 5;
  position: fixed;
  background: #11998e;  
  background: -webkit-linear-gradient(to right, #38ef7d, #11998e);
  background: linear-gradient(to right, #38ef7d, #11998e);
`;

export const AddButton = styled.section`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #11998e;  
  background: -webkit-linear-gradient(to right, #38ef7d, #11998e);
  background: linear-gradient(to right, #38ef7d, #11998e);
  position: absolute;
  top: 60px;
  right: 10px;
  text-align: center;
  cursor: pointer;
  line-height: 20px;
  // box-sizing: border-box;
  padding-top: 5px;
  // color: white;
  // i {margin-top: 18px; }
`;

export const Logo = styled.section`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  .logo {
    line-height: 50px;
    height: 50px;
    width: 50px;
    text-align: center;
    font-size: 2em;
  }
`;

export const Nav = styled.section`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  .nav {
    height: 50px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .link {
      flex-basis: 20%;
      text-align: center;
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }
  }
`;

export const NavItem = styled.section`
  flex-basis: 20%;
  text-align: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;
