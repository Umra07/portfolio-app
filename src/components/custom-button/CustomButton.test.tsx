import { fireEvent, render, screen } from "@testing-library/react"
import { CustomButton } from "./CustomButton"

import { IconName } from "../custom-icon/IconName"

const mockIcon = IconName.LEFT_ARROW

describe("CustomButton", () => {
    it("renders button with provided text", () => {
        render(<CustomButton>text</CustomButton>)
        const button = screen.getByRole("button")

        expect(button).toHaveTextContent("text")
    })

    it("renders icon when iconName is provided", () => {
        render(<CustomButton iconName={mockIcon} />)

        const icon = screen.getByTestId("custom-icon");

        expect(icon).toBeInTheDocument()
    })
    
    it('calls onClick prop when clicked', () => {
        const handleClick = jest.fn();
        render(<CustomButton handleClick={handleClick}>click</CustomButton>)
        
        const button = screen.getByRole("button");

        fireEvent.click(button)

        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it("applies custom class to button", () => {
        render(<CustomButton styles="custom-style" />)

        const button = screen.getByRole("button");

        expect(button).toHaveClass("custom-style")
    })
})