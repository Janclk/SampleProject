const config = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  testMatch: ['**/*.spec.ts'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};

module.exports = config;