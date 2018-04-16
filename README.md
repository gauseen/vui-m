## vui-m

### A high quality UI Toolkit built on Vue 2.x.

#### [在线演示](https://gauseen.github.io/vui-m/#/home)

>#### 可用组件
```javascript
Toast
Swipe
Swipe-item
```
持续更新中...

#### 安装依赖
```bash
npm i vui-m -S
```

#### Vue 全局安装
```bash
import Vue from 'vue';
import Vuim from 'vui-m'
Vue.use(Vuim)

import 'vui-m/dist/css/vui-m.css'
```

#### 举个栗子
```javascript
<template>
  <Test :txt="value" />
</template>
<script>
  export default {
      data () {
          return {
              value: '传值测试'
          }
      }
  }
</script>
```
## API

### Toast

> 轻提示框，支持自定义位置、显示时间、css

------

#### 例子

基本用法

```javascript
this.$toast('提示信息');
```

```javascript
this.$toast(options);
```
### options 对象字段说明:
| 参数 | 说明 | 类型 | 可选值 | 默认值|
|------|-------|---------|-------|--------|
| message | 文本内容 | String | | |
| position | Toast 的位置 | String | 'top'<br>'bottom'<br>'middle' | 'middle' |
| duration | 持续时间（毫秒）| Number | | 2500 |

### Swipe

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
