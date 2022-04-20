import { config } from "../../../config/index";

class Forgot_Password {
    clickforgotpassword() {
        cy.get('#forgotPass').should('be.visible').click()
        cy.get('input[name=email]').clear().type(config.app.email);
        return this;
    }

    clickOnVersturrButton() {
        cy.get('#submitBtn').should('be.visible').click();
        cy.wait(5000)
        return this;
    }

    checkalertmessage(){
        cy.get('#strong').should('be.visible')
        .should("have.text","Gelukt!");
        cy.get('#message').should('be.visible')
        .should("have.text","De verificatielink om je wachtwoord aan te passen is verzonden naar je e-mailadres");
        return this;
    }

}

export default Forgot_Password;