const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://test30.evitelabs.com',
    viewportWidth: 1280,  // Desktop width
    viewportHeight: 720 ,  // Desktop height
    video: true,  
    videosFolder: 'cypress/videos',
  },
});
