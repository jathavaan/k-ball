import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SignUpForm } from "./SignUpForm";
import { registerFormReducer } from "./auth.slice";
import { Store } from "redux";

import "@testing-library/jest-dom";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    registerFormReducer,
  },
});

const queryClient = new QueryClient();

const renderSignUpForm = (store: Store) =>
  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SignUpForm />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>,
  );

describe("SignUpForm", () => {
  it("should render correctly", () => {
    renderSignUpForm(store);
    const fields = [
      "Enter your first name",
      "Enter your last name",
      "Enter your email address",
      "Create a password",
    ];
    fields.forEach((field) => {
      expect(screen.getByPlaceholderText(field)).toBeInTheDocument();
    });
    expect(screen.getByText("Sign up")).toBeInTheDocument();
  });

  it("should display an error when invalid names are entered", async () => {
    renderSignUpForm(store);
    fireEvent.change(screen.getByPlaceholderText("Enter your first name"), {
      target: { value: "123" },
    });
    fireEvent.click(screen.getByText("Sign up"));
    await waitFor(() => {
      expect(
        screen.getByText("Name can only contain letters"),
      ).toBeInTheDocument();
    });
  });

  it("should disable sign up button when form requirements are not met", () => {
    renderSignUpForm(store);
    expect(screen.getByText("Sign up").closest("button")).toBeDisabled();
  });
});
