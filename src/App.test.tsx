import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Home from "./page/Home";


test("renders home page link", () => {
  render(<Home />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
