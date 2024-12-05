import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { configureStore } from "@reduxjs/toolkit";
import { profileMenuReducer } from "@features/profile-menu/profileMenu.slice.ts";
import { ProfileMenuDrawer } from "@features/profile-menu/ProfileMenu.tsx";

const renderWithProviders = (
  component: React.ReactElement,
  {
    state = {
      isProfileMenuOpen: false,
      isProfileInfoExpanded: false,
      isRatingsExpanded: false,
    },
    store = configureStore({
      reducer: { profileMenuReducer },
      preloadedState: { profileMenuReducer: state },
    }),
  } = {},
) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return render(
    <Provider store={store}>
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <MockedProvider>{component}</MockedProvider>
        </QueryClientProvider>
      </MemoryRouter>
    </Provider>,
  );
};

describe("ProfileMenuDrawer", () => {
  it("should render and toggle expansion", async () => {
    renderWithProviders(<ProfileMenuDrawer />, {
      state: {
        isProfileMenuOpen: true,
        isProfileInfoExpanded: true,
        isRatingsExpanded: false,
      },
    });

    expect(screen.getByText("My Profile")).toBeInTheDocument();

    fireEvent.click(screen.getByText("My Profile"));
  });

  it("should handle log out correctly", () => {
    renderWithProviders(<ProfileMenuDrawer />, {
      state: {
        isProfileMenuOpen: true,
        isProfileInfoExpanded: false,
        isRatingsExpanded: false,
      },
    });

    fireEvent.click(screen.getByText("Sign out"));
  });
});
