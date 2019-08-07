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
      margin-top: 0;
      width: 140px;
      text-align: center;
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }
  }

  @media(max-width: 500px) {
    .nav {
      width: 240px;
      .link {
        width: 80px;
      }
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
