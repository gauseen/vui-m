// js components
import Test from './components/test'
import Toast from './components/toast'
import Swipe from './components/swipe'
import SwipeItem from './components/swipe-item'
import Popup from './components/popup'
import ActionSheet from './components/action-sheet'
import InfiniteScroll from './components/infinite-scroll'
import Masker from './components/masker'
import Dialog from './components/dialog'

// css components
import Button from './components/button'

const components = {
	// js components
	Test,
	Swipe,
	SwipeItem,
	Popup,
	ActionSheet,
	InfiniteScroll,
	Masker,
	// css components
	Button,
}

const vui = {
	...components,
}

const install = function (Vue, opt = {}) {
	if (install.installed) return

	Object.keys(vui).forEach(key => {
		Vue.component(vui[key]['name'], vui[key])
	})

	Vue.$toast = Vue.prototype.$toast = Toast
	Vue.$dialog = Vue.prototype.$dialog = Dialog
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(install)
}

// 按需引入
export {
	// js components
	Test,
	Toast,
	Swipe,
	SwipeItem,
	Popup,
	ActionSheet,
	InfiniteScroll,
	Masker,
	Dialog,
	// css components
	Button,
}

export default install
