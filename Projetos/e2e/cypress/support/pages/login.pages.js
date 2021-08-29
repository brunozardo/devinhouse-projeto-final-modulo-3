import { loginElements } from "../elements/login.elements";

class LoginPage {

    inserirUsuario(usuario) {
        cy.get(loginElements.inputUser())
            .should('be.visible')
            .type(usuario)
    }

    inserirSenha(senha) {
        cy.get(loginElements.inputSenha())
            .should('be.visible')
            .type(senha)
    }

    fazerLogin() {
        cy.get(loginElements.btnLogin())
            .should('be.visible')
            .click()
    }

}

export const loginPage = new LoginPage();