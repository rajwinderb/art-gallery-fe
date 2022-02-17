import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "../components/NavBar";

test("check if the correct text appears", () => {
  render(<NavBar />);
  screen.getByText(/home/i);
  screen.getByText(/Your Art Gallery/i);
});

test("check that the links are the correct URL", () => {
  render(<NavBar />);
  const homeLink = screen.getByRole("link", { name: /Home/i });
  expect(homeLink).toHaveAttribute(
    "href",
    "https://art-gallery-rb.netlify.app/"
  );
  const userGalleryLink = screen.getByRole("link", {
    name: /Your Art Gallery/i,
  });
  expect(userGalleryLink).toHaveAttribute(
    "href",
    "https://art-gallery-rb.netlify.app/your-art-gallery"
  );
});
