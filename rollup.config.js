// rollup.config.js
import json from '@rollup/plugin-json'; // 读取package.json
import {terser} from 'rollup-plugin-terser'; // 压缩
import clear from 'rollup-plugin-clear'
import resolve from '@rollup/plugin-node-resolve' // 负责将导入的代码打包进bundle，而不是使用导入语句
import babel from '@rollup/plugin-babel'; // 负责转换语法

export default {
    input: ['src/main.js', 'src/main2.js'],
    // output: {
    //   file: 'bundle.js',
    //   format: 'cjs'
    // },
    output: [
      {
        // file: 'bundle.js',
        dir: 'dist',
        format: 'cjs', //cjs|es|iife|amd|umd|system
        entryFileNames: '[name]-[hash].js'
      },
      // {
      //   file: 'bundle.min.js',
      //   dir: 'dist',
      //   format: 'iife',
      //   name: 'version',
      //   plugins: [terser()]
      // }
    ],
    plugins: [
      json(),
      clear({
      targets: ['dist']
      }),
      resolve({
        // 将自定义选项传递给解析插件
        moduleDirectories: ['node_modules']
      }),
      babel({ babelHelpers: 'bundled' })
    ],
    // 指出哪些模块需要被视为外部引入
    external: ['lodash']
  };