<template>
	<view>
		上拉加载
		
		<view v-for="(item,index) in list" :key="index">
			{{item}}
		</view>
		
		下拉刷新
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				loading: false
			};
		},
		onShow() {
			for (var i = 0; i < 30; i++) {
				this.list.push(i)
			}
		},
		onPullDownRefresh(){
			this.list = []
			for (var i = 0; i < 30; i++) {
				this.list.push(i)
			}
		},
		onReachBottom() {
			if (this.loading) return
			this.loading = true
			uni.showLoading({
				title: '加载中',
				mask: true
			});
			setTimeout(() => {
				for (var i = 0; i < 30; i++) {
					this.list.push(i)
				}
				this.loading = false
				uni.hideLoading()
			}, 2000)
			
		}
	}
</script>

<style lang="scss">

</style>
