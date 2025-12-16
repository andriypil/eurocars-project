import { Sidebar } from "../../../src/componetsCatalog/sidebar/Sidebar"

describe("Sidebar component", () => {
    it("renders correctly", () => {
        cy.mount(<Sidebar />)
        cy.get("body").should("exist")
    })
})
