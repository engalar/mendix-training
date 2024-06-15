import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'widgetTyping.js',
  output: {
    file: 'dist/widgetTyping.cjs.js',
    format: 'cjs'
  },
  plugins: [resolve(), commonjs()]
};
