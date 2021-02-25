module.exports = {
  preset: '@shelf/jest-mongodb',
  roots: ['<rootDir>/tests'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/tests/**/*.ts',
    '!**/test/**',
    '!**/config/**'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}
