import { render, screen } from "@testing-library/react"
import CountryCard from "../components/CountryCard"
import { BrowserRouter } from "react-router-dom"
import MockData from '../__mocks__/countryCardMock.json';
it('Should render country card with data', () => {
    render(
        <BrowserRouter>
            <CountryCard country={MockData} />
        </BrowserRouter>
    )
    const name = screen.getByText("American Samoa");
    expect(name).toBeInTheDocument()
})