/// <reference types="Cypress" />
import 'cypress-v10-preserve-cookie'

describe("cookies test",()=>{
    before(function(){
        cy.preserveCookieOnce(
            "id",
            "rememberMeToken",
            "loginId",
            "userName",
            "image",
            "isRememberMe",
            "activePageNum",
            "role",
            "userLevelType",
            "isAdmin"
        );
            })
    beforeEach(function(){
        cy.preserveCookieOnce(
            "id",
            "rememberMeToken",
            "loginId",
            "userName",
            "image",
            "isRememberMe",
            "activePageNum",
            "role",
            "userLevelType",
            "isAdmin"
        );
    })
    it("log in",()=>{
        cy.loginUI()
    })

    
    it("privacy menu",()=>{
        // cy.visit('/')
        cy.xpath('//span[@class="title" and contains(text(), "Privacy Policy")]').click()
    })
    
    it("accessibility menu",()=>{
        // cy.visit('/')
        cy.xpath('//span[@class="title" and contains(text(), "Accessibility")]').click()
    })
    
    it("vehicle tips",()=>{
        cy.xpath('//span[@class="title" and contains(text(), "Vehicle Tips")]').click()
        
    })
    it("vehicle makes",()=>{
        cy.xpath('//span[@class="title" and contains(text(), "Vehicle Makes")]').click()
        
    })
})