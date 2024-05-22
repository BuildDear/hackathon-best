

module.exports = {
    
    moduleNameMapper: {
        "\\.(scss|css|less)$": "identity-obj-proxy",
        "\\.(svg|jpg|jpeg|png)$": "<rootDir>/__mocks__/fileMock.js"
      },            
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    collectCoverage: true,
    coverageThreshold: {
      global: {
        branches: 70,
        functions: 70,
        lines: 70,
        statements: 70
      }
    }
  };
  