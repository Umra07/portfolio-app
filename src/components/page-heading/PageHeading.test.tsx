import { render, screen } from "@testing-library/react"
import { PageHeading } from "./PageHeading"

const mockHeading = "Test".split("");

it("renders heading characters as list items in uppercase", () => {
    render(<PageHeading heading={mockHeading} theme="light" />)

    const listItems = screen.getAllByRole("listitem");

    listItems.forEach((item, i) => {
        expect(item).toHaveTextContent(mockHeading[i].toUpperCase())
    })
})