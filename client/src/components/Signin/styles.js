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

export const BottomLink = styled.p`
    position: absolute;
    bottom: 0px;
    height: 50px;
    line-height: 50px;
    a {
      color: black;
      font-weight: 500;
    }
`;

export const Button = styled.button`
  border: none;
  height: 50px;
  cursor: pointer;
  color: white;
  font-size: 1.4em;
  background: linear-gradient(to bottom, #FF4B2B, #FF416C);    
  border-radius: 25px;
  position: absolute;
  margin: auto;
  left: 0; right: 0;
  bottom: 20px;
  width: 90%;
`;

export const FormBody = styled.section`
  width: 100%;
  height: 310px;
  box-sizing: border-box;
  padding: 25px;
  flex: 4;
  position: relative;
  input {
    width: 100%;
    border: none;
    height: 40px;
    margin: 15px 0;
    box-sizing: border-box;
    padding: 10px;
    background-color: transparent;
    border-bottom: 1px solid black;
    font-size: 1.2em;
  }
  input.error {
    background: rgba(255,50,50,0.5);
    outline: 1px solid red;
    margin: 5px 0;
  }
  input::placeholder {color: black; opacity: 1;}
  input:-ms-input-placeholder {color: black;}
  input::-ms-input-placeholder {color: black;}
`;

export const Error = styled.p`
  margin: 0;
`;