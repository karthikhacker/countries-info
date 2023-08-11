import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import countrySlice from "../features/countrySlice";
import themeSlice from "../features/themeSlice";

export function renderWithProviders(
    ui,
    {
        preloadedState = {},
        store = configureStore({
            reducer: {
                countries: countrySlice,
                themes: themeSlice
            }, preloadedState
        }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return {
        store,
        ...render(ui, { wrapper: Wrapper, ...renderOptions })
    }
}