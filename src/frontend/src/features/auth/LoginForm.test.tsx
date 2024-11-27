import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import { LoginForm } from "./LoginForm";

const mockStore = configureStore();
const store = mockStore({
  loginFormReducer: {
    email: { value: "", error: { isError: false, message: "" } },
    password: { value: "", error: { isError: false, message: "" } },
  },
});

const queryClient = new QueryClient();

describe("LoginForm", () => {
  it("renders correctly", () => {
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

  it("disables log in button when form requirements are not met", () => {
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
