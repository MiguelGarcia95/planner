import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  background: -webkit-linear-gradient(to bottom, #ddd, #fff);
  background: linear-gradient(to bottom, #ddd, #fff);
`;

export const Message = styled.section`
  width: 200px;
  height: 60px;
  position: absolute;
  top: 20px;
  text-align: center;
  p {line-height: 30px; margin: 0;}
`;

export const Form = styled.form`
  flex-direction: column;
  text-align: center;
  width: 350px;
  height: 390px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  background: #11998e;  
  background: -webkit-linear-gradient(to bottom, #38ef7d, #11998e);
  background: linear-gradient(to bottom, #38ef7d, #11998e);

  @media(max-width: 500px) {
    width: 350px;
    width: 100%;
    height: 450px;
    box-sizing: border-box; 
    margin: 0 25px;
  }
`;

export const FormHeader = styled.section`
  width: 100%;
  height: 80px;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
  font-size: 2em;
  color: black;
  font-weight: 300;
  line-height: 80px;
`;

export const BottomLink = styled.section`
  position: absolute;
  bottom: 0px;
  height: 50px;
  p {
    line-height: 50px;
    a {
      color: black;
      font-weight: 500;
    }
  }
`;