const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.css\\.ts$': '@vanilla-extract/jest-transform',
  },
}

module.exports = createJestConfig(customJestConfig)
