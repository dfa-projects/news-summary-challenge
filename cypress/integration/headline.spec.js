describe("feature tests", function(){
    beforeEach(function(){
        cy.intercept("https://content.guardianapis.com/*", {fixture : "ufo-data.json"});
        cy.visit("/");
    });

    it("should display page heading", function(){
        cy.contains("Scary Scenes")
    });

    it("should display headlines", function(){  
        cy.contains("UFO report details ‘difficult to explain’ sightings, says US ex-intelligence director - MOCKED");
        cy.contains("Pentagon confirms leaked photos and video of UFOs are legitimate");
        cy.contains("The truth is out there … perhaps: CIA releases thousands of UFO files");
        cy.contains("The Believer by Sarah Krasnostein review – the faces of faith, from religion to UFOs");
        cy.contains("From devout Christianity to UFOs: Sarah Krasnostein comes to grips with faith");
        cy.contains("'It’s not a question of belief': the film examining government UFO records");
        cy.contains("'People need to open their minds!' – Tom DeLonge on his new career as a UFO expert");
        cy.contains("Pentagon releases three UFO videos taken by US navy pilots");
        cy.contains("US defense department creates taskforce to investigate UFOs");
        cy.contains("'Like a spiral UFO': world's longest animal discovered in Australian waters");
    });

    it("should display images", function(){
        cy.get("#images").should("be.visible");
    });  
});