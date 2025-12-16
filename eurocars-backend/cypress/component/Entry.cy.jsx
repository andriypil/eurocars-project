import { Entry } from "../../../src/registration/entry/Entry"

describe("Entry component", () => {
    it("renders correctly", () => {
        cy.mount(<Entry />)
        cy.get("body").should("exist")
    })
})
