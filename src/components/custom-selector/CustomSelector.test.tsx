import { render, screen } from "@testing-library/react";
import { CustomSelector, OptionType } from "./CustomSelector";
import userEvent from "@testing-library/user-event";

const mockHandler = jest.fn();
const mockOptions: OptionType[] = [
    {
        name: "test1",
        value: "test1"
    },
    {
        name: "test2",
        value: "test2"
    }
]

describe("CustomSelector", () => {
    beforeEach(() => {
        render(<CustomSelector selectedOption="test" changeSelected={mockHandler} options={mockOptions} />)
    })

    it("shows selected option when passed", () => {
        const selectedOption = screen.getByTestId("selected-option")
        
        expect(selectedOption).toHaveTextContent("test");
    })

    it("shows selector options and adds active modifier when selector wrapper is clicked", async () => {
        const wrapper = screen.getByTestId("select-wrapper");

        await userEvent.click(wrapper)

        const optionsList = screen.getByRole("list");

        expect(optionsList).toBeInTheDocument();
        expect(optionsList).toHaveClass("select--active")
    })

    it("calls changeSelected with correct value when an option is clicked", async () => {
        const wrapper = screen.getByTestId("select-wrapper");

        await userEvent.click(wrapper);

        const options = screen.getAllByRole("listitem");

        await userEvent.click(options[0]);

        expect(mockHandler).toHaveBeenCalledWith(mockOptions[0].name);
    })
})