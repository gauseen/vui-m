<template lang="pug">
	section
		div.action-sheet__container(
			:class="{ 'sheet__active': value }"
		)
			ul.action-sheet__list
				li.action-sheet__item(
					v-for="(item, $index) in actions"
					@click.stop="onItemClick(item, $index)"
				) {{item.name}}
			p.action-sheet__item.action-sheet__cancel(
				v-if="cancelText"
				@click.stop="cancel"
			) {{cancelText}}
		

</template>

<script>
import MaskMix from 'src/mixins/mask'

import { getType } from 'src/utils/tips'

export default {
	name: 'ActionSheet',
	mixins: [MaskMix],
	props: {
		value: Boolean,
		actions: {
			type: Array,
			default: [],
		},
		cancelText: {
			type: String,
			default: '',
		},
	},
	data () {
		return {}
	},
	methods: {
		onItemClick (item, $index) {
			if (getType(item.method) === 'function') {
				item.method(item, $index)
			}
			this.cancel()
		},
		cancel () {
			this.$emit('input', false)
		},
	},
	watch: {

	},
	computed: {

	},

}
</script>

<style lang="stylus" scoped>
.action-sheet__container
	position: fixed
	z-index: 99
	bottom: 0
	left: 0
	width: 100%
	background-color: #e0e0e0
	transition: all .23s ease-out
	transform: translate(0, 100%)
.action-sheet__list
	background-color: #fff
.action-sheet__cancel
	margin-top: 5px
	background-color: #fff
.action-sheet__item
	width: 100%
	height: 3em
	line-height: 3em
	overflow: hidden
.action-sheet__item + .action-sheet__item
	border-top: 1px solid #e0e0e0
.sheet__active
	transform: translate(0, 0)
</style>

