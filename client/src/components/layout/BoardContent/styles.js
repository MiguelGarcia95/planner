import styled from 'styled-components';

export const Container = styled.section`
  min-width: 100vw;
  display: flex;
  height: 100vh;
  max-height: 100%;
  margin: auto;
  overflow-x: scroll;
  overflow-y: none;
  cursor: handle;
  flex-wrap: nowrap
  -webkit-overflow-scrolling: touch; /* [4] */
  -ms-overflow-style: -ms-autohiding-scrollbar; /* [5] */ }

  scrollbar-width: 15px;
  ::-webkit-scrollbar {
    height: 15px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    cursor: grab;
    background-color: #11998e;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #11a98e;
  }
`;