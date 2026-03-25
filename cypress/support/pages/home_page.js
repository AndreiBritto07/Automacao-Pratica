// 3 - criar as ações da página home

/// <reference types="cypress" /> 

const elements = {
    title: {
        tituloHome: '[data-testid="hero-title"]',
        tituloTela: '[data-testid="page-title"]',
    },
    card: {
        container: '[data-testid^="card-"]',
        action: (key) => `[data-testid="card-action-${key}"]`
    },
    button: {
        explorar: 'Explorar'
    }
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
        
    },

    clicaBotaoCard(buttonText, cardName) {

        cy.contains(`${elements.card.container} h3`, cardName)
            .parents(elements.card.container)
            .within(() => {
            
                cy.contains('button', buttonText).click()
            })
    },
    
    validaPaginaCard(tituloPage){
        cy.get(elements.title.tituloTela)
            .should('be.visible') //verificar se o elemento está visível
            .should('contain.text', tituloPage)
    }
    
}