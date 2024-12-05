import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { configureStore } from "@reduxjs/toolkit";
import { loginFormReducer } from "./auth.slice";
import "@testing-library/jest-dom";
import { LoginForm } from "./LoginForm";

const store = configureStore({
  reducer: {
    loginFormReducer,
  },
});

const queryClient = new QueryClient();

describe("LoginForm", () => {
  it("should render correctly", () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <LoginForm />
          </Router>
        </QueryClientProvider>
      </Provider>,
    );
    expect(
      screen.getByPlaceholderText("Enter your email address"),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your password"),
    ).toBeInTheDocument();
    expect(screen.getByText("Log in")).toBeInTheDocument();
  });

  it("should disable log in button when form requirements are not met", () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <LoginForm />
          </Router>
        </QueryClientProvider>
      </Provider>,
    );
    expect(screen.getByText("Log in").closest("button")).toBeDisabled();
  });
});
