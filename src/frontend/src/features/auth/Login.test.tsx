import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { USER_AUTHENTICATION } from "./auth.api";
import { LoginForm } from "./LoginForm";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { loginFormReducer, registerFormReducer } from "./auth.slice";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom";
import { getLoggedInUser, isUserLoggedIn } from "./auth.hooks";

const mocks = [
  {
    request: {
      query: USER_AUTHENTICATION,
      variables: { email: "test@test.com", password: "test123" },
    },
    result: {
      data: {
        auth: {
          userId: 1,
        },
      },
    },
  },
];

const store = configureStore({
  reducer: { loginFormReducer, registerFormReducer },
});

const queryClient = new QueryClient();

describe("Login Form", () => {
  it("renders login button and performs login", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              <LoginForm />
            </Provider>
          </QueryClientProvider>
        </MemoryRouter>
      </MockedProvider>,
    );

    // Sjekk at login-knappen vises
    const loginButton = screen.getByRole("button", { name: /log in/i });
    expect(loginButton).toBeInTheDocument();

    // Simuler brukerinndata
    fireEvent.change(screen.getByPlaceholderText(/enter your email address/i), {
      target: { value: "test@test.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/enter your password/i), {
      target: { value: "test123" },
    });

    // Klikk på login-knappen
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(isUserLoggedIn()).toBe(true);
      expect(getLoggedInUser()).toBe(1);
    });
  });
});
