<template lang="pug">
	section
		div.action-sheet__btn-group
			Button.action-sheet__btn(
				@click="isShowSheet = true"
			) 显示 ActionSheet 带取消按钮
			Button.action-sheet__btn(
				@click="isShowSheet2 = true"
				bdColor="#93f"
			) 显示 ActionSheet 隐藏取消按钮
			Button.action-sheet__btn(
				bdColor="#fc3"
				@click="isShowSheet3 = true"
			) 显示 ActionSheet 点背景不隐藏

			ActionSheet(
				v-model="isShowSheet"
				:actions="actions"
				cancelText="取消"
			)
			ActionSheet(
				v-model="isShowSheet2"
				:actions="actions"
			)
			ActionSheet(
				v-model="isShowSheet3"
				:actions="actions"
				cancelText="取消"
				:closeOnClickMask="false"
			)

</template>

<script>
export default {
	name: 'actionSheet',
	data () {
		return {
			isShowSheet: false,
			isShowSheet2: false,
			isShowSheet3: false,
			actions: [
				{name: '拍照', method: () => this.$toast('拍照')},
				{name: '留言', method: () => this.$toast('留言')},
			],
		}
	},
	methods: {

	},

}
</script>

<style lang="stylus" scoped>
.action-sheet__container
	position: fixed
	background-color: #000
	top: 0
	left: 0
	width: 100%
	height: 100%
	opacity: .4
	transition: opacity .2s linear
.action-sheet__layer,
// .popup__layer-leave-to
	opacity: 0
.action-sheet__btn-group
	width: 70%
	margin-left: 15%
	margin-top: 30vh
.action-sheet__btn
	margin: 5px 0
</style>

