import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "../components/NavBar";

test("check if the correct text appears", () => {
  render(<NavBar />);
  screen.getByText(/home/i);
  screen.getByText(/Your Artworks/i);
  screen.getByText(/Your Virtual Gallery/i);
});

test("check that the links are the correct URL", () => {
  render(<NavBar />);
  const homeLink = screen.getByRole("link", { name: /Home/i });
  expect(homeLink).toHaveAttribute(
    "href",
    "https://art-gallery-rb.netlify.app/"
  );
  const userGalleryLink = screen.getByRole("link", {
    name: /Your Artworks/i,
  });
  expect(userGalleryLink).toHaveAttribute(
    "href",
    "https://art-gallery-rb.netlify.app/your-artworks"
  );
  const virtualGalleryLink = screen.getByRole("link", {
    name: /Your Virtual Gallery/i,
  });
  expect(virtualGalleryLink).toHaveAttribute(
    "href",
    "https://art-gallery-rb.netlify.app/your-virtual-gallery"
  );
});
