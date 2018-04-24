### Swipe 轮播图

> 轮播图，可自定义轮播时间间隔等

------

#### 例子

基本用法

```html
<Swipe :auto="3600">
  <Swipe-item> 1 </Swipe-item>
  <Swipe-item> 2 </Swipe-item>
  <Swipe-item> 3 </Swipe-item>
</Swipe>
```

取消自动播放

```html
<Swipe :auto="0">
  <Swipe-item> 1 </Swipe-item>
  <Swipe-item> 2 </Swipe-item>
  <Swipe-item> 3 </Swipe-item>
</Swipe>
```

### API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| speed | 动画持时（毫秒） | Number | | 400 |
| auto | 自动播放的时间间隔（毫秒）, 为 0 时关闭自动轮播 | Number | | 3000 |
| startSlide | 初始显示的轮播图的索引 | Number | | 0 |
| continuous | 是否可以循环播放 | Boolean | | true |
| isShowIndicators | 是否显示indicators | Boolean | | true |
| stopPropagation | 是否在  touchstart 事件触发时阻止冒泡。 | Boolean | | true |

### Slot

#### Swipe
| name | 描述 |
|------|--------|
| - | 一个或多个 `Swipe-item` 组件 |

#### Swipe-item
| name | 描述 |
|------|--------|
| - | 单个轮播图的内容 |
