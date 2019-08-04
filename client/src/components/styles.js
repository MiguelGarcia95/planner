import styled from 'styled-components';

export const Page = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => (props.bgColor ? props.bgColor : '#f9f9f9')};
`;

export const Container = styled.section`
  width: 70%;
  min-height: 100vh;
  margin: auto;
`;

export const Boards = styled.section`
  width: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
`;