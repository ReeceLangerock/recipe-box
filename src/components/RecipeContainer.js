import React from "react";
import styled from "styled-components";
import Recipe from "./Recipe";
import AddRecipe from "./AddRecipe";

import { connect } from "react-redux";

import * as actions from "../redux/actions/actions";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  width: 95%;

  margin: 0 auto;
  justify-content: flex-start;
  position: relative;
  box-sizing: border-box;

`;

export class RecipeContainer extends React.Component {
  componentWillMount(){
    this.props.populateFromLocalStorage();
  }
  renderRecipeItems() {
    return this.props.recipes.map((recipe, index) => {
      return <Recipe key={`recipe${index}`} name={recipe.name} ingredients={recipe.ingredients} index={index} />;
    });
  }
  render() {
    return <Container><AddRecipe/>{this.renderRecipeItems()}</Container>;
  }
}

const mapStateToProps = state => ({
  recipes: state.recipeReducer.recipes
});
export default connect(mapStateToProps, actions)(RecipeContainer);
