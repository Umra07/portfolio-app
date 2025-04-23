import { fireEvent, render, screen } from "@testing-library/react";
import { ContactForm } from "./ContactForm";

describe("ContactForm", () => {
    beforeEach(() => {
        render(<ContactForm theme="black" />)
    })

    test("renders correctly with given theme prop", async () => {
        const formElement = await screen.findByRole("form");

        expect(formElement).toHaveClass("form--black")
    })

    test("form is submitted", () => {
        const submitButton = screen.getByRole("button");
        const emailInput = screen.getByPlaceholderText(/email/i);
        const subjectInput = screen.getByPlaceholderText(/subject/i);
        const messageText = screen.getByPlaceholderText(/message/i);

        fireEvent.change(emailInput, { target: { value: "test@test.com" } })
        fireEvent.change(subjectInput, { target: { value: "New SUBJECT" } })
        fireEvent.change(messageText, { target: { value: "test message" } })

        expect(emailInput).toHaveValue("test@test.com")
        expect(subjectInput).toHaveValue("New SUBJECT")
        expect(messageText).toHaveValue("test message")

        fireEvent.click(submitButton);

        expect(emailInput).toHaveValue("")
        expect(subjectInput).toHaveValue("")
        expect(messageText).toHaveValue("")
    })
});