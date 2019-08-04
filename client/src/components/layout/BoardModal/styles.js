import styled from 'styled-components';


export const Container = styled.section`
    width: 100vw;
    height: 0px;
    overflow: hidden;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: height 0.5s;
  ${props => props.isOpened && `
    height: 100vh;
  `}
`;

export const Modal = styled.section`
  width: 80%;
  max-width: 500px;
  height: 500px;
  background: white;
  position: absolute;
  z-index: 2;
  `;
  
export const ModalBackground = styled.section`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: absolute;
  cursor: pointer;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 30px 50px;
  background: #11998e;  
  background: -webkit-linear-gradient(to right, #38ef7d, #11998e);
  background: linear-gradient(to right, #38ef7d, #11998e);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  text-align: center;
  position: relative;
  input {
    height: 50px;
    width: 100%;
    border: none;
    margin: 0;
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 10px;
    border-bottom: 2px solid black;
    background-color: transparent;
  }

  input::placeholder {color: black; opacity: 1;}
  input:-ms-input-placeholder {color: black;}
  input::-ms-input-placeholder {color: black;}

`;

export const Title = styled.h1`
  height: 80px;
  line-height: 80px;
  font-size: 2em;
  color: black;
  font-weight: 300;
`;

export const Label = styled.p`
  text-align: left;
  color: black;
  line-height: 50px;
  font-weight: bold;
  margin: 0;
`;

export const Button = styled.button`
  height: 100px;
  cursor: pointer;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  color: black;
  font-size: 1.5em;
  background: transparent;
  position: absolute;
  width: 90%;
  bottom: 20px; 
  left: 0; right: 0;
  margin: auto;
  border: none;
`;