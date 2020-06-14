import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import injectProcessEnv from 'rollup-plugin-inject-process-env';
import postcss from 'rollup-plugin-postcss';
import sass from 'node-sass';
import autoprefixer from 'autoprefixer';

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: 'src/main.js',
    output: {
      file: 'public/bundle.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        preprocessor: (content, id) => new Promise((resolve, reject) => {
          const result = sass.renderSync({ file: id });
          resolve({ code: result.css.toString() });
        }),
        plugins: [
          autoprefixer
        ],
        sourceMap: true,
        extract: true,
        extensions: ['.sass','.scss','.css']
      }),
      injectProcessEnv({
        NODE_ENV: 'development'
      }),
      production && terser()
    ]
  },
  {
    input: 'src/workers/worker.js',
    output: {
      file: 'public/worker.js',
      format: 'cjs'
    }
  }
];