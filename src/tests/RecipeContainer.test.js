import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, find, render, simulate } from "enzyme";
import enzymeSerializer from "enzyme-to-json/serializer";
import { spy } from "sinon";
import { RecipeContainer } from "./../components/RecipeContainer";
import configureStore from "redux-mock-store";

const initialState = {};
let mockStore = configureStore(initialState);
expect.addSnapshotSerializer(enzymeSerializer);
describe("RecipeContainer", () => {
  // it("renders without crashing", () => {
  //   const div = document.createElement("div");
  //   ReactDOM.render(<Leaderboard store={mockStore} />, div);
  // });

  let component;
  let props;
  beforeEach(() => {
    props = {};
    component = shallow(<RecipeContainer {...props} />);
  });



  it("matches snapshot", () => {
    const comp = shallow(<RecipeContainer {...props} />);
    expect(comp).toMatchSnapshot();
  });
});
