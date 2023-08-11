import { fireEvent, render, screen } from "@testing-library/react"
import Navbar from "../components/Navbar"
import themeSlice, { changeTheme } from "../features/themeSlice";
import { Provider } from "react-redux"
import { store } from '../store/store';
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { initialState } from "../features/countrySlice";

it('should render button', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Navbar />
            </Provider>
        </BrowserRouter>
    )
    const button = screen.getByRole('button', { name: 'Dark Mode' });
    expect(button).toBeInTheDocument();
})
it('should render button', async () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Navbar />
            </Provider>
        </BrowserRouter>
    )
    const buttonLight = screen.getByRole('button', { name: 'Dark Mode' });
    expect(buttonLight).toHaveTextContent('Dark Mode');

})

it('should change state from dark to light', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Navbar />
            </Provider>
        </BrowserRouter>
    )
    let darkMode = false
    const aftertAction = themeSlice(initialState, changeTheme(!darkMode));
    expect(aftertAction.darkMode).toBeTruthy();
})

it('should change buttin text from dark to light ', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Navbar />
            </Provider>
        </BrowserRouter>
    )
    const buttonDark = screen.getByRole('button', { name: 'Dark Mode' });
    fireEvent.click(buttonDark)
    expect(buttonDark).toHaveTextContent('Light Mode');
})