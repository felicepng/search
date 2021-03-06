describe('Search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('is titled "Search"', async () => {
    cy.title().should('eq', 'Search')
  })

  it('displays a search box', async () => {
    cy.get('#searchBox').should('be.visible')
  })

  it('displays a search button', async () => {
    cy.get('#searchButton').should('be.visible')
  })

  it('displays suggestion results after typing >2 characters', async () => {
    cy.get('#suggestionResults').should('not.exist')
    cy.get('#searchBox').type('Chi')
    cy.get('#suggestionResults').should('be.visible')
  })

  it('displays correct number of suggestion results', async () => {
    cy.get('#searchBox').type('Chi')
    cy.get('.suggestion-result-item').should('have.length', 6)
  })

  it('displays correct number of suggestion results regardless of casing and trailing whitespace', async () => {
    cy.get('#searchBox').type('   CHIL  ')
    cy.get('.suggestion-result-item').should('have.length', 6)
  })

  it('displays correct number of suggestion results even for terms excluding child', async () => {
    cy.get('#searchBox').type('develop')
    cy.get('.suggestion-result-item').should('have.length', 1)
  })

  it('displays \'X\' button after typing 1 or more characters', async () => {
    cy.get('#clear-icon').should('not.exist')
    cy.get('#searchBox').type('c')
    cy.get('#clear-icon').should('have.length', 1)
  })

  it('hides \'X\' button after clearing input', async () => {
    cy.get('#searchBox').type('c')
    cy.get('#searchBox').clear()
    cy.get('#clear-icon').should('not.exist')
  })

  it('clears search input after clicking on \'X\' button', async () => {
    cy.get('#searchBox').type('Chi')
    cy.get('#searchBox').invoke('val').should('have.length', 3)
    cy.get('#clear-icon').click()
    cy.get('#searchBox').invoke('val').should('have.length', 0)
  })

  it('hides suggestion results after clicking on \'X\' button', async () => {
    cy.get('#searchBox').type('Chi')
    cy.get('#clear-icon').click()
    cy.get('#suggestionResults').should('not.exist')
  })

  it('has correct hover states for search box', async () => {
    cy.get('#searchButton').should('have.css', 'background-color', 'rgb(28, 118, 213)')
    cy.get('#searchButton').realHover().should('have.css', 'background-color', 'rgb(29, 78, 216)')
  })

  it('displays correct number of search results after entering', async () => {
    cy.get('#searchBox').type('Child{enter}')
    cy.get('.search-result-item').should('have.length', 10)
  })

  it('displays correct number of search results after entering regardless of casing and trailing whitespace', async () => {
    cy.get('#searchBox').type('   child{enter}')
    cy.get('.search-result-item').should('have.length', 10)
  })

  it('displays correct number of search results after clicking on button', async () => {
    cy.get('#searchBox').type('Child')
    cy.get('#searchButton').click()
    cy.get('.search-result-item').should('have.length', 10)
  })

  it('displays correct number of search results after clicking on button regardless of casing and trailing whitespace', async () => {
    cy.get('#searchBox').type('   child  ')
    cy.get('#searchButton').click()
    cy.get('.search-result-item').should('have.length', 10)
  })

  it('displays correct number of search results even for multiple words', async () => {
    cy.get('#searchBox').type('Child care')
    cy.get('#searchButton').click()
    cy.get('.search-result-item').should('have.length', 3)
  })

  it('displays correct number of search results even for terms excluding child', async () => {
    cy.get('#searchBox').type('develop')
    cy.get('#searchButton').click()
    cy.get('.search-result-item').should('have.length', 2)
  })
})