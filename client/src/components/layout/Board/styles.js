import styled from 'styled-components';

export const Icon = styled.i`
  color: ${props => props.textColor ? props.textColor : 'white'};
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  cursor: pointer;
  box-sizing: border-box;
  padding-top: 8px;
`;

export const Container = styled.section`
  flex-basis: 30%;
  height: 100px;
  background: ${props => props.bgColor ? props.bgColor : 'rgba(0,0,0,0.5)'};
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  text-align: center;
  margin-top: 50px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 5px;
  position: relative;
  z-index: 1;
  a {
    text-decoration: none;
    h1 {
      line-height: 100px;
      font-size: 1.7em;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-shadow: 0px 0px 5px rgba(0,0,0,0.5);
      color: ${props => props.textColor ? props.textColor : 'white'};
    }
  }

  @media(max-width: 900px) {flex-basis: 45%;}
  @media(max-width: 600px) {flex-basis: 100%;}
`;