import styled from 'styled-components';

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

export const Screen = styled.section`
  background: rgba(0,0,0,.2);
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const Form = styled.section`
  width: 300px; height: 300px;
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  margin: auto;
  background: rgb(240,240,240);
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.3);
  text-align: center;
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

export const Title = styled.p`
  height: 80px;
  margin-top: 10px;
  font-size: 1.2em;
  font-weight: 500;
`;

export const Delete = styled.section`
  width: 100%;
  height: 40px;
  background: rgb(213,78,78);
  color: white;
  cursor: pointer;
  p {}
  line-height: 40px;
`;

export const Button = styled.button`
  background: rgb(100,180,100);
  color: white;
  cursor: pointer;
`;

export const Error = styled.p`
  line-height: 30px;
  height: 30px;
  position: absolute;
  top: 180px;
  left: 0; right: 0;
  margin: auto;
  width: 100% !important;
  // box-sizing: border-box;
  text-align: center;
  background: rgba(255,70,70,0.5);
  color: black !important;
`;