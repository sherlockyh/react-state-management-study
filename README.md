# React状态管理学习项目

这是一个用于学习和比较不同React状态管理解决方案的monorepo项目。

## 项目结构

```
├── .changeset          # Changesets 配置，用于版本管理
├── .github             # GitHub配置项，包含CI配置
│   └── workflows
├── examples            # 各种状态管理库的示例
│   ├── jotai          # Jotai示例
│   ├── react-query    # React Query示例
│   ├── valtio         # Valtio示例
│   └── zustand        # Zustand示例
├── packages            # monorepo包入口
│   ├── jotai          # Jotai相关包
│   ├── react-query    # React Query相关包
│   ├── shared         # 公共包
│   ├── valtio         # Valtio相关包
│   └── zustand        # Zustand相关包
├── website            # 文档站
├── .eslintignore      # ESLint忽略配置
├── .eslintrc.json     # ESLint配置
├── .gitignore         # Git忽略配置
├── .prettierignore    # Prettier忽略配置
├── babel.config.js    # Babel配置
├── jest.config.ts     # Jest配置
├── jest.preset.js     # Jest预设
├── package.json       # 根目录包配置
├── pnpm-workspace.yaml # pnpm工作区配置
├── rollup.config.js   # Rollup构建配置
└── tsconfig.json      # TypeScript配置
```

## 技术栈

- **包管理器**: pnpm (workspace)
- **构建工具**: Rollup
- **测试框架**: Jest
- **代码检查**: ESLint + Prettier
- **类型检查**: TypeScript
- **状态管理库**: Jotai, React Query, Valtio, Zustand

## 快速开始

1. 安装依赖：
```bash
pnpm install
```

2. 开发模式：
```bash
pnpm dev
```

3. 构建项目：
```bash
pnpm build
```

4. 运行测试：
```bash
pnpm test
```

## 状态管理库对比

本项目将对比以下状态管理解决方案：

- **Jotai**: 原子化状态管理
- **React Query**: 服务端状态管理
- **Valtio**: 基于代理的状态管理
- **Zustand**: 轻量级状态管理

每个库都有独立的示例和文档，方便学习和比较。
