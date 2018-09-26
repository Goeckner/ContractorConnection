module.exports = {
  automock: true,

  collectCoverage: true,
  collectCoverageFrom: [ 'src/**/*.{js,jsx}' ],
  coverageReporters: [ 'html', 'json-summary' ],

  resetMocks: true,
  resetModules: true,

  unmockedModulePathPatterns: [
    '<rootDir>/node_modules/immutable',
    '<rootDir>/node_modules/prop-types',
    '<rootDir>/node_modules/react',
  ],
}
