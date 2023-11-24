// <reference types="cypress" />

describe('Testes para a Agenda de Contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve apagar um contato', () => {
        cy.get('.delete').first().click()
    })

    it('Deve adicionar um contato', () => {
        cy.get('input[placeholder="Nome"]').type('Bruno Rodrigues')
        cy.get('input[placeholder="E-mail"]').type('BrunoRodrigues@teste.com')
        cy.get('input[placeholder="Telefone"]').type('11 12345678')
        cy.get('.adicionar').first().click()
    })

    it('Deve editar um contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[placeholder="Nome"]').clear()
        cy.get('input[placeholder="Nome"]').type('Julia Andrade')
        cy.get('input[placeholder="E-mail"]').clear()
        cy.get('input[placeholder="E-mail"]').type('JuliaAndrade@teste.com')
        cy.get('input[placeholder="Telefone"]').clear()
        cy.get('input[placeholder="Telefone"]').type('11 87654321')
        cy.get('.alterar').click()
    })

    it('Deve editar um contato e cancelar', () => {
        cy.get('.edit').first().click()
        cy.get('input[placeholder="Nome"]').clear()
        cy.get('input[placeholder="Nome"]').type('Bruno Rodrigues')
        cy.get('input[placeholder="E-mail"]').clear()
        cy.get('input[placeholder="E-mail"]').type('BrunoRodrigues@teste.com')
        cy.get('input[placeholder="Telefone"]').clear()
        cy.get('input[placeholder="Telefone"]').type('11 12345678')
        cy.get('.cancelar').click()
    })


})