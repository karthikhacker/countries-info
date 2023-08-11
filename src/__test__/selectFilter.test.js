import { fireEvent, render, screen } from "@testing-library/react"
import SelectFilter from "../components/SelectFilter"
import { store } from '../store/store';
import { Provider } from "react-redux";
import axios from 'axios';
import MOCK_DATA from '../__mocks__/mockData.json'
import MOCK_REGION from '../__mocks__/regionMock.json';
import { act } from "react-dom/test-utils";
import CountryCard from "../components/CountryCard";
import { BrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
jest.mock('axios', () => ({
    default: {
        get: () => ({
            data: MOCK_REGION
        })
    }
}))

it('should render select filter', () => {
    render(
        <Provider store={store}>
            <SelectFilter />
        </Provider>
    )
    const select = screen.getByTestId('select');
    expect(select).toBeInTheDocument()
})
it('should change  select filter state', async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Home />
                </Provider>
            </BrowserRouter>
        )
    );
    const select = screen.getByTestId('select');
    fireEvent.change(select, { target: { value: 'Asia' } })
})