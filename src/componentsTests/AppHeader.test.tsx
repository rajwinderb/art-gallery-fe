import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppHeader from "../components/AppHeader";

const setUserId = jest.fn();

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("check if the Art Gallery header is present", () => {
  const userId = 1;
  const { container } = render(
    <AppHeader userId={userId} setUserId={setUserId} />
  );
  const titleElement = screen.getByText("Art Gallery");
  const headerElement = container.getElementsByClassName("AppHeader");
  expect(titleElement).toBeInTheDocument();
  expect(headerElement[0]).toBeInTheDocument();
});

test("check if a user is not logged in username input and login button visible", async () => {
  const userId = null;
  const { container } = render(
    <AppHeader userId={userId} setUserId={setUserId} />
  );
  const usernameInputElement =
    container.getElementsByClassName("UsernameInput");
  const loginButtonElement = container.getElementsByClassName("LogInButton");
  expect(usernameInputElement[0]).toBeInTheDocument();
  expect(loginButtonElement[0]).toBeInTheDocument();
});

test("check if user is logged in username and sign out button visible", () => {
  const userId = 1;
  const { container } = render(
    <AppHeader userId={userId} setUserId={setUserId} />
  );
  const usernameElement = container.getElementsByClassName("Username");
  const signOutButtonElement =
    container.getElementsByClassName("SignOutButton");
  expect(usernameElement[0]).toBeInTheDocument();
  expect(signOutButtonElement[0]).toBeInTheDocument();
});

test("check if the NavBar was visible when logged in", () => {
  const userId = 1;
  const { container } = render(
    <AppHeader userId={userId} setUserId={setUserId} />
  );
  const navBarElement = container.getElementsByClassName("NavBar");
  expect(navBarElement[0]).toBeInTheDocument();
});
