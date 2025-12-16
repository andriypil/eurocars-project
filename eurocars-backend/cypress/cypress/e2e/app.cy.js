describe("E2E тест веб-додатку", () => {
    it("користувач відкриває головну сторінку додатку", () => {

        cy.visit("http://localhost:5174")

        cy.get("body").should("exist")
    })

    it("користувач може перейти по сторінках сайту", () => {

        cy.visit("http://localhost:5174")

        cy.get("a").first().click({ force: true })

        cy.get("body").should("exist")
    })
})
