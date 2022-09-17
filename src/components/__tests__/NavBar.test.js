import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import NavBar from "../NavBar";

// Tests pass when link names 'Log in', 'Log out' and 'Sign up' are uncommented in Navbar.js (lines 89, 126 & 138)

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  // screen.debug();
  const logInLink = screen.getByRole("link", { name: "Log in" });
  expect(logInLink).toBeInTheDocument();
});

test("renders Sign in and Sign up buttons again on log out", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );
  
  const logInLink = await screen.findByRole("link", { name: "Log in" });
  const signUpLink = await screen.findByRole("link", { name: "Sign up" });

  expect(logInLink).toBeInTheDocument();
  expect(signUpLink).toBeInTheDocument();
});