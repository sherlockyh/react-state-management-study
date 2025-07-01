// Jest预设配置文件
// 为monorepo项目提供统一的测试配置
const config = {
  // 测试文件匹配模式
  // 匹配所有__tests__目录下的.js、.jsx、.ts、.tsx文件
  testMatch: ['**/__tests__/**/*.[jt]s?(x)'],

  // 模块文件扩展名
  // Jest会按此顺序解析模块文件
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  // 文件转换配置
  transform: {
    // 使用ts-jest转换TypeScript和JavaScript文件
    // 支持.ts、.tsx、.js、.jsx文件
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json' }],
  },

  // 测试环境
  // 使用jsdom模拟浏览器环境，支持DOM操作
  testEnvironment: 'jsdom',

  // 测试超时时间
  // 单个测试用例的最大执行时间（毫秒）
  testTimeout: 35000,
}

module.exports = config
