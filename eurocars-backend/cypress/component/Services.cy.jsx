import { Services } from "../../../src/components/servics/Services"
describe("Services component", () => {
    it("renders correctly", () => {
        cy.mount(<Services />)
        cy.get("body").should("exist")
    })
})
