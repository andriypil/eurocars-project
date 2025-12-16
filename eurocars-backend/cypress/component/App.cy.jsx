import { MemoryRouter } from "react-router-dom"
import { HomePage } from "../../../src/home_page/HomePage"

describe("HomePage component", () => {
    it("renders correctly", () => {
        cy.mount(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        )

        cy.get("body").should("exist")
    })
})
