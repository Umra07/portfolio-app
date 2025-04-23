import { render, screen } from "@testing-library/react";
import { FC } from "react";
import { SectionWrapper } from "./SectionWrapper";

const MockElement: FC = () => <div data-testid="mock-element">Content</div>

describe("SectionWrapper", () => {
    it("renders children when provided", () => {
        render(
        <SectionWrapper>
            <MockElement />
        </SectionWrapper>
        )

        const mockElement = screen.getByTestId("mock-element");

        expect(mockElement).toBeInTheDocument();
    })

    it("applies custom className when 'styles' prop is provided", () => {
        render(
        <SectionWrapper styles="test">
            <MockElement />
        </SectionWrapper>)

        const wrapper = screen.getByTestId("section-wrapper");

        expect(wrapper).toHaveClass("test")
    })
})