/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /A better way to enjoy every day./i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders a button", () => {
    render(<Home />);

    const button = screen.getByText(/Request an invite/i);

    expect(button).toBeInTheDocument();
  });
});
