const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor")
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild")

module.exports = defineConfig({
  projectId: 'svq67n',
  //allowCypressEnv: false,

  e2e: {
    baseUrl: "https://test-automation-practice.com.br/",
    defaultCommandTimeout: 5000,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {

      addCucumberPreprocessorPlugin(on, config);
      
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
