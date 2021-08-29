import { homeElements } from "../elements/home.elements";

class HomePages {

    mensagemBemVindo() {
        cy.get(homeElements.header()).should('be.visible')
            .contains('Cicrano Beltrano')
    }

    btnLogout() {
        cy.get(homeElements.btnLogout())
            .find('span')
            .contains('Logout')
            .click()
    }
}

export const homePages = new HomePages()