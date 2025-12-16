import { AboutAs } from "../../../src/components/about-as/AboutAs"

describe("AboutAs component", () => {
    it("renders correctly", () => {
        cy.mount(<AboutAs />)
        cy.get("body").should("exist")
    })
})

