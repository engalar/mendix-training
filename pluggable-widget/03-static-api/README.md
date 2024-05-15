# 前置知识

[pluggable-widgets: 添加静态字符串属性](https://docs.mendix.com/howto/extensibility/create-a-pluggable-widget-one/#34-adding-the-attribute)
[完整的属性类型列表](https://docs.mendix.com/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/)

# 课程内容

## 添加静态字符串属性

- 修改 `GroupBox.xml` 文件，添加一个新的属性 `slogan` [809c992](https://github.com/engalar/mendix-training/commit/809c9924f878c0abc7d401fd14b366908c9933d8)：

```xml
<property key="slogan" type="string">
    <caption>口号</caption>
    <description/>
</property>
```

- 在`TestProject`中`App -> Synchronize App Directory` 并且`选中widget -> Update widget`，再次运行测试应用 [149157c](https://github.com/engalar/mendix-training/commit/149157ce86c2fcb8c3ef475e359376caed685677)
- 开发实现 [522bbeb](https://github.com/engalar/mendix-training/commit/522bbeb2e3c38b191596d4b59ef9820f4b23f8aa)

## 多语言支持

### 静态多语言 [21166f9](https://github.com/engalar/mendix-training/commit/21166f9bf901f6886b472323526b328672f2215d)

### 可配置多语言 [2796af4](https://github.com/engalar/mendix-training/commit/2796af4733fc0a8a8e038034f0a58d7cf53ce945)

<video controls src="../asset/i18.mp4" title="Title"></video>
