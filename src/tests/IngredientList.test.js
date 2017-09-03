import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, find, render, simulate } from "enzyme";
import enzymeSerializer from "enzyme-to-json/serializer";
import { spy } from "sinon";
import { IngredientList } from "./../components/IngredientList";
import configureStore from "redux-mock-store";

const initialState = {};
let mockStore = configureStore(initialState);
expect.addSnapshotSerializer(enzymeSerializer);
describe("IngredientList", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<IngredientList store={mockStore} />, div);
  });

  let component;
  let props;
  beforeEach(() => {
    props = {};
    component = shallow(<IngredientList {...props} />);
  });

  it("matches snapshot", () => {
    const comp = shallow(<IngredientList {...props} />);
    expect(comp).toMatchSnapshot();
  });
});
