import { render, screen } from "@testing-library/react"
import { CustomIcon } from "./CustomIcon"
import { IconName } from "./IconName"

const mockIconName = IconName.LEFT_ARROW
const mockClass = "test";

describe("CustomIcon", () => {
    it("renders the correct icon form IconsMap", () => {
        render(<CustomIcon iconName={mockIconName} />)
        
        const iconElement = screen.getByTestId("left-arrow");

        expect(iconElement).toBeInTheDocument()
    })

    it("applies custom wrapper styles when provided", () => {

        render(<CustomIcon iconWrapperStyle={mockClass} iconName={mockIconName} />)

        const wrapper = screen.getByTestId("custom-icon");

        expect(wrapper).toHaveClass(mockClass)
    })
})