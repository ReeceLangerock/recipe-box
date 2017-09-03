import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, find, render, simulate } from "enzyme";
import Footer from "./../components/Footer";
import enzymeSerializer from "enzyme-to-json/serializer";
expect.addSnapshotSerializer(enzymeSerializer);

describe("Footer", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Footer />, div);
  });
});

describe("Snapshot Footer", () => {
  it("renders correctly", () => {
    const component = mount(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
