import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

const dev = process.env.ROLLUP_WATCH;

export default {
  input: 'src/xiaomi-humidifier-card.ts',
  output: {
    file: 'dist/xiaomi-humidifier-card.js',
    format: 'es',
    sourcemap: dev ? true : false,
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    typescript({
      declaration: false,
      declarationMap: false,
    }),
    !dev && terser({
      format: {
        comments: false,
      },
    }),
  ].filter(Boolean),
};
