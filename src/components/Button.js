import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import * as actions from "../redux/actions/actions";

const Delete = {
  background: `red`
};

const StyledButton = styled.button`
  padding: 10px 22px;
  border: none;
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.5s ease-in-out;
  outline: none;
  background: ${props => {
    switch (props.type) {
      case "cancel":
        return "#E55934";
      case "confirm":
        return "#9BC53D";

      default:
        return "";
    }
  }};
  &:hover {
    transition: 0.5s ease-in-out;

    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.29), 0 5px 5px rgba(0, 0, 0, 0.23);
  }
`;

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.props.buttonMethod === "addRecipe" || this.props.buttonMethod === "editRecipe") {
      if (this.props.payload[0] !== "" && this.props.payload[1] !== "") {
        this.props[this.props.buttonMethod](...this.props.payload);
      }
    } else {
      this.props[this.props.buttonMethod](...this.props.payload);
    }
  }
  render() {
    return (
      <StyledButton disabled={this.props.isDisabled} type={this.props.buttonType} onClick={this.handleClick}>
        {this.props.buttonText}
      </StyledButton>
    );
  }
}

export default connect(null, actions)(Button);
