import { Unfavorite } from "../../../src/componetsCatalog/unfavorite/Unfavorite"

describe("Unfavorite component", () => {
    it("renders correctly", () => {
        cy.mount(<Unfavorite />)
        cy.get("body").should("exist")
    })
})
