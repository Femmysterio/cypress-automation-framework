const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file){
  const pathToConfigFile = path.resolve('cypress//config', `${file}.json`);

  if(!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return{};
  }

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  projectId: 'gx8yuq',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || ''

      return getConfigurationByFile(file)
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    //excludeSpecPattern: "cypress/e2e/Nairaland/*.js", //to exclude folder
    baseUrl: "https://www.webdriveruniversity.com", // to create a base url, then use "/" to substitute url
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: true,
    videoUploadOnPasses: true,
    reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
    env: {
      webdriveruni_homepage: "https://www.webdriveruniversity.com",
      first_name: "sarah"
    }
  },
});
