module.exports = {
  "extends": "eslint:recommended"

  env: {
      browser:    true, // Browser global variables
      node:       true, // Node.js global variables and Node.js scoping.
      es6:        true, // Enable all ECMAScript 6 features except for modules (this automatically sets the ecmaVersion parser option to 6)
      jasmine:    true, // Adds all of the Jasmine testing global variables for version 1.3 and 2.0
      jest:       true  // Jest global variables
  }
};
