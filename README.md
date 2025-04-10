# 个人 SPA 项目模板

这是一个基于现代前端技术栈的单页应用 (SPA) 模板，根据个人偏好进行了配置和优化。

## 技术栈

- **React 19**：使用最新版本的 React 框架
- **TypeScript**：提供类型安全和更好的开发体验
- **Vite**：下一代前端构建工具，提供极速的开发体验
- **Tailwind CSS**：实用优先的 CSS 框架
- **SWC**：更快的 JavaScript/TypeScript 编译器（通过 @vitejs/plugin-react-swc）
- **ESLint & Prettier**：保证代码质量和一致的代码风格

## 特性

- ⚡ 基于 Vite 提供快速的热重载开发体验
- 🧩 路径别名配置 (@, @assets, @components)
- ✅ ESLint 代码质量检查
- 🧹 Prettier 代码格式化
- 🔍 TypeScript 类型检查
- 🎨 Tailwind CSS 集成
- 🐳 Docker 支持，内置 Dockerfile
- 📦 PNPM 包管理

## 开始使用

### 环境要求

- Node.js 18+（仅在 22 上测试，理论 18+ 可运行）
- PNPM 10+

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

应用将在 http://localhost:5173 上运行

### 构建生产版本

```bash
pnpm build
```

### 预览构建

```bash
pnpm preview
```

## 使用模板新建项目

如果需要使用此模板新建项目，请完成以下步骤：

1. 替换 `index.html` 中的占位符标题。
2. 修改 `package.json` 中的包名为新项目名称。
3. （可选）替换 `public` 文件夹中的 favicon 图标。
4. （可选）根据需求调整 `src/styles/global.css` 中的品牌色。

## Docker 支持

项目包含了 Docker 配置，可以轻松构建和运行容器化版本：

```bash
docker build -t page-template-new .
docker run -p 8080:8080 page-template-new
```

## 许可

本项目基于 Apache 2.0 许可证开源。
