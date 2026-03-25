// 3 - criar as ações da página home

/// <reference types="cypress" /> 

const elements = {
    title: {
        tituloHome: '[data-testid="hero-title"]',        
    },
};

export default{
    acessaHome(){
        cy.visit('/')
            .get(elements.title.tituloHome)
        
    },
    
    validaHome(){
        cy.get(elements.title.tituloHome)
            .should('be.visible') //verificar se o elemento está visível
            .should('have.text', 'Test Automation Practice')
        
    }

}