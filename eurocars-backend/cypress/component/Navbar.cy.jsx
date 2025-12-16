import { MemoryRouter } from "react-router-dom"
import { Navbar } from "../../../src/components/navbar/Navbar"

describe("Navbar component", () => {
    it("renders correctly", () => {
        cy.mount(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )

        cy.get("body").should("exist")
    })
})
