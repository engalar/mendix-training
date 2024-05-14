# 前置知识

无

# 课程内容

## 创建测试应用项目

- 打开 Mendix 开发者工具
- 点击 "New App"
- 输入项目名称，如 "TestProject" [8ee59aa](https://github.com/engalar/mendix-training/commit/8ee59aa2aa69d1a8eba131239ada7c2bfebbd107)
- npm run build 编译 UI Widget 项目，复制生成的 widget.mpk 文件到应用项目的`widgets`目录下 [582d258](https://github.com/engalar/mendix-training/commit/582d25807f233639ee35d69899426b627c7e59f2)
- App -> Syncronize App Directory 同步项目目录
- 拖拽GroupBox widget 到页面上 [050253a](https://github.com/engalar/mendix-training/commit/050253a789170f560313f2410adf0092463b2879)
- 启动测试应用
- 在浏览器中打开应用，并打开浏览器的 DevTools，并禁用缓存
- 回到 UI Widget 项目开始开发

> 如果用 git 管理项目，可以添加`.gitignore`文件，忽略如下文件：
>
> ```gitignore
> /.classpath
> /.mendix-cache
> /.project
> /.vscode
> /*.mpr.bak
> /*.mpr.lock
> /deployment
> /theme-cache
> /*.launch
> /deployment/
> /packages/
> /releases/
> /.mendix-cache/
> /*.mpr.bak
> /*.mpr.lock
> /modeler-merge-marker
> /project-settings.user.json
> /javasource/*/proxies/
> /javasource/system/
> /**/node_modules/
> !/javascriptsource/**/node_modules/
> /nativemobile/builds/
> /vendorlib/temp/
> ```
