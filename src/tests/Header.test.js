import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, find, render, simulate } from "enzyme";
import enzymeSerializer from "enzyme-to-json/serializer";
import { spy } from "sinon";
import { Header } from "./../components/Header";
import configureStore from "redux-mock-store";

const initialState = {};
let mockStore = configureStore(initialState);
expect.addSnapshotSerializer(enzymeSerializer);
describe("Header", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header store={mockStore} />, div);
  });

  let component;
  let props;
  beforeEach(() => {
    props = {};
    component = shallow(<Header {...props} />);
  });


  it("matches snapshot", () => {
    const comp = shallow(<Header {...props} />);
    expect(comp).toMatchSnapshot();
  });
});
