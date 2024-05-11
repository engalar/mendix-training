# 前置知识

[https://docs.mendix.com/howto/extensibility/build-native-widget/](https://docs.mendix.com/howto/extensibility/build-native-widget/)

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

参见git提交 [b53304a](https://github.com/engalar/mendix-training/commit/b53304aee22d0b8083ca0f9a7b32217139e1826b)