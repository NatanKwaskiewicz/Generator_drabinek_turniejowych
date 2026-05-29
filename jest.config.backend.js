export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterFramework: [],
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: './tsconfig.test.json' }],
    },
    moduleNameMapper: {
        '^../prisma\\.ts$': '<rootDir>/src/backend/__mocks__/prisma.ts',
        '^../../generated/prisma/index\\.js$':
            '<rootDir>/generated/prisma/index.js',
    },
    testMatch: ['**/src/backend/**/*.test.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
}
