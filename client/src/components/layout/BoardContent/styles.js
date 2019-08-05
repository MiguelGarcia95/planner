import styled from 'styled-components';

export const Container = styled.section`
  min-width: 100vw;
  display: flex;
  height: 100vh;
  max-height: 100%;
  margin: auto;
  overflow-x: scroll;
  overflow-y: none;
  flex-wrap: nowrap
  -webkit-overflow-scrolling: touch; /* [4] */
  -ms-overflow-style: -ms-autohiding-scrollbar; /* [5] */ }
`;