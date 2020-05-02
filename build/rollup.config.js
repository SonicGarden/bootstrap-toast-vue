// rollup.config.js
import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))

const baseConfig = {
  input: 'src/entry.js',
  plugins: {
    preVue: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      commonjs(),
      typescript(),
    ],
    vue: {
      css: true,
      template: {
        isProduction: true,
      },
    },
    postVue: [buble({ objectAssign: true })],
  },
}

// UMD/IIFE shared settings: externals and output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const external = ['bootstrap-vue', 'vue']
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
}

// Customize configs for individual targets
const buildFormats = []
if (!argv.format || argv.format === 'es') {
  const esConfig = {
    ...baseConfig,
    output: {
      file: 'dist/bootstrap-toast-vue.esm.js',
      format: 'esm',
      exports: 'named',
    },
    plugins: [
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      terser({
        output: {
          ecma: 6,
        },
      }),
    ],
  }
  buildFormats.push(esConfig)
}

if (!argv.format || argv.format === 'cjs') {
  const umdConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: 'dist/bootstrap-toast-vue.ssr.js',
      format: 'cjs',
      name: 'BootstrapToastVue',
      exports: 'named',
      globals,
    },
    plugins: [
      ...baseConfig.plugins.preVue,
      vue({
        ...baseConfig.plugins.vue,
        template: {
          ...baseConfig.plugins.vue.template,
          optimizeSSR: true,
        },
      }),
      ...baseConfig.plugins.postVue,
    ],
  }
  buildFormats.push(umdConfig)
}

// Export config
export default buildFormats
