module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    transform: {
        '^.+\.ts$': 'ts-jest',
    },
    testMatch: ['**/tests/**/*.test.ts'],
    setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
    collectCoverage: true, // Enable coverage collection
    coverageDirectory: 'coverage', // Specify where to output the coverage reports
    collectCoverageFrom: [
        'src/**/*.{ts,js}', // Specify which files to collect coverage from
        '!src/**/*.d.ts', // Exclude type definition files
        '!src/**/index.ts', // Optionally exclude index files
    ],
};

