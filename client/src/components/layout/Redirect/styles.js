import styled from 'styled-components';

export const Container = styled.section`
  flex-basis: 50%;
  min-width: 300px;
  min-height: 150px;
  height: 150px;
  align-self: center;
  margin: auto;
  padding: 25px;
  box-sizing: border-box;
  text-align: center;
  h2 {
  }
  a {
    font-weight: bold;
    font-size: 1em;
    line-height: 50px;
    color: black;
  }

  @media (max-width: 350px) {
    min-width: initial;
    flex-basis: 100%;
  }
`;

export const Text = styled.h2`
  font-weight: 400;
  font-size: 1.4em;
`;