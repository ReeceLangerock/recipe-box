import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, find, render, simulate } from "enzyme";
import enzymeSerializer from "enzyme-to-json/serializer";
import { spy } from "sinon";
import { RecipeContainer } from "./../components/RecipeContainer";
import configureStore from "redux-mock-store";
import Recipe from "../components/Recipe";

const initialState = {};
let mockStore = configureStore(initialState);
expect.addSnapshotSerializer(enzymeSerializer);
describe("RecipeContainer", () => {


  let component;
  let props;
  beforeEach(() => {
    props = { recipes: [{ name: "Cookies", id: 1, ingredients: ["sugar"] }, 
    { name: "Pizza", id: 2, ingredients: ["cheese"] }] };
    component = shallow(<RecipeContainer store={mockStore} {...props} />);
  });

  it("renders each recipe", () => {
    expect(component.find(Recipe).length).toEqual(props.recipes.length);
  });

  it("matches snapshot", () => {
    const comp = shallow(<RecipeContainer {...props} />);
    expect(comp).toMatchSnapshot();
  });
});
