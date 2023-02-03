import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

// import typescript from '@rollup/plugin-typescript';

module.exports = {
    input: './src/index.js',
    // input: './source/app.ts',
    output: {
        file: './dist/index.js',
        format: 'cjs',
      //   name: "compiler",
    },
    plugins: [        
        resolve({
            // browser: true
        }),
        commonjs(),
    ]
};