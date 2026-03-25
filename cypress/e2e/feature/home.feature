#criar o meu cenário
Feature: Acessar home

  Scenario: Acessar a página home e validar o título
    Given que acesso a página inicial
    When estou na página inicial
    Then devo ver o título "Test Automation Practice"