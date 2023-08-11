import { fireEvent, render, screen, within } from "@testing-library/react"
import Search from "../components/Search"
import { Provider } from "react-redux"
import { store } from '../store/store';
import countries from '../__mocks__/searchCountriesMock.json';
import { BrowserRouter } from "react-router-dom";
import countrySlice, { initialState, countrySearchSuccess, countrySearchPending } from "../features/countrySlice";
import countryDropdown from '../__mocks__/countryDropdownMock.json';

it('should render search input', () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Search />
            </BrowserRouter>
        </Provider>
    )
    const autoComplete = screen.getByTestId('auto-complete');
    expect(autoComplete).toBeInTheDocument();
})
it('should change input value', () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Search />
            </BrowserRouter>
        </Provider>
    )
    const value = "";
    const autoComplete = screen.getByTestId('auto-complete');
    const input = within(autoComplete).getByPlaceholderText('Search countries');
    const name = countries[0].name.common;
    fireEvent.change(input, { target: { value: 'Saudi Arabia' } })
    fireEvent.click(autoComplete)
    expect(input.value).toEqual(name);
})
it('should test country search reducer', () => {

    const afterOperation = countrySlice(initialState, countrySearchSuccess(countryDropdown));
    console.log(afterOperation);
    expect(afterOperation.country).toEqual(countryDropdown);
})