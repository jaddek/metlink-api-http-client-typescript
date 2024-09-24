import type { Config } from 'jest'

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    coverageDirectory: 'coverage',
    collectCoverage: true,
    setupFiles: ['<rootDir>/.jest/setEnvVars.ts'],
}

export default config
