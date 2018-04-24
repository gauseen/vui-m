<template lang="pug">
	transition(name="dialog__layer")
		section.dialog__cantainer(
			v-show="value"
		)
			div.dialog__title(v-if="title") {{title}}
			div.dialog__message
				slot {{message}}
			div.dialog__btn
				span(
					v-if="showCancelButton"
				).dialog__btn__cancel(
					@click.stop="handleAction('cancel')"
				) {{cancelButtonText}}
					
				span(
					v-if="showConfirmButton"
				).dialog__btn__confirm(
					@click.stop="handleAction('confirm')"
				) {{confirmButtonText}}
</template>

<script>
import MaskMix from 'src/mixins/mask'

export default {
	name: 'Dialog',
	mixins: [MaskMix],
	props: {
		title: String,
		message: String,
		confirmButtonText: {
			type: String,
			default: '确认',
		},
		cancelButtonText: {
			type: String,
			default: '取消',
		},
		beforeClose: Function,
		showConfirmButton: true,
		showCancelButton: false,
		closeOnClickMask: {
			type: Boolean,
			default: false
		},
	},
	mounted () {
	},
	methods: {
		handleAction (action) {
			if (this.beforeClose) {
				this.beforeClose(action, () => {
					this.onClose(action)
				})
			} else {
				this.onClose(action)
			}
		},
		onClose (action) {
			this.$emit('input', false)
			this.callback && this.callback(action)
		},
	},
}
</script>

<style lang="stylus" scoped>
.dialog__cantainer
	position: fixed
	top: 50%
	left: 50%
	width: 85%
	font-size: 16px
	overflow: hidden
	transition: all .2s
	border-radius: 5px
	z-index: 2
	background-color: #fff
	transform: translate3d(-50%, -50%, 0)
.dialog__title
	// 超出 ...
	overflow-ellipsis(1)
	text-align: center
	padding-top: 10px
	overflow: hidden
.dialog__message
	line-height: 1.5
	padding: 15px 20px
.dialog__btn
	overflow: hidden
	text-align: center
	display: flex
	line-height: 2.6em
.dialog__btn__cancel,
.dialog__btn__confirm
	flex: 1
.dialog__layer-enter
	opacity: 0
	transform: translate3d(-50%, -50%, 0) scale(0.7)
.dialog__layer-leave-to
	opacity: 0
	transform: translate3d(-50%, -50%, 0) scale(0.9)
</style>
