# package.json 配置说明

## 项目基本信息

- **name**: react-state-management-study - 项目名称
- **version**: 1.0.0 - 项目版本
- **description**: React状态管理学习项目 - 项目描述
- **private**: true - 私有项目，不会发布到npm

## 工作区配置

```json
"workspaces": [
  "packages/*",    // 所有packages目录下的包
  "examples/*",    // 所有examples目录下的示例
  "website"        // 文档站
]
```

## 脚本命令说明

### 版本管理相关

- `changeset`: 创建版本变更记录
- `version`: 根据changeset更新版本号
- `release`: 发布包到npm

### 测试相关

- `test`: 运行Jest测试，允许无测试通过

### 代码质量相关

- `eslint`: 运行ESLint检查并自动修复
- `eslint:ci`: 运行ESLint检查（CI环境）
- `prettier`: 格式化代码
- `prettier:ci`: 检查代码格式（CI环境）

### 类型检查

- `typecheck`: 并行运行所有包的TypeScript类型检查

### 构建相关

- `build`: 并行构建所有包
- `build:jotai`: 构建jotai包
- `build:zustand`: 构建zustand包
- `build:valtio`: 构建valtio包
- `build:react-query`: 构建react-query包

## 开发依赖说明

### Babel相关

- `@babel/core`: Babel核心包
- `@babel/preset-env`: ES6+转ES5预设
- `@babel/preset-react`: React JSX转换预设
- `@babel/preset-typescript`: TypeScript转换预设
- `@babel/plugin-proposal-class-properties`: 类属性提案插件
- `@babel/plugin-proposal-object-rest-spread`: 对象展开提案插件

### 类型定义

- `@types/jest`: Jest类型定义
- `@types/node`: Node.js类型定义
- `@types/react`: React类型定义
- `@types/react-dom`: React DOM类型定义

### 代码检查工具

- `@typescript-eslint/eslint-plugin`: TypeScript ESLint插件
- `@typescript-eslint/parser`: TypeScript ESLint解析器
- `eslint`: JavaScript代码检查工具
- `prettier`: 代码格式化工具

### 测试工具

- `jest`: JavaScript测试框架
- `jest-environment-jsdom`: Jest DOM环境
- `babel-jest`: Babel Jest转换器

### 其他工具

- `typescript`: TypeScript编译器

## 环境要求

- **node**: >=16.0.0 - Node.js版本要求
- **pnpm**: >=8.0.0 - pnpm版本要求
- **packageManager**: pnpm@8.15.4 - 指定的包管理器版本

## 包管理器配置

### packageManager字段

```json
"packageManager": "pnpm@8.15.4"
```

这个字段的作用：

- **版本锁定**: 确保所有开发者使用相同版本的pnpm
- **自动提示**: 当使用其他包管理器时会收到警告
- **CI/CD集成**: 在CI/CD环境中自动使用指定版本
- **团队协作**: 统一开发环境配置
- **版本管理**: 便于版本控制和依赖管理

### 实际效果

- 运行 `npm install` 时会看到警告提示使用pnpm
- CI/CD系统会自动使用pnpm@8.15.4版本
- 确保构建环境的可重现性

## 子包配置

### packages目录下的包

每个子包都有独立的package.json配置：

- **custom-jotai**: Jotai状态管理示例包
- **custom-react-query**: React Query状态管理示例包
- **custom-shared**: 共享工具包
- **custom-valtio**: Valtio状态管理示例包
- **custom-zustand**: Zustand状态管理示例包

### 子包特点

- 统一的命名空间: `custom-*`
- 版本: 2.0.2
- 作者: h-u-i
- 类型: module (ES模块)
- 支持多种模块格式: ESM、CommonJS、UMD
- 包含TypeScript声明文件
- 支持tree-shaking (sideEffects: false)

### 子包exports配置

```json
"exports": {
  ".": {
    "import": {
      "types": "./dist/index.d.ts",
      "default": "./dist/index.mjs"
    },
    "require": {
      "types": "./dist/index.d.ts",
      "default": "./dist/index.cjs"
    }
  }
}
```

这个配置支持：

- **ES模块导入**: 使用 `import` 语法
- **CommonJS导入**: 使用 `require` 语法
- **TypeScript类型**: 自动类型推断
- **现代化模块系统**: 支持条件导出
