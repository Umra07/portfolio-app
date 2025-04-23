import { render, screen } from "@testing-library/react"
import { Layout } from "./Layout"
import { ThemeContext, ThemeContextType } from "../../context/themeContext"
import { FC } from "react"
import { MemoryRouter, Route, Routes } from "react-router-dom"

const MockPage: FC = () => <div data-testid="mock-page">Content</div>

const renderWithProviders = (theme: "light" | "dark" = "dark") => {
    const contextValue: ThemeContextType = {
        theme: theme,
        toggleTheme: jest.fn()
    }
    
    return render(
    <ThemeContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MockPage />} />
                </Route>
            </Routes>
        </MemoryRouter>
    </ThemeContext.Provider>
    )
} 

describe("Layout", () => {
    it("renders header and main content", () => {
        renderWithProviders("dark");

        const header = screen.getByRole("banner");
        const mockPage = screen.getByTestId("mock-page")

        expect(header).toBeInTheDocument();
        expect(mockPage).toBeInTheDocument();
    })

    it("applies correct theme class based on context", () => {
        renderWithProviders("light");

        const layout = screen.getByTestId("layout")
    
        expect(layout).toHaveClass("layout--light")
    })
})