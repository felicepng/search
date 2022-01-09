describe('Search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should be titled "Search"', async () => {
    cy.title().should('eq', 'Search')
  })

  it('should display a search box', async () => {
    cy.get('#searchBox').should('be.visible')
  })

  it('should display a search button', async () => {
    cy.get('#searchButton').should('be.visible')
  })

  it('should display suggestion results after typing >2 characters', async () => {
    cy.get('#suggestionResults').should('have.length', 0)
    cy.get('#searchBox').type('Chi')
    cy.get('#suggestionResults').should('be.visible')
  })

  it('should display correct number of suggestion results', async () => {
    cy.get('#searchBox').type('Chi')
    cy.get('.suggestion-result-item').should('have.length', 6)
  })

  it('should display correct number of suggestion results regardless of casing and trailing whitespace', async () => {
    cy.get('#searchBox').type('   CHIL  ')
    cy.get('.suggestion-result-item').should('have.length', 6)
  })

  it('should display correct number of suggestion results even for terms excluding child', async () => {
    cy.get('#searchBox').type('develop')
    cy.get('.suggestion-result-item').should('have.length', 1)
  })

  it('should have correct hover states for search box', async () => {
    cy.get('#searchButton').should('have.css', 'background-color', 'rgb(28, 118, 213)')
    cy.get('#searchButton').realHover().should('have.css', 'background-color', 'rgb(29, 78, 216)')
  })

  it('should display correct number of search results after entering', async () => {
    cy.get('#searchBox').type('Child{enter}')
    cy.get('.search-result-item').should('have.length', 10)
  })

  it('should display correct number of search results after entering regardless of casing and trailing whitespace', async () => {
    cy.get('#searchBox').type('   child{enter}')
    cy.get('.search-result-item').should('have.length', 10)
  })

  it('should display correct number of search results after clicking on button', async () => {
    cy.get('#searchBox').type('Child')
    cy.get('#searchButton').click()
    cy.get('.search-result-item').should('have.length', 10)
  })

  it('should display correct number of search results after clicking on button regardless of casing and trailing whitespace', async () => {
    cy.get('#searchBox').type('   child  ')
    cy.get('#searchButton').click()
    cy.get('.search-result-item').should('have.length', 10)
  })

  it('should display correct number of search results even for multiple words', async () => {
    cy.get('#searchBox').type('Child care')
    cy.get('#searchButton').click()
    cy.get('.search-result-item').should('have.length', 3)
  })

  it('should display correct number of search results even for terms excluding child', async () => {
    cy.get('#searchBox').type('develop')
    cy.get('#searchButton').click()
    cy.get('.search-result-item').should('have.length', 2)
  })
})