import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../redux/actions/actions";

import Button from "./Button";

const ModalContainer = styled.div`
  position: absolute;
  z-index: 10;
  min-width: 50%;
  border: 1px solid rgba(155, 197, 61, 0.5);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 15px;
  top: 33%;
  margin: 0 auto;
  transition: all 0.75s ease-in-out;
  left: ${props => (props.active ? "50%" : "200%")};
  transform: translate(-50%, 0);
  text-align: left;
  opacity: 1;
  color: #2f2f2f;
  background: white;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.29), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  textarea,
  input {
    position: relative;
    width: calc(100% - 5px);
    border: 2px solid rgba(155, 197, 61, 0.75);
    border-radius: 3px;
    outline-color: rgba(155, 197, 61, 1);
    padding: 2px;
  }
`;

const Label = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 3px;
`;

const Form = styled.div`
  margin-bottom: 20px;
  margin-top: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  font-weight: none;
  margin: 5px 0px 5px 0px;
`;

const XSpan = styled.span`
  cursor: pointer;
  z-index: 11;
`;

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    let index = this.props.editableRecipeIndex;
    let name = index >= 0 ? this.props.recipes[index].name : "";
    let ingredients = index >= 0 ? this.props.recipes[index].ingredients : "";

    this.state = {
      name: name,
      ingredients: ingredients
    };
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    let index = newProps.editableRecipeIndex;
    let name = index >= 0 ? newProps.recipes[index].name : "";
    let ingredients = index >= 0 ? newProps.recipes[index].ingredients : "";
    this.setState({
      name: name,
      ingredients: ingredients
    });
  }

  handleInputChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    console.log(value);
    this.setState({
      [field]: value
    });
  }

  render() {
    return (
      <ModalContainer active={this.props.activeModal !== ""}>
        <Header>
          <span>{this.props.modalHeader}</span>
          <XSpan onClick={this.props.clearModal}>X</XSpan>
        </Header>

        <hr />
        <Form>
          <Label>Recipe</Label>
          <input name={"name"} placeholder={"Recipe name"} value={this.state.name} onChange={this.handleInputChange} />
          <Label>Ingredients</Label>

          <textarea name={"ingredients"} placeholder={"Enter Ingredients, seperate by commas"} value={this.state.ingredients} onChange={this.handleInputChange} />
        </Form>
        <div>
          <Button
            isDisabled={this.state.name === "" || this.state.ingredients === ""}
            buttonType={"confirm"}
            buttonText={this.props.modalButtonText}
            buttonMethod={this.props.modalButtonMethod}
            payload={[this.state.name, this.state.ingredients, this.props.editableRecipeIndex]}
          />
          <Button buttonType={"cancel"} buttonText="Close" buttonMethod={"clearModal"} payload={""} />
        </div>
      </ModalContainer>
    );
  }
}
const mapStateToProps = state => ({
  modalButtonText: state.modalReducer.modalButtonText,
  modalHeader: state.modalReducer.modalHeader,
  modalButtonMethod: state.modalReducer.modalButtonMethod,
  activeModal: state.modalReducer.activeModal,
  editableRecipeIndex: state.modalReducer.editableRecipeIndex,
  recipes: state.recipeReducer.recipes
});
export default connect(mapStateToProps, actions)(Modal);
