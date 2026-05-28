export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/frontend/test/setup.ts'],
    transform: {
        '^.+\\.(ts|tsx)$': [
            'ts-jest',
            {
                tsconfig: './tsconfig.test.json',
            },
        ],
    },
    moduleNameMapper: {
        '\\.(css|scss|sass)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|svg|webp)$': '<rootDir>/src/frontend/test/__mocks__/fileMock.ts',
        '^../components/([^/]+)$': '<rootDir>/src/frontend/components/$1/$1',
        '^../../components/([^/]+)$': '<rootDir>/src/frontend/components/$1/$1',
    },
    testMatch: ['**/*.test.ts', '**/*.test.tsx'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
}