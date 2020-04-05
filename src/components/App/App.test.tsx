import React from "react";
import renderer from "react-test-renderer";
import { App } from "./App";
import { MemoryRouter } from "react-router";

jest.mock("../Editor/Editor", () => {
  return {
    Editor: () => {
      return <></>;
    },
  };
});

it("renders correctly", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
