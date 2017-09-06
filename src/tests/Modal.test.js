import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, find, render, simulate } from "enzyme";
import enzymeSerializer from "enzyme-to-json/serializer";
import { spy } from "sinon";
import { Modal } from "./../components/Modal";
import {Button} from "./../components/Button";

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
    props = { modalType: "add" };
    component = mount(<Modal {...props} />);
  });

  it("contains two buttons", () => {
    expect(component.find(Button).length).toBe(2);
  });

  

  it("recieves correct modalType prop", () => {
    expect(component.instance().props.modalType).toEqual("add");
  });

  it("matches snapshot", () => {
    const comp = shallow(<Modal {...props} />);
    expect(comp).toMatchSnapshot();
  });
});
