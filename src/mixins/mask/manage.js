import Vue from 'vue'
import Mask from './mask.vue'

let fakeVm = {}
let maskerInstance = {}
const VueExtendMask = Vue.extend(Mask)

export default {
	open (vm, styles) {
		const instance = this.getInstance()
		const el = vm.$el
		fakeVm = vm

		const targetNode = el && el.parentNode && el.parentNode.nodeType !== 11 ? el.parentNode : document.body
		instance.visible = true
		Vue.nextTick(() => {
			targetNode.appendChild(instance.$el)
		})
	},
	close (vm) {
		// console.log('closed', vm)
		maskerInstance.visible = false
	},

	getInstance () {
		maskerInstance = new VueExtendMask().$mount(document.createElement('div'))
		maskerInstance.$on('click', this.onClick.bind(maskerInstance))
		// console.log('mask:===', maskerInstance)
		return maskerInstance
	},

	onClick () {
		if (!fakeVm.closeOnClickMask) return
		this.visible = false
		fakeVm.$emit('input', false)
		// console.log('fakeVm...', fakeVm)
	},
}