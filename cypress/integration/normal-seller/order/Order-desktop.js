import { config } from "../../../../config";
describe("NORMAL SELLER ORDER DESKTOP MODE", () => {
    before(() => {
        cy.login()       
    });

    beforeEach(() => {
        cy.viewport("macbook-15");
        cy.preserveCookie();
        cy.clearcart()
        cy.wait(5000)
        cy.visit("URL");
        cy.url().should('contain', '/products/search');
        cy.wait(5000)
    })
    after(() => {
        cy.logout();
    })

    // it("Forgot Password", function(){
    //     cy.forgotpassword();
    // })

    //Normal Products Order Test Cases

    it("Normal Product Order", function(){
        cy.normalProductOrder();
        cy.verifynormalproducttype();
        cy.get('[data-type="plus"]').click()
        cy.wait(5000)
        
        cy.clickoncarticon();
        cy.placeanorder();

    })

    it("Normal Product Order with Price Agreement Fixed Price", function(){
        cy.normalProductOrderwithpriceagreementfixedprice();
        cy.verifypriceagreementicon();
        cy.get('.product-item-10000030173 > .prod-info > .f-18 > .d-inline').should('be.visible').should('have.text', "Normal Product with Price Agreement fixedprice")
        cy.verifynormalproducttype();

        cy.get('.product-item-10000030173').click()
        cy.verifypriceagreementonproductdetailpage();
        cy.get('#product-cart-form-detail-10000030173 > .counter > [data-type="plus"]').click()
        cy.wait(5000)
        cy.get('.detail-title').should('be.visible').click()

        cy.get('.product-cart-detail > #product-cart-form-detail-10000030173 > .counter > [data-type="plus"]').click()
        cy.wait(5000) 

        cy.clickoncarticon(); 
        cy.verifypriceagreementicon();
        cy.placeanorder();
    })

    it("Normal Product Order with Price Agreement Percentage", function(){
        cy.normalProductOrderwithpriceagreementpercentage();
        cy.verifypriceagreementicon();
        cy.get('.product-item-10000030172 > .prod-info > .f-18 > .d-inline').should('be.visible')
        .should('have.text', "Normal Product with Price Agreement percentage")
        cy.verifynormalproducttype();

        cy.get('.product-item-10000030172').click()
        cy.verifypriceagreementonproductdetailpage();
        cy.get('#product-cart-form-detail-10000030172 > .counter > [data-type="plus"]').click()
        cy.wait(5000)
        cy.get('.detail-title').should('be.visible').click()

        cy.get('.product-cart-detail > #product-cart-form-detail-10000030172 > .counter > [data-type="plus"]').click()
        cy.wait(5000) 

        cy.clickoncarticon(); 
        cy.verifypriceagreementicon();
        cy.placeanorder();
    })

    it("Normal Product Order with Sales Promotion Percentage", function(){
        cy.normalProductOrderwithsalespromotionpercentage();
        cy.verifysalespromotionpricecut();
        cy.get('.product-item-10000030175 > .prod-info > .f-18 > .d-inline').should('be.visible').should('have.text', "Normal Product with Sales Promotion percentage")
        cy.verifynormalproducttype();

        cy.get('.product-item-10000030175').click()
        cy.verifysalespromotionproductdetailpage();

        cy.get('#product-cart-form-detail-10000030175 > .counter > [data-type="plus"]').click()
        cy.wait(5000)
        cy.get('.detail-title').should('be.visible').click()

        cy.get('.product-cart-detail > #product-cart-form-detail-10000030175 > .counter > [data-type="plus"]').click()
        cy.wait(5000) 

        cy.clickoncarticon(); 
        cy.verifysalespromotionpricecut();
        cy.placeanorder();
    })

    it("Normal Product Order with Sales Promotion Fixed Price", function(){
        cy.normalProductOrderwithsalespromotionfixedprice();
        cy.verifysalespromotionpricecut();
        cy.get('.product-item-10000030174 > .prod-info > .f-18 > .d-inline').should('be.visible'
        ).should('have.text', "Normal Product with Sales Promotion fixedprice")
        cy.verifynormalproducttype();

        cy.get('#products-content').click()
        cy.get('.collapse-trigger').should('be.visible').click()
        cy.get('.price-modifier-name').should('be.visible').should('have.text', "Sales Promotion With Fixed Price Geen einddatum")

        cy.get('#product-cart-form-detail-10000030174 > .counter > [data-type="plus"]').click()
        cy.wait(5000)
        cy.get('.detail-title').should('be.visible').click()

        cy.get('.product-cart-detail > #product-cart-form-detail-10000030174 > .counter > [data-type="plus"]').click()
        cy.wait(5000) 

        cy.clickoncarticon(); 
        cy.verifysalespromotionpricecut();
        cy.placeanorder();
    })

    it("Normal Product Order with New Discount Type", function(){
        cy.normalProductOrderwithnewdiscounttype();
        cy.verifythedicounttype();
        cy.get('.product-item-10000030176 > .prod-info > .f-18 > .d-inline').should('be.visible'
        ).should('have.text', "Normal Product with Discount Type 3")
        cy.verifynormalproducttype();

        cy.get('#products-content').click()
        cy.get('#product-cart-form-detail-10000030176 > .counter > [data-type="plus"]').click()
        cy.wait(5000)
        cy.get('.detail-title').should('be.visible').click()

        cy.get('.product-cart-detail > #product-cart-form-detail-10000030176 > .counter > [data-type="plus"]').click()
        cy.wait(5000) 

        cy.clickoncarticon(); 
        cy.verifythedicounttype();
        cy.placeanorder();
    })

    it("Normal Product Order with Both Discount Type", function(){
        cy.normalProductOrderwithbothdiscounttype();
        cy.verifypriceagreementicon();
        cy.verifysalespromotionpricecut();
        cy.get('.product-item-10000030177 > .prod-info > .f-18 > .d-inline').should('be.visible'
        ).should('have.text', "Normal Product with sales promotion and price agreement")
        cy.verifynormalproducttype();
        cy.get('#products-content').click()
        cy.verifybothdiscounttypeinproductdetailpage();
        
        cy.get('#product-cart-form-detail-10000030177 > .counter > [data-type="plus"]').click()
        cy.wait(5000)
        cy.get('.detail-title').should('be.visible').click()

        cy.get('.product-cart-detail > #product-cart-form-detail-10000030177 > .counter > [data-type="plus"]').click()
        cy.wait(5000) 

        cy.clickoncarticon(); 
        cy.verifypriceagreementicon();
        cy.verifysalespromotionpricecut();
        cy.placeanorder();
    })


    // Weighed Products Order Test Cases
    it("weighed Product Order", function(){
        cy.weighedProductOrder();
        cy.verifyweighedproducttype();
        cy.get('[data-type="plus"]').click()
        cy.wait(5000)
        cy.clickoncarticon();
        cy.placeanorder();
    })

    it("Weighed Product Order with Price Agreement Fixed Price", function(){
        cy.weighedProductOrderwithpriceagreementfixedprice();
        cy.verifypriceagreementicon();
        cy.get('.product-item-10000033220 > .prod-info > .f-18 > .d-inline').should('be.visible')
        .should('have.text', "Weighed Product with Price Agreement fixedprice")
        cy.verifyweighedproducttype();
        cy.get('.product-item-10000033220').click()
        cy.verifypriceagreementonproductdetailpage();
        cy.get('#product-cart-form-detail-10000033220 > .counter > [data-type="plus"]').click()
        cy.wait(5000)
        cy.get('.detail-title').should('be.visible').click()

        cy.get('.product-cart-detail > #product-cart-form-detail-10000033220 > .counter > [data-type="plus"]').click()
        cy.wait(5000) 

        cy.clickoncarticon(); 
        cy.verifypriceagreementicon();
        cy.placeanorder();
    })

    it("Weighed Product Order with Price Agreement Percentage", function(){
        cy.weighedProductOrderwithpriceagreementpercentage();
        cy.verifypriceagreementicon();
        cy.get('.product-item-10000033221 > .prod-info > .f-18 > .d-inline').should('be.visible')
        .should('have.text', "Weighed Product with Price Agreement percentage")
        cy.verifyweighedproducttype();

        cy.get('.product-item-10000033221').click()
        cy.verifypriceagreementonproductdetailpage();
        cy.get('#product-cart-form-detail-10000033221 > .counter > [data-type="plus"]').click()
        cy.wait(5000)
        cy.get('.detail-title').should('be.visible').click()

        cy.get('.product-cart-detail > #product-cart-form-detail-10000033221 > .counter > [data-type="plus"]').click()
        cy.wait(5000) 

        cy.clickoncarticon(); 
        cy.verifypriceagreementicon();
        cy.placeanorder();
    })

    it("Weighed Product Order with Sales Promotion Percentage", function(){
        cy.weighedProductOrderwithsalespromotionpercentage();
        cy.verifysalespromotionpricecut();
        cy.get('.product-item-10000033223 > .prod-info > .f-18 > .d-inline').should('be.visible')
        .should('have.text', "Weighed Product with Sales Promotion percentage")
        cy.verifyweighedproducttype();

        cy.get('.product-item-10000033223').click()
        cy.verifysalespromotionproductdetailpage();

        cy.get('#product-cart-form-detail-10000033223 > .counter > [data-type="plus"]').click()
        cy.wait(5000)
        cy.get('.detail-title').should('be.visible').click()

        cy.get('.product-cart-detail > #product-cart-form-detail-10000033223 > .counter > [data-type="plus"]').click()
        cy.wait(5000) 

        cy.clickoncarticon(); 
        cy.verifysalespromotionpricecut();
        cy.placeanorder();
    })

    it("Weighed Product Order with Sales Promotion Fixed Price", function(){
        cy.weighedProductOrderwithsalespromotionfixedprice();
        cy.verifysalespromotionpricecut();
        cy.get('.product-item-10000033222 > .prod-info > .f-18 > .d-inline').should('be.visible'
        ).should('have.text', "Weighed Product with Sales Promotion fixedprice")
        cy.verifyweighedproducttype();

        cy.get('#products-content').click()
        cy.get('.collapse-trigger').should('be.visible').click()
        cy.get('.price-modifier-name').should('be.visible')
        .should('have.text', "Sales Promotion With Fixed Price Geen einddatum")

        cy.get('#product-cart-form-detail-10000033222 > .counter > [data-type="plus"]').click()
        cy.wait(5000)
        cy.get('.detail-title').should('be.visible').click()

        cy.get('.product-cart-detail > #product-cart-form-detail-10000033222 > .counter > [data-type="plus"]').click()
        cy.wait(5000) 

        cy.clickoncarticon(); 
        cy.verifysalespromotionpricecut();
        cy.placeanorder();
    })

    it("Weighed Product Order with New Discount Type", function(){
        cy.weighedProductOrderwithnewdiscounttype();
        cy.verifythedicounttype();
        cy.get('.product-item-10000033224 > .prod-info > .f-18 > .d-inline').should('be.visible'
        ).should('have.text', "Weighed Product with Discount Type 3")
        cy.verifyweighedproducttype();

        cy.get('#products-content').click()
        cy.get('#product-cart-form-detail-10000033224 > .counter > [data-type="plus"]').click()
        cy.wait(5000)
        cy.get('.detail-title').should('be.visible').click()

        cy.get('.product-cart-detail > #product-cart-form-detail-10000033224 > .counter > [data-type="plus"]').click()
        cy.wait(5000) 

        cy.clickoncarticon(); 
        cy.verifythedicounttype();
        cy.placeanorder();
    })

    it("Weighed Product Order with Both Discount Type", function(){
        cy.weighedProductOrderwithbothdiscounttype();
        cy.verifypriceagreementicon();
        cy.verifysalespromotionpricecut();
        cy.get('.product-item-10000033219 > .prod-info > .f-18 > .d-inline').should('be.visible'
        ).should('have.text', "Weighed Product with sales promotion and price agreement")
        cy.verifyweighedproducttype();
        cy.get('#products-content').click()
        cy.verifybothdiscounttypeinproductdetailpage();
        
        cy.get('#product-cart-form-detail-10000033219 > .counter > [data-type="plus"]').click()
        cy.wait(5000)
        cy.get('.detail-title').should('be.visible').click()

        cy.get('.product-cart-detail > #product-cart-form-detail-10000033219 > .counter > [data-type="plus"]').click()
        cy.wait(5000) 

        cy.clickoncarticon(); 
        cy.verifypriceagreementicon();
        cy.verifysalespromotionpricecut();
        cy.placeanorder();
    })

    //Configurable Product Order Test Cases
    it("Configurable Product Order", function(){
        cy.configurableProductOrder();
        cy.verifyconfigurableproducttype();
        cy.get('span[class=d-inline]').should('be.visible').should("have.text","Configurable product");
        cy.get('.col-auto > .d-inline-flex > .d-block').should('be.visible').click();
        cy.get('#conf-prod-to-cart-confirm-btn').should('be.visible').click()
        cy.wait(5000)
        cy.get('.product-item-10000033225[data-mainproduct="0"]').should('be.visible');
        cy.clickoncarticon();
        cy.placeanorder();
    })

    it("Configurable Product Order with Price Agreement Fixed Price", function(){
        cy.configurableProductOrderwithpriceagreementfixedprice();
        cy.verifypriceagreementicon();
        cy.get('.product-item-10000033226 > .prod-info > .f-18 > .d-inline').should('be.visible')
        .should('have.text', "Configurable product with Price Agreement fixedprice")
        cy.verifyconfigurableproducttype();

        cy.get('.product-item-10000033226').click()
        cy.verifypriceagreementonproductdetailpage();
        cy.get('#conf-prod-to-cart-confirm-btn').click()
        cy.wait(5000)
        cy.get('.detail-title').should('be.visible').click()
        cy.get('.product-item-10000033226[data-mainproduct="0"]').should('be.visible');
        cy.get('.col-auto > .d-inline-flex > .d-block > use').click()
        cy.get('.modal-body > .configure-product-detail > .order-configure > .p-20 > .d-flex > #conf-prod-to-cart-confirm-btn').should('be.visible').click()
        cy.wait(5000)

        cy.clickoncarticon(); 
        cy.verifypriceagreementicon();
        cy.placeanorder();
    })

    it("Configurable Product Order with Price Agreement Percentage", function(){
        cy.configurableProductOrderwithpriceagreementpercentage();
        cy.verifypriceagreementicon();
        cy.get('.product-item-10000033227 > .prod-info > .f-18 > .d-inline').should('be.visible')
        .should('have.text', "Configurable product with Price Agreement percentage")
        cy.verifyconfigurableproducttype();

        cy.get('.product-item-10000033227').click()
        cy.verifypriceagreementonproductdetailpage();
        cy.get('#conf-prod-to-cart-confirm-btn').click()
        cy.wait(5000)
        cy.get('.detail-title').should('be.visible').click()

        cy.get('.product-item-10000033227[data-mainproduct="0"]').should('be.visible'); 
        cy.get('.col-auto > .d-inline-flex > .d-block > use').click()
        cy.get('.modal-body > .configure-product-detail > .order-configure > .p-20 > .d-flex > #conf-prod-to-cart-confirm-btn').should('be.visible').click()
        cy.wait(5000)


        cy.clickoncarticon(); 
        cy.verifypriceagreementicon();
        cy.placeanorder();
    })

    it("Configurable Product Order with Sales Promotion Percentage", function(){
        cy.configurableProductOrderwithsalespromotionpercentage();
        cy.verifysalespromotionpricecut();
        cy.get('.product-item-10000033228 > .prod-info > .f-18 > .d-inline').should('be.visible')
        .should('have.text', "Configurable product with Sales Promotion percentage")
        cy.verifyconfigurableproducttype();

        cy.get('.product-item-10000033228').click()
        cy.verifysalespromotionproductdetailpage();

        cy.get('#conf-prod-to-cart-confirm-btn').click()
        cy.wait(5000)
        cy.get('.detail-title').should('be.visible').click()

        cy.get('.product-item-10000033228[data-mainproduct="0"]').should('be.visible'); 
        cy.get('.col-auto > .d-inline-flex > .d-block > use').click()
        cy.get('.modal-body > .configure-product-detail > .order-configure > .p-20 > .d-flex > #conf-prod-to-cart-confirm-btn').should('be.visible').click()
        cy.wait(5000) 

        cy.clickoncarticon(); 
        cy.verifysalespromotionpricecut();
        cy.placeanorder();
    })

    it("Configurable Product Order with Sales Promotion Fixed Price", function(){
        cy.configurableProductOrderwithsalespromotionfixedprice();
        cy.verifysalespromotionpricecut();
        cy.get('.product-item-10000033229 > .prod-info > .f-18 > .d-inline').should('be.visible')
        .should('have.text', "Configurable product with Sales Promotion fixedprice")
        cy.verifyconfigurableproducttype();

        cy.get('.product-item-10000033229').click()
        cy.get('.collapse-trigger').should('be.visible').click()
        cy.get('.price-modifier-name').should('be.visible')
        .should('have.text', "Sales Promotion With Fixed Price Geen einddatum");

        cy.get('#conf-prod-to-cart-confirm-btn').click()
        cy.wait(5000)
        cy.get('.detail-title').should('be.visible').click()

        cy.get('.product-item-10000033229[data-mainproduct="0"]').should('be.visible'); 
        cy.get('.col-auto > .d-inline-flex > .d-block > use').click()
        cy.get('.modal-body > .configure-product-detail > .order-configure > .p-20 > .d-flex > #conf-prod-to-cart-confirm-btn')
        .should('be.visible').click()
        cy.wait(5000) 

        cy.clickoncarticon(); 
        cy.verifysalespromotionpricecut();
        cy.placeanorder();
    })

    it("Configurable Product Order with New Discount Type", function(){
        cy.configurableProductOrderwithnewdiscounttype();
        cy.verifythedicounttype();
        cy.get('.product-item-10000033230 > .prod-info > .f-18 > .d-inline').should('be.visible'
        ).should('have.text', "Configurable product with Discount Type 3")
        cy.verifyconfigurableproducttype();

        cy.get('.product-item-10000033230').click()
        cy.get('#conf-prod-to-cart-confirm-btn').click()
        cy.wait(5000)
        cy.get('.detail-title').should('be.visible').click()

        cy.get('.product-item-10000033230[data-mainproduct="0"]').should('be.visible'); 
        cy.get('.col-auto > .d-inline-flex > .d-block > use').click()
        cy.get('.modal-body > .configure-product-detail > .order-configure > .p-20 > .d-flex > #conf-prod-to-cart-confirm-btn')
        .should('be.visible').click()
        cy.wait(5000) 

        cy.clickoncarticon(); 
        cy.verifythedicounttype();
        cy.placeanorder();
    })

    it("Configurable Product Order with Both Discount Type", function(){
        cy.configurableProductOrderwithbothdiscounttype();
        cy.verifypriceagreementicon();
        cy.verifysalespromotionpricecut();
        cy.get('.product-item-10000033231 > .prod-info > .f-18 > .d-inline').should('be.visible'
        ).should('have.text', "Configurable product with sales promotion and price agreement")
        cy.verifyconfigurableproducttype();
        cy.get('.product-item-10000033231').click()
        cy.verifybothdiscounttypeinproductdetailpage();
        
        cy.get('#conf-prod-to-cart-confirm-btn').click()
        cy.wait(5000)
        cy.get('.detail-title').should('be.visible').click()

        cy.get('.product-item-10000033231[data-mainproduct="0"]').should('be.visible'); 
        cy.get('.col-auto > .d-inline-flex > .d-block > use').click()
        cy.get('.modal-body > .configure-product-detail > .order-configure > .p-20 > .d-flex > #conf-prod-to-cart-confirm-btn')
        .should('be.visible').click()
        cy.wait(5000) 

        cy.clickoncarticon(); 
        cy.verifypriceagreementicon();
        cy.verifysalespromotionpricecut();
        cy.placeanorder();
    })
})