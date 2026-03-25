#criar o meu cenário
Feature: Acessar home

Background: Acessar a página home
    Given que acesso a página inicial

  Scenario: Acessar a página home e validar o título    
    When estou na página inicial
    Then devo ver o título "Test Automation Practice"

Scenario: Validar funcionalidade do botão explorar do card Elementos Básicos
    When Eu clico no botão "Explorar" no card "Elementos Básicos"
    Then Devo ser direcionado para a página de "Elementos Básicos"

Scenario: Validar funcionalidade do botão explorar do card Formulários
    When Eu clico no botão "Explorar" no card "Formulários"
    Then Devo ser direcionado para a página de "Formulários"

Scenario: Validar funcionalidade do botão explorar do card Alertas e Modais
    When Eu clico no botão "Explorar" no card "Alertas e Modais"
    Then Devo ser direcionado para a página de "Alertas e Modais"

Scenario: Validar funcionalidade do botão explorar do card Widgets Interativos
    When Eu clico no botão "Explorar" no card "Widgets Interativos"
    Then Devo ser direcionado para a página de "Widgets Interativos"

Scenario: Validar funcionalidade do botão explorar do card Tabelas Dinâmicas
    When Eu clico no botão "Explorar" no card "Tabelas Dinâmicas"
    Then Devo ser direcionado para a página de "Tabelas Dinâmicas"

Scenario: Validar funcionalidade do botão explorar do card Upload/Download
    When Eu clico no botão "Explorar" no card "Upload/Download"
    Then Devo ser direcionado para a página de "Upload e Download"

Scenario: Validar funcionalidade do botão explorar do card Autenticação
    When Eu clico no botão "Explorar" no card "Autenticação"
    Then Devo ser direcionado para a página de "Autenticação"

Scenario: Validar funcionalidade do botão explorar do card CRUD Operations
    When Eu clico no botão "Explorar" no card "CRUD Operations"
    Then Devo ser direcionado para a página de "CRUD Operations"

Scenario: Validar funcionalidade do botão explorar do card API Playground
    When Eu clico no botão "Explorar" no card "API Playground"
    Then Devo ser direcionado para a página de "API Playground"

Scenario: Validar funcionalidade do botão explorar do card Desafios
    When Eu clico no botão "Explorar" no card "Desafios"
    Then Devo ser direcionado para a página de "Desafios"

Scenario: Validar funcionalidade do botão explorar do card Performance
    When Eu clico no botão "Explorar" no card "Performance"
    Then Devo ser direcionado para a página de "Performance"

Scenario: Validar funcionalidade do botão explorar do card Documentação
    When Eu clico no botão "Explorar" no card "Documentação"
    Then Devo ser direcionado para a página de "Documentação"    