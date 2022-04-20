// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// **********************************************
    import Login_PO from "../support/pageObjects/Login_PO";
    import Forgot_Password from "./pageObjects/Forgot_Password";
    //Normal Seller Normal Product
    import Normal_Product_order from "../support/normalSeller/normalProduct/Normal_Product_order";
    import Normal_Product_Order_Priceagreement_Fixedprice from "./normalSeller/normalProduct/Normal_Product_Order_Priceagreement_Fixedprice";
    import Normal_Product_order_Priceagreement_Percentage from "./normalSeller/normalProduct/Normal_Product_Order_Priceagreement_Percentage";
    import Normal_Product_order_Salespromotion_Percentage from "./normalSeller/normalProduct/Normal_Product_Order_Salespromotion_Percentage";
    import Normal_Product_order_Salespromotion_Fixedprice from "./normalSeller/normalProduct/Normal_Product_Order_Salespromotion_Fixedprice";
    import Normal_Product_Order_New_Discount_Type from "./normalSeller/normalProduct/Normal_Product_Order_New_Discount_Type";
    import Normal_Product_Order_Both_Discount_Type from "./normalSeller/normalProduct/Normal_Product_Order_Both_Discount_Type";
    //Normal Seller Normal product Mobile View
    import Normal_Product_Order_Both_Discount_Type_Mobile from "./normalSeller/normalProduct-mobile/Normal_Product_Order_Both_Discount_Type";
    import Normal_Product_order_Mobile from "./normalSeller/normalProduct-mobile/Normal_Product_order";
    import Normal_Product_Order_Priceagreement_Fixedprice_Mobile from "./normalSeller/normalProduct-mobile/Normal_Product_Order_Priceagreement_Fixedprice";
    import Normal_Product_Order_Priceagreement_Percentage_Mobile from "./normalSeller/normalProduct-mobile/Normal_Product_Order_Priceagreement_Percentage";
    import Normal_Product_Order_Salespromotion_Percentage_Mobile from "./normalSeller/normalProduct-mobile/Normal_Product_Order_Salespromotion_Percentage";
    import Normal_Product_Order_Salespromotion_Fixedprice_Mobile from "./normalSeller/normalProduct-mobile/Normal_Product_Order_Salespromotion_Fixedprice"
    import Normal_Product_Order_New_Discount_Type_Mobile from "./normalSeller/normalProduct-mobile/Normal_Product_Order_New_Discount_Type";
    //Normal Seller Weighed Product
    import weighed_Product_Order from "./normalSeller/weighedProduct/Weighed_Product_order";
    import Weighed_Product_Order_Priceagreement_Fixedprice from "./normalSeller/weighedProduct/Weighed_Product_Order_Priceagreement_Fixedprice"
    import Weighed_Product_order_Priceagreement_Percentage from "./normalSeller/weighedProduct/Weighed_Product_Order_Priceagreement_Percentage";
    import Weighed_Product_order_Salespromotion_Percentage from "./normalSeller/weighedProduct/Weighed_Product_Order_Salespromotion_Percentage";
    import Weighed_Product_order_Salespromotion_Fixedprice from "./normalSeller/weighedProduct/Weighed_Product_Order_Salespromotion_Fixedprice";
    import Weighed_Product_Order_New_Discount_Type from "./normalSeller/weighedProduct/Weighed_Product_Order_New_Discount_Type";
    import Weighed_Product_Order_Both_Discount_Type from "./normalSeller/weighedProduct/Weighed_Product_Order_Both_Discount_Type";
    //Normal Seller Weighed Product Mobile View
    import Weighed_Product_order_Mobile from "./normalSeller/weighedProduct-mobile/Weighed_Product_order";
    import Weighed_Product_Order_Priceagreement_Fixedprice_Mobile from "./normalSeller/weighedProduct-mobile/Weighed_Product_Order_Priceagreement_Fixedprice";
    import Weighed_Product_Order_Priceagreement_Percentage_Mobile from "./normalSeller/weighedProduct-mobile/Weighed_Product_Order_Priceagreement_Percentage";
    import Weighed_Product_order_Salespromotion_Percentage_Mobile from "./normalSeller/weighedProduct-mobile/Weighed_Product_Order_Salespromotion_Percentage";
    import Weighed_Product_order_Salespromotion_Fixedprice_Mobile from "./normalSeller/weighedProduct-mobile/Weighed_Product_Order_Salespromotion_Fixedprice";
    import Weighed_Product_Order_New_Discount_Type_Mobile from "./normalSeller/weighedProduct-mobile/Weighed_Product_Order_New_Discount_Type";
    import Weighed_Product_Order_Both_Discount_Type_Mobile from "./normalSeller/weighedProduct-mobile/Weighed_Product_Order_Both_Discount_Type";
    //Normal Seller Configurable Product
    import Configurable_Product_Order from "./normalSeller/configuralbeProduct/Configurable_Product_order";
    import Configurable_Product_Order_Priceagreement_Fixedprice from "./normalSeller/configuralbeProduct/Configurable_Product_Order_Priceagreement_Fixedprice"
    import Configurable_Product_order_Priceagreement_Percentage from "./normalSeller/configuralbeProduct/Configurable_Product_Order_Priceagreement_Percentage";
    import Configurable_Product_order_Salespromotion_Percentage from "./normalSeller/configuralbeProduct/Configurable_Product_Order_Salespromotion_Percentage";
    import Configurable_Product_order_Salespromotion_Fixedprice from "./normalSeller/configuralbeProduct/Configurable_Product_Order_Salespromotion_Fixedprice";
    import Configurable_Product_Order_New_Discount_Type from "./normalSeller/configuralbeProduct/Configurable_Product_Order_New_Discount_Type";
    import Configurable_Product_Order_Both_Discount_Type from "./normalSeller/configuralbeProduct/Configurable_Product_Order_Both_Discount_Type";
    //Normal Seller Configurable Product Mobile View
    import Configurable_Product_Order_Mobile from "./normalSeller/configuralbeProduct-mobile/Configurable_Product_order";
    import Configurable_Product_Order_Priceagreement_Fixedprice_Mobile from "./normalSeller/configuralbeProduct-mobile/Configurable_Product_Order_Priceagreement_Fixedprice"
    import Configurable_Product_order_Priceagreement_Percentage_Mobile from "./normalSeller/configuralbeProduct-mobile/Configurable_Product_Order_Priceagreement_Percentage";
    import Configurable_Product_order_Salespromotion_Percentage_Mobile from "./normalSeller/configuralbeProduct-mobile/Configurable_Product_Order_Salespromotion_Percentage";
    import Configurable_Product_order_Salespromotion_Fixedprice_Mobile from "./normalSeller/configuralbeProduct-mobile/Configurable_Product_Order_Salespromotion_Fixedprice";
    import Configurable_Product_Order_New_Discount_Type_Mobile from "./normalSeller/configuralbeProduct-mobile/Configurable_Product_Order_New_Discount_Type";
    import Configurable_Product_Order_Both_Discount_Type_Mobile from "./normalSeller/configuralbeProduct-mobile/Configurable_Product_Order_Both_Discount_Type";
    


    //Login
    const login_PO = new Login_PO();
    
    Cypress.Commands.add("login", () => {
        login_PO
        .fillCredentials()
        .clickOnLoginButton()
    });

    Cypress.Commands.add("preserveCookie", () => {
        Cypress.Cookies.preserveOnce('connect.sid');
    });

    //Test on Mobile view
    Cypress.Commands.add("mobileview",() => {
        cy.viewport("iphone-xr");
    })


    // Logout
    Cypress.Commands.add("logout",() => {
        cy.get('#log-out').click();
        cy.url().should('contain', '/login');
        
    })

    // Logout on mobile view
    Cypress.Commands.add("logoutonmobile",() => {
        cy.get('.icon-trigger').should('be.visible').click();
        cy.get('.faDark').should('be.visible').click();
        cy.wait(2000)
        cy.get('#login').should("be.visible");
    })

    // Forgot Password
    const forgot_Password = new Forgot_Password();
    Cypress.Commands.add("forgotpassword", () => {
        forgot_Password
        .clickforgotpassword()
        .clickOnVersturrButton()
        .checkalertmessage()
    })

    //Clear cart
    Cypress.Commands.add("clearcart", () => {
        cy.visit("URL"); 
    })

    //Going to cart page 
    Cypress.Commands.add("clickoncarticon", () => {
        cy.get('#headerCart').should('be.visible').click({ force: true });
        cy.wait(5000)
        cy.url().should('contain', '/cart');  
    })
    
    // Making an Order
    Cypress.Commands.add("placeanorder", () => {
        cy.get('.cart-tab-item-order').should('be.visible').click(); 
        cy.get('#place-order-modal-dialog > .modal-content > .modal-footer > #conf-prod-to-cart-confirm-btn').should('be.visible').click();
        cy.wait(5000)
    })

    // Making an Order on Mobile view
    Cypress.Commands.add("placeanordermobile", () => {
        cy.get('#place-order').should('be.visible').click({ force: true }); 
        cy.get('#place-order-modal-dialog > .modal-content > .modal-footer > #conf-prod-to-cart-confirm-btn').should('be.visible').click();
        cy.wait(5000)
    })

    //Normal Product Type verify
    Cypress.Commands.add("verifynormalproducttype", () => {
        cy.get('.col-prod-item[data-product-type="1"]').should('be.visible')
    })

    //weighed Product Type verify
    Cypress.Commands.add("verifyweighedproducttype", () => {
        cy.get('.col-prod-item[data-product-type="2"]').should('be.visible')
    })

    //Configurable Product Type verify
    Cypress.Commands.add("verifyconfigurableproducttype", () => {
        cy.get('.col-prod-item[data-product-type="3"]').should('be.visible')
    })

    //Price Agreement Icon verification
    Cypress.Commands.add("verifypriceagreementicon", () => {
        cy.get('.prod-icons > .primary > use').should('be.visible')
    })

    //Price Agreement verification on Product detail page
    Cypress.Commands.add("verifypriceagreementonproductdetailpage", () => {
        cy.get('.collapse-trigger').should('be.visible').click()
        cy.get('.price-modifier-name').should('be.visible').should('have.text', "Overeengekomen prijs")
    })

    //Sales Promotion verification
    Cypress.Commands.add("verifysalespromotionpricecut", () => {
        cy.get('.price-cut').should('be.visible')
        cy.get('.prod-label > span').should('be.visible').should('have.text', "Aanbieding")
    })
    
    //Sales Promotion verification on Product detail page
    Cypress.Commands.add("verifysalespromotionproductdetailpage", () => {
        cy.get('.prod-label > span').should('be.visible').should('have.text', "Aanbieding")
        cy.get('.collapse-trigger').should('be.visible').click()
        cy.get('.price-modifier-name').should('be.visible').should('have.text', "Sales Promotion With Percentage Geen einddatum")
    })

    //Sales Promotion and Price agreement verification on Product detail page
    Cypress.Commands.add("verifybothdiscounttypeinproductdetailpage", () => {
        cy.get('.collapse-trigger').should('be.visible').click()
        cy.get('.text-primary > .price-modifier-name').should('be.visible').should('have.text', "Overeengekomen prijs")
        cy.get('.text-secondary > .price-modifier-name').should('be.visible').should('have.text', "sales promotion for both Geen einddatum")
    })

    // Discount Type 3 icon verification
    Cypress.Commands.add("verifythedicounttype", () => {
        cy.get('.dark > use').should('be.visible')
    })

    //Adding New Product to New Fav
    Cypress.Commands.add("addtofavnew", () => {
        cy.get('.f-sm-15 > .primary > use').click()
        cy.get('.favouriteName').clear().type("test 1");
        cy.get('.submitButton > .d-block > use').click();
        cy.wait(5000)

    })

    //Adding New Product to New Fav on Product Detail Page
    Cypress.Commands.add("addtofavnewonproductdetailpage", () => {
        cy.get('.closed-heart > .d-block > use').should('be.visible').click({ force: true })
        cy.get('#createFavouriteAndAddProductForm > .d-flex > .fav-title > .favouriteName').clear().type("test 1");
        cy.get('#createFavouriteAndAddProductForm > .d-flex > .fav-prod-count > .submitButton').should('have.text',"Maak aan").click();
        cy.wait(5000)

    })

    // Adding New Product to Existing Fav
    Cypress.Commands.add("addtofavexistingfav", () => {
        cy.get('.f-sm-15 > .primary > use').click()
        cy.get('#favouriteUuid-70204b16-0cd4-47cb-8176-86c9b8faa417 > .d-flex').click()
        cy.wait(5000)
    })

    // Adding New Product to Existing Fav on Product Detail Page
    Cypress.Commands.add("addtofavexistingfavonproductdetailpage", () => {
        cy.get('.open-heart > .d-block > use').should('be.visible').click({ force: true })
        cy.get(':nth-child(2) > .dropdown > .dropdown-menu > .favouritesList > #favouriteUuid-70204b16-0cd4-47cb-8176-86c9b8faa417 > .d-flex').click()
        cy.wait(5000)
    })

    //Selecting Fav from filter
    Cypress.Commands.add("selectfilterfav", () => {
        cy.get('.favourite-filter > .filterBarItem > #status > :nth-child(2) > .cb-group > .checkboxContainer > .checkboxLabel')
        .should('be.visible').first().click();
        cy.wait(5000)
    })

    //Remove single New Product to Existing Fav
    Cypress.Commands.add("removefromfavexistingfav", () => {
        cy.get('.f-sm-15 > .primary > use').click()
        cy.wait(5000)
        cy.get('#favouriteUuid-70204b16-0cd4-47cb-8176-86c9b8faa417 > .d-flex').click()
        cy.wait(5000)
    })

    //Remove single New Product to Existing Fav On Product Detail Page
    Cypress.Commands.add("removefromfavexistingfavonproductdetailpage", () => {
        cy.get('.closed-heart > .d-block > use').should('be.visible').click({ force: true })
        cy.get('#favouriteUuid-70204b16-0cd4-47cb-8176-86c9b8faa417 > .d-flex > .fav-title').click();
    })

    //Delete Existing Fav
    Cypress.Commands.add("deleteexistingfav", () => {
        cy.get('.innerSortableList .favourite-name').should("be.visible")
        .first()
        .should('have.text', 'test 1 ')
        .next()
        .should('have.text', '0');
        cy.get('.innerSortableList > [data-table-title="Actie"] > .dropdown > .btn').first().click();
        cy.get('.innerSortableList > [data-table-title="Actie"] > .dropdown > .dropdown-menu > .deleteFavourite > span')
        .should("be.visible")
        .first()
        .should('have.text', 'Verwijder').click()
        cy.get('.confirmBtn').should('have.text', 'Verwijder').click();
        cy.wait(2000)
        cy.get('#globalDeleteModal').click();
    })

    //Verify After delete fav list
    Cypress.Commands.add("verifyfavlist", () => {
        cy.get('.innerSortableList .favourite-name').should("be.visible")
        .first()
        .should('have.text', 'test ')
        .next()
        .should('have.text', '0');
    })

    // Verify Fav icon is active
    Cypress.Commands.add("verifyfaviconactive", () => {
        cy.get('.col-prod-item a[data-toggle=dropdown]').should('have.css', 'opacity', '1');
    })

    // Verify Fav icon is active in product detail page
    Cypress.Commands.add("verifyfaviconactiveinproductdetailpage", () => {
        cy.get('.closed-heart').should('have.css', 'display', 'block');
    })

    // Verify Fav icon is inactive
    Cypress.Commands.add("verifyfaviconinactive", () => {
        cy.get('.col-prod-item a[data-toggle=dropdown]').should('have.css', 'opacity', '0.3');
    })

    // Verify Fav icon is inactive in product detail page
    Cypress.Commands.add("verifyfaviconinactiveinproductdetailpage", () => {
        cy.get('.closed-heart').should('have.css', 'display', 'none');
    })

    //Alert message while adding fav
    Cypress.Commands.add("alertmessagewhileaddingfav", () => {
        cy.get('#strong').should('be.visible')
        .should("have.text","Gelukt!");
        cy.get('#message').should('be.visible')
        .should("have.text","Dit product is toegevoegd aan je favorietenlijst");
    })

    //Alert message while removing fav
    Cypress.Commands.add("alertmessagewhileremovingfav", () => {
        cy.get('#strong').should('be.visible')
        .should("have.text","Gelukt!");
        cy.get('#message').should('be.visible')
        .should("have.text","Dit product is van deze lijst verwijderd");
    })

    //Alert message while Deleting fav
    Cypress.Commands.add("alertmessagewhiledeletingfav", () => {
        cy.get('#strong').should('be.visible')
        .should("have.text","Gelukt!");
        cy.get('#message').should('be.visible')
        .should("have.text","Succesvol verwijderd.");
    })

    //Go to Fav Page
    Cypress.Commands.add("Gotofavpage", () => {
    cy.get('[href="/favourites"] > .sideMenufa').click();
        cy.url().should('contain', '/favourites');
    })

    //Go to Product Search Page
    Cypress.Commands.add("GotoProductSearchPage", () => {
        cy.get('[href="/products/search"] > .sideMenufa').click();
        cy.url().should('contain', '/products/search');
    })

    //Normal Seller 
    //Normal product SKU Search
    const normal_Product_Order = new Normal_Product_order();
    Cypress.Commands.add("normalProductOrder", () => {
        normal_Product_Order
        .clickOnSearchBar()
    })

    const Normal_Product_order_Priceagreement_Fixedprice = new Normal_Product_Order_Priceagreement_Fixedprice();
    Cypress.Commands.add("normalProductOrderwithpriceagreementfixedprice", () => {
        Normal_Product_order_Priceagreement_Fixedprice
        .clickOnSearchBar()
    })

    const Normal_Product_Order_Priceagreement_Percentage = new Normal_Product_order_Priceagreement_Percentage();
    Cypress.Commands.add("normalProductOrderwithpriceagreementpercentage", () => {
        Normal_Product_Order_Priceagreement_Percentage
        .clickOnSearchBar()
    })

    const Normal_Product_Order_Salespromotion_Percentage = new Normal_Product_order_Salespromotion_Percentage();
    Cypress.Commands.add("normalProductOrderwithsalespromotionpercentage", () => {
        Normal_Product_Order_Salespromotion_Percentage
        .clickOnSearchBar()
    })

    const Normal_Product_Order_Salespromotion_Fixedprice = new Normal_Product_order_Salespromotion_Fixedprice();
    Cypress.Commands.add("normalProductOrderwithsalespromotionfixedprice", () => {
        Normal_Product_Order_Salespromotion_Fixedprice
        .clickOnSearchBar()
    })

    const Normal_Product_order_New_Discount_Type = new Normal_Product_Order_New_Discount_Type();
    Cypress.Commands.add("normalProductOrderwithnewdiscounttype", () => {
        Normal_Product_order_New_Discount_Type
        .clickOnSearchBar()
    })

    const Normal_Product_order_Both_Discount_Type = new Normal_Product_Order_Both_Discount_Type();
    Cypress.Commands.add("normalProductOrderwithbothdiscounttype", () => {
        Normal_Product_order_Both_Discount_Type
        .clickOnSearchBar()
    })

    //Normal Seller 
    //Normal product SKU Search Mobile View
    const normal_Product_Order_Mobile = new Normal_Product_order_Mobile();
    Cypress.Commands.add("normalProductOrdermobile", () => {
        normal_Product_Order_Mobile
        .clickOnSearchBarMobile()
    })

    const Normal_Product_order_Priceagreement_Fixedprice_Mobile = new Normal_Product_Order_Priceagreement_Fixedprice_Mobile();
    Cypress.Commands.add("normalProductOrderwithpriceagreementfixedpricemobile", () => {
        Normal_Product_order_Priceagreement_Fixedprice_Mobile
        .clickOnSearchBarMobile()
    })

    const Normal_Product_order_Priceagreement_Percentage_Mobile = new Normal_Product_Order_Priceagreement_Percentage_Mobile();
    Cypress.Commands.add("normalProductOrderwithpriceagreementpercentagemobile", () => {
        Normal_Product_order_Priceagreement_Percentage_Mobile
        .clickOnSearchBarMobile()
    })

    const Normal_Product_order_Salespromotion_Percentage_Mobile = new Normal_Product_Order_Salespromotion_Percentage_Mobile();
    Cypress.Commands.add("normalProductOrderwithsalespromotionpercentagemobile", () => {
        Normal_Product_order_Salespromotion_Percentage_Mobile
        .clickOnSearchBarMobile()
    })

    const Normal_Product_order_Salespromotion_Fixedprice_Mobile = new Normal_Product_Order_Salespromotion_Fixedprice_Mobile();
    Cypress.Commands.add("normalProductOrderwithsalespromotionfixedpricemobile", () => {
        Normal_Product_order_Salespromotion_Fixedprice_Mobile
        .clickOnSearchBarMobile()
    })

    const Normal_Product_order_New_Discount_Type_Mobile = new Normal_Product_Order_New_Discount_Type_Mobile();
    Cypress.Commands.add("normalProductOrderwithnewdiscounttypemobile", () => {
        Normal_Product_order_New_Discount_Type_Mobile
        .clickOnSearchBarMobile()
    })

    const Normal_Product_order_Both_Discount_Type_Mobile = new Normal_Product_Order_Both_Discount_Type_Mobile();
    Cypress.Commands.add("normalProductOrderwithbothdiscounttypemobile", () => {
        Normal_Product_order_Both_Discount_Type_Mobile
        .clickOnSearchBarMobile()
    })

    //Normal seller 
    //Weighed product SKU Search
    const Weighed_Product_Order = new weighed_Product_Order();
    Cypress.Commands.add("weighedProductOrder", () => {
        Weighed_Product_Order
        .clickOnSearchBar()
    })

    const Weighed_Product_order_Priceagreement_Fixedprice = new Weighed_Product_Order_Priceagreement_Fixedprice();
    Cypress.Commands.add("weighedProductOrderwithpriceagreementfixedprice", () => {
        Weighed_Product_order_Priceagreement_Fixedprice
        .clickOnSearchBar()
    })

    const Weighed_Product_Order_Priceagreement_Percentage = new Weighed_Product_order_Priceagreement_Percentage();
    Cypress.Commands.add("weighedProductOrderwithpriceagreementpercentage", () => {
        Weighed_Product_Order_Priceagreement_Percentage
        .clickOnSearchBar()
    })

    const Weighed_Product_Order_Salespromotion_Percentage = new Weighed_Product_order_Salespromotion_Percentage();
    Cypress.Commands.add("weighedProductOrderwithsalespromotionpercentage", () => {
        Weighed_Product_Order_Salespromotion_Percentage
        .clickOnSearchBar()
    })

    const Weighed_Product_Order_Salespromotion_Fixedprice = new Weighed_Product_order_Salespromotion_Fixedprice();
    Cypress.Commands.add("weighedProductOrderwithsalespromotionfixedprice", () => {
        Weighed_Product_Order_Salespromotion_Fixedprice
        .clickOnSearchBar()
    })

    const Weighed_Product_order_New_Discount_Type = new Weighed_Product_Order_New_Discount_Type()
    Cypress.Commands.add("weighedProductOrderwithnewdiscounttype", () => {
        Weighed_Product_order_New_Discount_Type
        .clickOnSearchBar()
    })

    const Weighed_Product_order_Both_Discount_Type = new Weighed_Product_Order_Both_Discount_Type();
    Cypress.Commands.add("weighedProductOrderwithbothdiscounttype", () => {
        Weighed_Product_order_Both_Discount_Type
        .clickOnSearchBar()
    })

    //Normal Seller 
    //Weighed product SKU Search Mobile View
    const Weighed_Product_Order_Mobile = new Weighed_Product_order_Mobile();
    Cypress.Commands.add("weighedProductOrdermobile", () => {
        Weighed_Product_Order_Mobile
        .clickOnSearchBarMobile()
    })

    const Weighed_Product_order_priceagreement_Fixedprice_Mobile = new Weighed_Product_Order_Priceagreement_Fixedprice_Mobile();
    Cypress.Commands.add("weighedProductOrderwithpriceagreementfixedpricemobile", () => {
        Weighed_Product_order_priceagreement_Fixedprice_Mobile
        .clickOnSearchBarMobile()
    })

    const Weighed_Product_order_Priceagreement_Percentage_Mobile = new Weighed_Product_Order_Priceagreement_Percentage_Mobile();
    Cypress.Commands.add("weighedProductOrderwithpriceagreementpercentagemobile", () => {
        Weighed_Product_order_Priceagreement_Percentage_Mobile
        .clickOnSearchBarMobile()
    })

    const Weighed_Product_Order_Salespromotion_Percentage_Mobile = new Weighed_Product_order_Salespromotion_Percentage_Mobile();
    Cypress.Commands.add("weighedProductOrderwithsalespromotionpercentagemobile", () => {
        Weighed_Product_Order_Salespromotion_Percentage_Mobile
        .clickOnSearchBarMobile()
    })

    const Weighed_Product_Order_Salespromotion_Fixedprice_Mobile = new Weighed_Product_order_Salespromotion_Fixedprice_Mobile();
    Cypress.Commands.add("weighedProductOrderwithsalespromotionfixedpricemobile", () => {
        Weighed_Product_Order_Salespromotion_Fixedprice_Mobile
        .clickOnSearchBarMobile()
    })

    const Weighed_Product_order_New_Discount_Type_Mobile = new Weighed_Product_Order_New_Discount_Type_Mobile()
    Cypress.Commands.add("weighedProductOrderwithnewdiscounttypemobile", () => {
        Weighed_Product_order_New_Discount_Type_Mobile
        .clickOnSearchBarMobile()
    })

    const Weighed_Product_order_Both_Discount_Type_Mobile = new Weighed_Product_Order_Both_Discount_Type_Mobile();
    Cypress.Commands.add("weighedProductOrderwithbothdiscounttypemobile", () => {
        Weighed_Product_order_Both_Discount_Type_Mobile
        .clickOnSearchBarMobile()
    })

    //Normal seller 
    //Configurable product SKU Search
    const configurable_Product_Order = new Configurable_Product_Order();
    Cypress.Commands.add("configurableProductOrder", () => {
        configurable_Product_Order
        .clickOnSearchBar()
    })

    const Configurable_Product_order_Priceagreement_Fixedprice = new Configurable_Product_Order_Priceagreement_Fixedprice();
    Cypress.Commands.add("configurableProductOrderwithpriceagreementfixedprice", () => {
        Configurable_Product_order_Priceagreement_Fixedprice
        .clickOnSearchBar()
    })

    const Configurable_Product_Order_Priceagreement_Percentage = new Configurable_Product_order_Priceagreement_Percentage();
    Cypress.Commands.add("configurableProductOrderwithpriceagreementpercentage", () => {
        Configurable_Product_Order_Priceagreement_Percentage
        .clickOnSearchBar()
    })

    const Configurable_Product_Order_Salespromotion_Percentage = new Configurable_Product_order_Salespromotion_Percentage();
    Cypress.Commands.add("configurableProductOrderwithsalespromotionpercentage", () => {
        Configurable_Product_Order_Salespromotion_Percentage
        .clickOnSearchBar()
    })

    const Configurable_Product_Order_Salespromotion_Fixedprice = new Configurable_Product_order_Salespromotion_Fixedprice();
    Cypress.Commands.add("configurableProductOrderwithsalespromotionfixedprice", () => {
        Configurable_Product_Order_Salespromotion_Fixedprice
        .clickOnSearchBar()
    })

    const Configurable_Product_order_New_Discount_Type = new Configurable_Product_Order_New_Discount_Type()
    Cypress.Commands.add("configurableProductOrderwithnewdiscounttype", () => {
        Configurable_Product_order_New_Discount_Type
        .clickOnSearchBar()
    })

    const Configurable_Product_order_Both_Discount_Type = new Configurable_Product_Order_Both_Discount_Type();
    Cypress.Commands.add("configurableProductOrderwithbothdiscounttype", () => {
        Configurable_Product_order_Both_Discount_Type
        .clickOnSearchBar()
    })

    //Configurable product SKU Search Mobile View
    const configurable_Product_Order_Mobile = new Configurable_Product_Order_Mobile();
    Cypress.Commands.add("configurableProductOrdermobile", () => {
        configurable_Product_Order_Mobile
        .clickOnSearchBarMobile()
    })

    const Configurable_Product_order_Priceagreement_Fixedprice_Mobile = new Configurable_Product_Order_Priceagreement_Fixedprice_Mobile();
    Cypress.Commands.add("configurableProductOrderwithpriceagreementfixedpricemobile", () => {
        Configurable_Product_order_Priceagreement_Fixedprice_Mobile
        .clickOnSearchBarMobile()
    })

    const Configurable_Product_Order_Priceagreement_Percentage_Mobile = new Configurable_Product_order_Priceagreement_Percentage_Mobile();
    Cypress.Commands.add("configurableProductOrderwithpriceagreementpercentagemobile", () => {
        Configurable_Product_Order_Priceagreement_Percentage_Mobile
        .clickOnSearchBarMobile()
    })

    const Configurable_Product_Order_Salespromotion_Percentage_Mobile = new Configurable_Product_order_Salespromotion_Percentage_Mobile();
    Cypress.Commands.add("configurableProductOrderwithsalespromotionpercentagemobile", () => {
        Configurable_Product_Order_Salespromotion_Percentage_Mobile
        .clickOnSearchBarMobile()
    })

    const Configurable_Product_Order_Salespromotion_Fixedprice_Mobile = new Configurable_Product_order_Salespromotion_Fixedprice_Mobile();
    Cypress.Commands.add("configurableProductOrderwithsalespromotionfixedpricemobile", () => {
        Configurable_Product_Order_Salespromotion_Fixedprice_Mobile
        .clickOnSearchBarMobile()
    })

    const Configurable_Product_order_New_Discount_Type_Mobile = new Configurable_Product_Order_New_Discount_Type_Mobile()
    Cypress.Commands.add("configurableProductOrderwithnewdiscounttypemobile", () => {
        Configurable_Product_order_New_Discount_Type_Mobile
        .clickOnSearchBarMobile()
    })

    const Configurable_Product_order_Both_Discount_Type_Mobile = new Configurable_Product_Order_Both_Discount_Type_Mobile();
    Cypress.Commands.add("configurableProductOrderwithbothdiscounttypemobile", () => {
        Configurable_Product_order_Both_Discount_Type_Mobile
        .clickOnSearchBarMobile()
    })