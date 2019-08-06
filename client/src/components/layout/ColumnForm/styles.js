import styled from 'styled-components';

export const Container = styled.section`
  width: 250px;
  // For Column
  flex: 0 0 auto;
  height: 40px;
  margin-top: 75px;
  padding: 0 25px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  
  ${props => props.open && `
    height: 100px;
  `}
`;

export const Title = styled.h3`
  line-height: 40px;
  color: white;
  background-color: rgba(0,0,0,0.5);
  font-weight: 400;
  overflow: hidden;
  ${props => props.open && `
      height: 0px;
  `}
`;

export const Form = styled.section`
  width: 250px;
  height: 0px;
  background: rgb(240,240,240);
  overflow: hidden;
  position: relative;
  input {
    width: 230px;
    height: 30px;
    box-sizing: border-box;
    padding: 2px;
    margin: 10px auto;
    margin-top: 10px;
    border: none;
    position: absolute;
    bottom: 30px;
    left: 0; right: 0;
  }
  ${props => props.open && `
    height: 100px;
  `}
`;

export const Button = styled.button`
  width: 120px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  margin: 0;
  color: white;
  background: rgb(100,180,100);
  border: none;
  position: absolute;
  bottom: 0; right: 0;
`;

export const Cancel = styled.p`
  width: 120px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  margin: 0;
  color: white;
  background: rgb(213,78,78);
  position: absolute;
  bottom: 0; left: 0;
`;

export const Error = styled.p`
  line-height: 30px;
  height: 30px;
  position: absolute;
  top: 0px;
  width: 250px;
  background: rgba(255,70,70,0.5);
`;