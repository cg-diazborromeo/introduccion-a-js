/// <reference types="cypress" />

describe('Test tarea clase 6', () => {
  before('Visita la pagina de la tarea', () => {
    cy.visit('http://localhost:5500/tareas/clase-6/index-mio.html')
  })

  it('prueba la visibilidad inicial de contenido', () => {
    cy.get('#analisis').should('not.be.visible')
  })

  it('testea la funcionalidad', () => {
    cy.get("#cantidad-integrantes").type('2');
    cy.get('#siguiente-paso').click();

    cy.get('.integrante input').eq(0).type('40');
    cy.get('.integrante input').eq(1).type('20');
    cy.get('#calcular').click();

    cy.get('#promedio-edad').should('have.text', '30.00');
    cy.get('#menor-edad').should('have.text', '20');
    cy.get('#mayor-edad').should('have.text', '40');

    cy.get('#resetear').click();
    cy.get('#calcular').should('not.be.visible');
  })
})


