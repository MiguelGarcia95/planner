import styled from 'styled-components';

export const Container = styled.section`
  min-height: 40px;
  background: green;
  background: rgba(250,250,250,1);
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  line-height: 20px;
  font-size: 1em;
  word-wrap: break-word;
  margin: 10px 0px;
  position: relative;
`;

export const Icon = styled.i`
  width: 20px; 
  height: 20px;
  text-aling: center;
  position: absolute;
  right: -5px;
  top: 0px;
  cursor: pointer;
`;

export const Title = styled.p`
  margin-top: 0;
`;