### Dialog 弹出框

> Dialog 弹出框，简洁明了，可自定义 css

------

#### 例子

基本用法

```js
// 消息提示框
this.$dialog.alert({
  title: '沁园春·雪',
  message: '北国风光，千里冰封，万里雪飘。望长城内外，惟余莽莽；',
})

// 消息确认框
this.$dialog.confirm({
    title: 'The author',
    message: 'by gauseen',
  }).then(() => {
    console.log('已确认')
  }).catch(() => {
    console.log('已取消')
})

// 关闭弹窗前 先执行回调
this.$dialog.confirm({
  title: '沁园春·长沙',
  message: '怅寥廓，问苍茫大地，谁主沉浮？',
  beforeClose (action, done) {
    // action == confirm 为确认操作
    if (action === 'confirm') {
      window.setTimeout(done, 1600)
    } else {
      // 关闭 dialog 事件
      done()
    }
  },
})
```

### 事件：
| 方法名 | 参数 | 返回值 | 说明 |
|------|-------|---------|-------|
| `this.$dialog.alert` | `options` | `Promise` | 展示消息提示弹窗 |
| `this.$dialog.confirm` | `options` | `Promise` | 展示消息提示弹窗 |
| `this.$dialog.close` | |  | 关闭弹窗 |


### options 对象字段说明:
| 参数 | 说明 | 类型 | 可选值 | 默认值|
|------|-------|---------|-------|--------|
| `title` | 标题 | `String` | | |
| `message` | 内容 | `String` | | |
| `showConfirmButton` | 是否显示确认按钮 | `Boolean` | | `true` |
| `showCancelButton` | 是否显示取消按钮 | `Boolean` | | `false` |
| `confirmButtonText` | 确认按钮的文案 | `String` | | `确认` |
| `cancelButtonText` | 取消按钮的文案 | `String` | | `取消` |
| `beforeClose` | 关闭前的回调函数，调用 `done` 后关闭弹窗 | | | |
