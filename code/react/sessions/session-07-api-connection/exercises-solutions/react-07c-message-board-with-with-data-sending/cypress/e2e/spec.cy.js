describe('The message board', () => {
  beforeEach(() => {
    cy.fixture('posts.json').as('posts')
    cy.intercept('')
    cy.intercept('GET', '/rest/v1/posts*', { fixture: 'posts.json' })
    cy.intercept('POST', '/rest/v1/posts*').as('addPost')
  })

  it('shows all the posts', () => {
    cy.visit('http://localhost:5173/')

    cy.get('@posts')
      .then((posts) => posts.toReversed())
      .each((post, index) => {
        cy.get('.PostList-Item')
          .eq(index)
          .should('contain', post.title)
      })
  })

  it('can add new posts', () => {
    cy.visit('http://localhost:5173')

    cy.get('a')
      .contains('Add Post')
      .click()
    
    cy.getInput('title')
      .type('The best message ever')
    cy.getInput('author')
      .type('Cypress')
    cy.getInput('date')
      .type('2024-07-13')
    cy.getTextarea('summary')
      .type('This is the best message that has ever been written')

    cy.get('form.PostForm')
      .submit()

    cy.intercept('GET', '/rest/v1/posts*', { fixture: 'newPosts.json' })

    cy.wait('@addPost')
      .get('.PostList-Item')
      .contains('The best message ever - by Cypress')
  })
})
