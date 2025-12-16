import { Catalogs } from "../../../src/components/catalog/Catalogs"

describe("Catalogs component", () => {
    it("renders correctly", () => {
        cy.mount(<Catalogs />)
        cy.get("body").should("exist")
    })
})
