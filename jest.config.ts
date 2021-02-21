import type { Config } from '@jest/types'
import { pathsToModuleNameMapper } from 'ts-jest/utils'
const {
  compilerOptions: { paths: tsconfigPaths }
} = require('./tsconfig.json')

const paths = {
  ...pathsToModuleNameMapper(tsconfigPaths)
}
Object.assign(
  paths,
  ...Object.keys(paths).map((key) => ({
    [key]: `<rootDir>/${paths[key]}`
  }))
)

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  roots: ['<rootDir>/tests'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!**/node_modules/**'],
  moduleNameMapper: paths
}
export default config
