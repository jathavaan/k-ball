import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { searchbarReducer } from "@features/searchbar/searchbar.slice.ts";
import { SearchBar } from "@features/searchbar/Searchbar.tsx";

// Helper to render the component with a Redux provider
const renderWithRedux = (
  component: React.ReactElement,
  options: { initialState?: any; store?: any } = {},
) => {
  const {
    initialState,
    store = configureStore({
      reducer: searchbarReducer,
      preloadedState: initialState,
    }),
  } = options;
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("SearchBar", () => {
  it("renders without crashing", () => {
    renderWithRedux(<SearchBar />);
    expect(
      screen.getByPlaceholderText("Search for name..."),
    ).toBeInTheDocument();
  });

  it("updates input field on change", () => {
    renderWithRedux(<SearchBar />);
    const input = screen.getByPlaceholderText("Search for name...");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input).toHaveValue("test");
  });

  it("clears the input when clear button is clicked", () => {
    const initialState = {
      searchbarReducer: {
        searchQuery: "",
        searchQueryForCount: "",
        localSearchQuery: "test",
        searchResultCount: 1,
      },
    };
    renderWithRedux(<SearchBar />, { initialState });
    expect(screen.getByLabelText("clear")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("clear"));
    expect(screen.getByPlaceholderText("Search for name...")).toHaveValue("");
  });

  it("shows no results text when searchResultCount is 0", () => {
    const initialState = {
      searchbarReducer: {
        searchQuery: "test",
        searchQueryForCount: "test",
        localSearchQuery: "test",
        searchResultCount: 0,
      },
    };
    renderWithRedux(<SearchBar />, { initialState });
    expect(screen.getByText("No results")).toBeInTheDocument();
  });

  it("disables search button when searchResultCount is 0", () => {
    const initialState = {
      searchbarReducer: {
        searchQuery: "test",
        searchQueryForCount: "test",
        localSearchQuery: "test",
        searchResultCount: 0,
      },
    };
    renderWithRedux(<SearchBar />, { initialState });
    const button = screen.getByLabelText("disabled search");
    expect(button).toBeDisabled();
  });
});
