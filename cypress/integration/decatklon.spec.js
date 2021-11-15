/// <reference types="cypress" />

describe('decathlon', () => {
  it('accept cookies policy', () => {
    cy.visit('/');
    cy.get('#didomi-notice-agree-button').click()
  })
   

    it('finding a cap', () => {
      cy.get('input[placeholder="Wpisz czego szukasz?"]').type('czapka').type('{enter}');
      cy.wait(1000); 
      cy.get('#didomi-notice-agree-button').click()
  
      cy.contains("a" , "Czapka trekkingowa TREK 500 WOOL merino")

    })

    it('TREK 500', () => {
      cy.scrollTo(0, 500)
      cy.get('span').contains('Czapka trekkingowa TREK 500 WOOL merino').click({force : true})
      // cy.contains("a" , "Czapka trekkingowa TREK 500 WOOL merino").click();//{force : true});
    })
    it('Red', () => {
      cy.get('button[id="fitAnalytics-pdp-add-to-cart"]').click()
    })
    it('add to cart', ()=>{
      
      cy.contains('Idź do koszyka').click()
      cy.get('button[class="cta cta--big svelte-1unyt6j"]').click({force: true})
    })


})
