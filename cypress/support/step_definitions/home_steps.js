// 2 - transformar o gherkin em métodos do cypress
/// <reference types="cypress" /> 

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import homePage from "../pages/home_page"

Given("que acesso a página inicial", () => {
    homePage.acessaHome() 
});

When("estou na página inicial", () => {
    homePage.acessaHome()
});

When ('Eu clico no botão {string} no card {string}', (buttonText, cardName) => {
    homePage.clicaBotaoCard(buttonText, cardName)
});

Then("devo ver o título {string}", () => {
    homePage.validaHome()
});

Then ("Devo ser direcionado para a página de {string}", (tituloPage) => {
    homePage.validaPaginaCard(tituloPage)
});
