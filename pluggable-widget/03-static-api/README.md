# 前置知识

[pluggable-widgets: 添加静态字符串属性](https://docs.mendix.com/howto/extensibility/create-a-pluggable-widget-one/#34-adding-the-attribute)

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
