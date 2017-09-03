import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, find, render, simulate } from "enzyme";
import enzymeSerializer from "enzyme-to-json/serializer";
import { spy } from "sinon";
import { Recipe } from "./../components/Recipe";
import configureStore from "redux-mock-store";

const initialState = {};
let mockStore = configureStore(initialState);
expect.addSnapshotSerializer(enzymeSerializer);
describe("Recipe", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Recipe store={mockStore} />, div);
  });

  let component;
  let props;
  beforeEach(() => {
    props = {};
    component = shallow(<Recipe {...props} />);
  });

  it("matches snapshot", () => {
    const comp = shallow(<Recipe {...props} />);
    expect(comp).toMatchSnapshot();
  });
});
