import styled from 'styled-components';


export const Container = styled.section`
  width: 100%;
  height: 40px;
  overflow: hidden;
  ${props => !props.open && `
    height: 100px;
  `}
`;

export const Title = styled.h3`
  height: 0px;
  cursor: pointer;
  overflow: hidden;
  line-height: 40px;
  font-size: 1em;
  margin-left: 20px;
  ${props => props.open && `
    height: 40px;
  `}
`;

export const Form = styled.section`
  width: 100%; 
  height: 100%;
  position: relative;
  overflow: hidden;
  textarea {
    width: 100%; 
    padding: 2px;
    border: none;
    resize: none;
    box-sizing: border-box;
    height: 40px;
    position: absolute;
    bottom: 30px;
  }
  p, button {
    width: 100px;
    line-height: 25px;
    height: 25px;
    cursor: pointer;
    color: white;
  }
`;

export const Button = styled.button`
  background: rgb(100,180,100);
  border: none;
  padding: 0;
  position: absolute;
  bottom: 0; right: 0;
`;

export const Cancel = styled.p`
  background: rgb(213,78,78);
  text-align: center;
  margin: 0;
  position: absolute;
  bottom: 0; left: 0;
`;

export const Error = styled.p`
  line-height: 30px;
  height: 30px;
  position: absolute;
  top: 0px;
  width: 215px !important;
  box-sizing: border-box;
  text-align: center;
  background: rgba(255,70,70,0.5);
  color: black !important;
`;