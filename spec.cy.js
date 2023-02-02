describe('TestCase_Varun', () => {
  it('Checking Overview for GBPJPY', () => {
    //Enter the website
    cy.visit('https://www.tradingview.com/markets/currencies/rates-all/')
    
    //Visit the Login Page
    cy.get('body > div.tv-main > div.tv-header.tv-header__top.js-site-header-container.tv-header--sticky > div.tv-header__inner > div.tv-header__area.tv-header__area--user > button.tv-header__user-menu-button.tv-header__user-menu-button--anonymous.js-header-user-menu-button').click()
    cy.get('#overlap-manager-root > div:nth-child(2) > span > div.menu-_s3Vh8P3.menuWrap-biWYdsXC > div > div > div > div > button:nth-child(1) > span > span > span').click()
    cy.get('#overlap-manager-root > div > div.tv-dialog__modal-wrap.tv-dialog__modal-wrap--contain-size > div > div > div > div > div > div > div:nth-child(1) > div.i-clearfix > div > span').click()

    //Login Details- Change as per User
    cy.get('input[name=username]').type('varunvishal2')
    cy.get('input[name=password]').type(`${'Vvarun@123'}{enter}`)
    
  
    //Searching for GBPJPY
    cy.get('#js-category-content > div > div > div.tv-feed.tv-feed--no-hindent.tv-feed--tablet-top-indent.tv-feed--no-min-height.tv-feed--no-vertical-margin > div > div > div > div > div > div.scrollWrap-qKQlcmkd.noScrollBar-qKQlcmkd > div > div > a:nth-child(7)').click()

    cy.get('body > div.tv-main > div.tv-header.tv-header__top.js-site-header-container.tv-header--sticky > div.tv-header__inner > div.tv-header__middle-content > div > div > button.tv-header-search-container.tv-header-search-container__button.tv-header-search-container__button--full.js-header-search-button').click()

    cy.get('body > div.tv-main > div.tv-header.tv-header__top.js-site-header-container.tv-header--sticky > div.tv-header__inner > div.tv-header__middle-content > div > div > button.tv-header-search-container.tv-header-search-container__button.tv-header-search-container__button--full.js-header-search-button')
    cy.get('#overlap-manager-root > div > div > div.wrap-Uxy01IQ6 > div > div > div.modal-_EyBsVrR.dialog-Uxy01IQ6.dialog-nnDbXk_L.rounded-nnDbXk_L.shadowed-nnDbXk_L.fullscreen-nnDbXk_L > div > div.headerSearchInputBlock-fNlbmkmf > span > form > input').type('FX: GBPJPY')
    cy.get('#overlap-manager-root > div > div > div.wrap-Uxy01IQ6 > div > div > div.modal-_EyBsVrR.dialog-Uxy01IQ6.dialog-nnDbXk_L.rounded-nnDbXk_L.shadowed-nnDbXk_L.fullscreen-nnDbXk_L > div > div.body-inXI_QW_ > div > div.wrap-vWG52QBW > div > div').invoke('show')
    cy.wait(1000)
    
    //Navigating to See overview section and asserting the URL
    cy.get('#overlap-manager-root > div > div > div.wrap-Uxy01IQ6 > div > div > div.modal-_EyBsVrR.dialog-Uxy01IQ6.dialog-nnDbXk_L.rounded-nnDbXk_L.shadowed-nnDbXk_L.fullscreen-nnDbXk_L > div > div.body-inXI_QW_ > div > div.wrap-vWG52QBW > div > div').trigger('mouseover')
    cy.wait(1000)
    
    cy.contains('See overview').click()

    cy.url().should('eq', 'https://www.tradingview.com/symbols/GBPJPY/?exchange=FX') // => true
    

  })
})