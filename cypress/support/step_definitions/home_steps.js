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

Then("devo ver o título {string}", () => {
    homePage.validaHome()
});
