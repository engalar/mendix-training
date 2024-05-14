# 前置知识

[pluggable-widgets](https://docs.mendix.com/howto/extensibility/pluggable-widgets/)

# 课程内容

## 安装依赖

- 安装 Node.js

[https://www.runoob.com/nodejs/nodejs-install-setup.html](https://www.runoob.com/nodejs/nodejs-install-setup.html)

> 推荐安装 LTS 版本

- 安装 Yeoman

```
npm install -g yo
```

- 安装 Mendix 开发者工具

```
npm install -g @mendix/generator-widget
```

## 生成脚手架

```
yo @mendix/widget GroupBox
```

运行后可以得到如下目录结构：

参见 git 提交 [b53304a](https://github.com/engalar/mendix-training/commit/b53304aee22d0b8083ca0f9a7b32217139e1826b)

## Vitejs增强(可选)
为了更好的开发体验，我们可以安装 Vitejs 作为开发环境，它可以帮助我们更快的启动开发环境，并且可以自动热替换，提高开发效率。[0bcd930](https://github.com/engalar/mendix-training/commit/0bcd930ece38ced400a89a69f7d81db31dd68f66)
- 安装npm包
```
npm install -D vite @engalar/vite-plugin-mendix
```
