import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, find, render, simulate } from "enzyme";
import enzymeSerializer from "enzyme-to-json/serializer";
import { spy } from "sinon";
import { Modal } from "./../components/Modal";
import configureStore from "redux-mock-store";

const initialState = {};
let mockStore = configureStore(initialState);
expect.addSnapshotSerializer(enzymeSerializer);
describe("Modal", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Modal store={mockStore} />, div);
  });

  let component;
  let props;
  beforeEach(() => {
    props = {};
    component = shallow(<Modal {...props} />);
  });


  it("matches snapshot", () => {
    const comp = shallow(<Modal {...props} />);
    expect(comp).toMatchSnapshot();
  });
});
