### Action sheet 行动操作

> 行动操作，从屏幕下方移入。

----------

#### 例子

`actions` 是个数组，子元素是对象，对象里面有两个属性，分别为:
1. name 要显示的文字
2. method 点击对应选项时执行的方法

`v-model` 绑定一个变量，通过此变量控制 action-sheet 显示或隐藏

```html
<ActionSheet
  v-model="isShowSheet"
  :actions="actions"
  cancelText="取消"
>
</ActionSheet>
```

### API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| v-model | 绑定一个变量，通过此变量控制 action-sheet 显示或隐藏 | Boolean | | true |
| actions | 菜单项数组 | Array | | |
| cancelText | 取消按钮的文本。若设为空字符串，则不显示取消按钮 | String | | '取消' |
| closeOnClickMask | 是否可以通过点击 mask 层来关闭 `actionsheet` | Boolean | | true |
