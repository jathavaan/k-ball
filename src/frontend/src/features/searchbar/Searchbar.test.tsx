import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { searchbarReducer } from "@features/searchbar/searchbar.slice.ts";
import { SearchBar } from "@features/searchbar/Searchbar.tsx";

const renderWithRedux = (
  component: React.ReactElement,
  options: { initialState?: any; store?: any } = {},
) => {
  const {
    initialState,
    store = configureStore({
      reducer: {
        // @ts-ignore
        searchbarReducer,
      },
      preloadedState: initialState,
    }),
  } = options;

  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("SearchBar", () => {
  it("should render without crashing", () => {
    renderWithRedux(<SearchBar />);
    expect(
      screen.getByPlaceholderText("Search for name..."),
    ).toBeInTheDocument();
  });

  it("should update input field on change", () => {
    renderWithRedux(<SearchBar />);
    const input = screen.getByPlaceholderText("Search for name...");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input).toHaveValue("test");
  });

  it("should clear the input when clear button is clicked", () => {
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

  it("should show no results text when searchResultCount is 0", () => {
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

  it("should disable search button when searchResultCount is 0", () => {
    const initialState = {
      searchbarReducer: {
        searchQuery: "test",
        searchQueryForCount: "test",
        localSearchQuery: "test",
        searchResultCount: 0,
      },
    };
    renderWithRedux(<SearchBar />, { initialState });

    const button = screen.getByRole("button", { name: /search/i });
    expect(button).toBeDisabled();
  });
});
