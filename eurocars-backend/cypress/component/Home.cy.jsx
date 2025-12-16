import { MemoryRouter } from "react-router-dom"
import { Home } from "../../../src/components/home/Home"

describe("Home component", () => {
    it("renders correctly", () => {
        cy.mount(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )

        cy.get("body").should("exist")
    })
})
