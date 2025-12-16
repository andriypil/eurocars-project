import { RegistrationCard } from "../../../src/registration/RegistrationCard"

describe("RegistrationCard component", () => {
    it("renders correctly", () => {
        cy.mount(<RegistrationCard />)
        cy.get("body").should("exist")
    })
})
