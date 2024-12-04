import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SignUpForm } from "./SignUpForm";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";

const mockStore = configureStore();
const initialState = {
  registerFormReducer: {
    firstName: { value: "", error: { isError: false, message: "" } },
    lastName: { value: "", error: { isError: false, message: "" } },
    email: { value: "", error: { isError: false, message: "" } },
    password: { value: "", error: { isError: false, message: "" } },
  },
};
const store = mockStore(initialState);
const queryClient = new QueryClient();

import { Store } from "redux";

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
  it("renders correctly", () => {
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

  it("displays an error when invalid names are entered", async () => {
    const modifiedStore = mockStore({
      ...initialState,
      registerFormReducer: {
        ...initialState.registerFormReducer,
        firstName: {
          value: "123",
          error: { isError: true, message: "Name can only contain letters" },
        },
      },
    });
    renderSignUpForm(modifiedStore);
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

  it("disables sign up button when form requirements are not met", () => {
    renderSignUpForm(store);
    expect(screen.getByText("Sign up").closest("button")).toBeDisabled();
  });
});
