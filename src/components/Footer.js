import React from "react";
import styled from "styled-components";

const FooterStyled = styled.div`
  a {
  }
`;

const I = styled.i`
  margin-left: 10px;
  color: black;
  cursor: pointer;
`;

export class Footer extends React.Component {
  handleIconClick(link) {
    window.open("https://github.com/ReeceLangerock/camper-leaderboard", "_blank");
  }
  render() {
    const currentYear = new Date().getFullYear();

    return (
      <FooterStyled className="Footer">
        © {currentYear}{" "}
        <a href="http://reecelangerock.com" rel="noopener noreferrer" target="_blank">
          Reece Langerock
        </a>
        <I className={`fa fa-github`} aria-hidden="false" onClick={() => this.handleIconClick()} />
      </FooterStyled>
    );
  }
}
export default Footer;
