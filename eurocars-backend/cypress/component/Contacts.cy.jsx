import { Contacts } from "../../../src/components/contacts/Contacts"

describe("Contacts component", () => {
    it("renders correctly", () => {
        cy.mount(<Contacts />)
        cy.get("body").should("exist")
    })
})
