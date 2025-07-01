// 导入必要的依赖
/** 
* rollup-plugin-dts：用于处理 TypeScript 的类型声明文件（*.d.ts）。
* @rollup/plugin-node-resolve：用于帮助 Rollup 解析第三方模块的导入。在 JavaScript 中，当你使用 import 语句导入模块时，需要一个机制来定位和加载这些模块。
* @rollup/plugin-babel：用于集成 Babel 编译器到 Rollup 打包过程。
* @rollup/plugin-commonjs：主要作用是将 CommonJS 模块转换为 ES6 模块。这个插件对于处理那些以 CommonJS 格式编写的第三方模块（通常是在 Node.js 环境中使用的模块）非常有用。
*/
const createBabelConfig = require('./babel.config.js')
const resolve = require('@rollup/plugin-node-resolve')
const babelPlugin = require('@rollup/plugin-babel')
const commonjs = require('@rollup/plugin-commonjs')
const { dts } = require('rollup-plugin-dts')
const banner2 = require('rollup-plugin-banner2')

// 支持的文件扩展名
const extensions = ['.ts', '.tsx']
// Next.js客户端组件标识注释
const cscComment = `'use client';\n`

/**
 * 获取Babel配置选项
 * @returns {Object} Babel配置对象
 */
function getBabelOptions() {
  return {
    ...createBabelConfig,
    extensions,
    babelHelpers: 'bundled', // 将Babel helpers打包到输出文件中
    comments: false, // 移除注释
  }
}

/**
 * 创建TypeScript声明文件配置
 * @param {string} input - 输入文件路径
 * @param {string} output - 输出文件路径
 * @returns {Object} Rollup配置对象
 */
function createDeclarationConfig(input, output) {
  return {
    input,
    output: {
      file: output,
      format: 'es', // ES模块格式
    },
    plugins: [dts()], // 生成TypeScript声明文件
  }
}

/**
 * 创建ES模块配置
 * @param {string} input - 输入文件路径
 * @param {string} output - 输出文件路径
 * @returns {Object} Rollup配置对象
 */
function createESMConfig(input, output) {
  return {
    input,
    output: { file: output, format: 'esm' }, // ES模块格式
    plugins: [
      resolve({ extensions }), // 解析模块
      commonjs(), // 转换CommonJS模块
      babelPlugin(getBabelOptions()), // Babel转换
      banner2(() => cscComment), // 添加Next.js客户端标识
    ],
  }
}

/**
 * 创建CommonJS配置
 * @param {string} input - 输入文件路径
 * @param {string} output - 输出文件路径
 * @returns {Object} Rollup配置对象
 */
function createCommonJSConfig(input, output) {
  return {
    input,
    output: { file: output, format: 'cjs' }, // CommonJS格式
    plugins: [
      resolve({ extensions }), // 解析模块
      commonjs(), // 转换CommonJS模块
      babelPlugin(getBabelOptions()), // Babel转换
      banner2(() => cscComment), // 添加Next.js客户端标识
    ],
  }
}

/**
 * 创建UMD配置
 * @param {string} input - 输入文件路径
 * @param {string} output - 输出文件路径
 * @param {string} name - 全局变量名
 * @returns {Object} Rollup配置对象
 */
function createUMDConfig(input, output, name) {
  return {
    input,
    output: { file: output, format: 'umd', name }, // UMD格式，支持多种模块系统
    plugins: [
      resolve({ extensions }), // 解析模块
      commonjs(), // 转换CommonJS模块
      babelPlugin(getBabelOptions()), // Babel转换
      banner2(() => cscComment), // 添加Next.js客户端标识
    ],
  }
}

/**
 * 主配置函数
 * @param {Object} args - 命令行参数
 * @param {string} args.package - 包名
 * @returns {Array} Rollup配置数组
 */
module.exports = (args) => {
  const packageName = args.package

  // 构建输入输出路径
  const input = `packages/${packageName}/src/index.ts`
  const output = `packages/${packageName}/dist`

  // 返回多个构建配置
  return [
    createDeclarationConfig(input, `${output}/index.d.ts`), // TypeScript声明文件
    createESMConfig(input, `${output}/index.mjs`), // ES模块
    createCommonJSConfig(input, `${output}/index.cjs`), // CommonJS模块
    createUMDConfig(input, `${output}/index.umd.js`, packageName), // UMD模块
  ]
}