describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://oceaneheb.github.io/tes-gta/')
    cy.get('input[placeholder="Ajouter une tâche"]')
      .type('Faire les courses')
    cy.get('button').click()
    cy.contains('[data-cy="number-task"]', '1')
    cy.contains('[data-cy="todo"]', 'Faire les courses').find('button').click()
    cy.contains('[data-cy="number-task"]', '0')
  })
})
