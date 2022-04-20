import { config } from "../../../config/index";

class Login_PO {
    
    fillCredentials() {
        cy.visit(config.app.test_url);
        cy.get('input[name=username]').clear().type(config.app.email);

        cy.get('input[name=password]').clear().type(config.app.password);
        

        return this;
    }

    clickOnLoginButton() {
        cy.get('#login').should('have.text', "Log in").click();
        cy.wait(5000);
        cy.url().should('contain', '/products/search');
        
        return this;
    }
}

export default Login_PO;