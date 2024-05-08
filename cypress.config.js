const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'e2e-tests/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
  },
})
