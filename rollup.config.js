//Rollup Plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify';

export default {
  name: 'move',
  input: 'move.js',
  context: true,
  output: {
    file: 'dist/move.min.js',
    format: 'iife',
  },
  globals: {
    jquery: '$'
  },
  plugins: [
    eslint(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ],
  external: ['jquery']
};
