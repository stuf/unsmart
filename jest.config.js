module.exports = {
  testMatch: [
    '<rootDir>/core/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/core/**/?(*.)(spec|test).{js,jsx,mjs}',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/core/*/dist/',
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest',
  },
  roots: [
    'core/',
  ],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$',
  ],
};
