module.exports = {
  name: 'contractor-connection',
  collectCoverageFrom: [
    'src/client/redux/sagas/*.js',
    'src/client/redux/sagas/helpers/*.js',
    'src/client/redux/reducers/*.js',
    '!src/client/redux/sagas/index.js',
    '!src/client/redux/reducers/index.js',
  ],
  coverageDirectory: '.jest-coverage',
  roots: [ 'test/', 'src/' ],
  testPathIgnorePatterns: [ '<rootDir>/node_modules/', '<rootDir>/src/' ],
  testMatch: [ '**/test/redux/**/*.js' ],
}
