import styled from 'styled-components';

export const Label = styled.p`
  text-align: left;
  color: black;
  line-height: 50px;
  font-weight: bold;
  margin: 0;
`;

export const Screen = styled.section`
  background: rgba(0,0,0,.2);
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const Modal = styled.section`
  height: 0px;
  width: 100vw;
  max-height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 200;
  overflow: hidden;
  ${props => props.open && `
    height: 100vh;
  `}
`;

export const Delete = styled.section`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 40px;
  background: rgb(213,78,78);
  color: white;
  cursor: pointer;
  line-height: 40px;
`;

export const Button = styled.button`
  background: rgb(100,180,100);
  color: white;
  cursor: pointer;
  position: absolute;
  bottom: 41px;
  left: 0;
`;


export const Form = styled.section`
  width: 400px; height: 500px;
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  margin: auto;
  background: rgb(240,240,240);
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.3);
  text-align: center;
  h1 {
    height: 80px;
    margin: 0;
    margin-top: 10px;
    font-size: 1.2em;
  }
  form {
    width: 100%;
    box-sizing: border-box;
    padding: 5px 20px;
    height: 180px;
    margin: 0;
    input, button {
      width: 100%;
      box-sizing: border-box;
      border: none;
      height: 40px;
    }
    input {
      padding: 5px;
      background: rgb(250,250,250);
    }
  }
`;