const ignoredPatterns = [
  'packages/.*/lib',
]

module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: {
        esModuleInterop: true
      }
    }
  },
  preset: 'ts-jest',
  coveragePathIgnorePatterns: ignoredPatterns,
  modulePathIgnorePatterns: ignoredPatterns,
  testPathIgnorePatterns: ignoredPatterns,
  watchPathIgnorePatterns: ignoredPatterns
}
