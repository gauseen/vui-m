import Vue from 'vue'
import DialogTmp from './dialog.vue'
import { reject } from 'any-promise';

const DialogConstructor = Vue.extend(DialogTmp)
let instance

const getInstance = function () {
	instance = new DialogConstructor().$mount(document.createElement('div'))

	instance.$on('input', function (val) {
		instance.value = val
	})
	
	Vue.nextTick(() => {
		document.body.appendChild(instance.$el)
	})
}

const DialogClient = function (options) {
	return new Promise ((resolve, reject) => {
		if (!instance) {
			getInstance()
		}
		Object.assign(
			instance,
			{
				resolve,
				reject,
			},
			options
		)
	}) 
}

const defaultConfig = {
	// 默认设为 true ，激活 vm.$on('input') 事件
	value: true,
	title: '',
	message: '',
	beforeClose: null,
	showConfirmButton: true,
	showCancelButton: false,
	callback (action) {
		let handle = instance[action === 'confirm' ? 'resolve' : 'reject']
		handle && handle(action)
	},
}

DialogClient.alert = (options) => DialogClient({
	...defaultConfig,
	...options
})

DialogClient.confirm = (options) => DialogClient({
	...defaultConfig,
	showCancelButton: true,
	...options
})

DialogClient.close = () => {
	if (instance) {
		instance.value = false
	}
}

export default DialogClient
