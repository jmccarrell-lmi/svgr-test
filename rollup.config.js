import svgr from '@svgr/rollup';
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const replace = require('rollup-plugin-replace')
const babel = require('rollup-plugin-babel')
const typescript = require('rollup-plugin-typescript2')
const json = require('rollup-plugin-json')
const css = require('rollup-plugin-css-porter')
const sass = require('rollup-plugin-sass')
const url = require('rollup-plugin-url')

const supportedExtensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: "./src/App.tsx",
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  /**
   * All the third party libs we dont want bundled
   */
  external: [
    "react-is",
    "react-dom",
    "react",
    "mixpanel"
  ],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    resolve({
      extensions: supportedExtensions,
    }),
    json(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          allowJs: false,
          isolatedModules: false,
          declaration: true,
        },
      },
    }),
    babel({
      exclude: "node_modules/**",
      extensions: supportedExtensions
    }),
    commonjs(),
    css(),
    sass({
      options: {
        includePaths: ['node_modules'],
        importer(path) {
          return { file: path[0] !== '~' ? path : path.slice(1) };
        },
      },
      insert: true,
    }),
    url(),
    svgr(),
  ]
}
