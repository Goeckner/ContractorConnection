module.exports = {
  automock:                       true,

  collectCoverage:                true,
  collectCoverageFrom:            ['src/**/*.{js}'],
  coverageReporters:              ['html', 'json-summary'],

  resetMocks:                     true,
  resetModules:                   true,
};
