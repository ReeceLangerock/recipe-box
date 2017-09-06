import React from "react";
import styled from "styled-components";
import { injectGlobal } from "styled-components";
import moonFlower from "./../fonts/Moon Flower.ttf";

injectGlobal`
  @font-face {
    font-family: 'Moon Flower';
    src: url('${moonFlower}');
  }
  

`;

const StyledHeader = styled.div`
  font-size: 9rem;
  color: rgb(155, 197, 61);
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Moon Flower";
  transtion: 0.75s ease-in;

  @media (max-width: 500px) {
    font-size: 5rem;
    transtion: 0.75s ease-in;
  }
`;

export class Header extends React.Component {
  render() {
    return <StyledHeader>Recipe Box</StyledHeader>;
  }
}
export default Header;
