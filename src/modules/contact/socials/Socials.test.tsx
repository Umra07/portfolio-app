import { render, screen } from "@testing-library/react"
import { Socials } from "./Socials"

test("renders social links with target='_blank'", () => {
    render(<Socials />)

    const links = {
        linkedin: screen.getByTestId(/linkedin/),
        telegram: screen.getByTestId(/telegram/),
        instagram: screen.getByTestId(/instagram/)
    }

    Object.values(links).forEach((link) => {
        expect(link).toHaveAttribute("target", "_blank");
    })

    expect(links.linkedin).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
    expect(links.telegram).toHaveAttribute("href", expect.stringContaining("t.me"));
    expect(links.instagram).toHaveAttribute("href", expect.stringContaining("instagram.com"));
})