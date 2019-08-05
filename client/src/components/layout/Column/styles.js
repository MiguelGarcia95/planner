import styled from 'styled-components';

export const Container = styled.section`
width: 250px;
min-width: 250px;
height: auto;
max-height: 100%;
background: rgb(240,240,240);
border-radius: 10px;
margin: 50px 20px;
margin-bottom: 0px;
padding: 10px;
overflow-y: scroll;
box-sizing: border-box;
position: relative;
h1 {
  font-size: 1em;
  line-height: 40px;
  margin: 0;
}
.settings {
  
}
`;

export const Title = styled.p`
font-size: 1.1em;
line-height: 20px;
font-weight: 500;
word-wrap: break-word;
`;

export const DroppableContainer = styled.section`
  ${props => props.isDraggingOver && `
    border: 1px solid rgba(10,10,10,0.1);
  `}
`;

export const Icon = styled.i`
position: absolute;
right: 0;
top: 0;
margin: 5px;
cursor: pointer;
`;