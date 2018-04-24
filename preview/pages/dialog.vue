<template lang="pug">
	section.dialog__demo
		Button.dialog__demo__btn(
			bdColor="#fc3"
			@click="showDialog"
		) 消息提示
		Button.dialog__demo__btn(
			bdColor="#9cf"
			@click="showDialogConfirm"
		) 消息确认
		Button.dialog__demo__btn(
			bdColor="#9c3"
			@click="showDialogBeforeClose"
		) 关闭前先执行方法
</template>

<script>
export default {
	name: 'dialoger',
	data () {
		return {
			value: '父组件动态传值'
		}
	},
	mounted () {
	},
	methods: {
		showDialog () {
			this.$dialog.alert({
				title: '标题标题',
				message: 'success ... ',
			})
		},
		showDialogConfirm () {
			this.$dialog.confirm({
				title: '标题标题',
				message: '满满的内容内容内容',
			}).then(() => {
				this.$toast('已确认')
			}).catch(() => {
				this.$toast('已取消')
			})
		},
		showDialogBeforeClose () {
			this.$dialog.confirm({
				title: '沁园春·雪',
				message: '北国风光，千里冰封，万里雪飘。望长城内外，惟余莽莽；',
				beforeClose (action, done) {
					// action == confirm 为确认操作
					if (action === 'confirm') {
						window.setTimeout(done, 1600)
					} else {
						// 关闭 dialog
						done()
					}
				},
			})
		},
	},
}
</script>

<style lang="stylus" scoped>
.dialog__demo
	padding-top: 30vh
.dialog__demo__btn
	margin: 12px 0
</style>