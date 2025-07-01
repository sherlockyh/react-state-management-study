module.exports = {
  // 禁用.babelrc文件，使用此配置文件
  babelrc: false,
  // 忽略node_modules目录
  ignore: ['/node_modules/'],
  // Babel预设配置
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true, // 使用宽松模式，生成更小的代码
        modules: false, // 不转换模块，保持ES6模块格式
      }
    ]
  ],
  // Babel插件配置
  plugins: [
    [
      // React JSX转换插件
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic', // 使用自动运行时，无需手动导入React
      },
    ],
    [
      // TypeScript转换插件
      '@babel/plugin-transform-typescript',
      {
        isTSX: true, // 支持TSX文件
      }
    ],
  ],
}