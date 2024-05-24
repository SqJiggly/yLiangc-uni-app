<template>
	<view>
		<button @click="toDetail">去到详情</button>
		<u-button type="primary" text="确定"></u-button>
		<view>{{name}}111222</view>
		<my-header></my-header>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			// console.log(this.$store.state.shopcar.name, 'this------')
		},
		computed: {
			...mapState('shopcar', ["name"])
		},
		methods: {
			toDetail(){
				uni.navigateTo({
					// url:"/subpkg/detail/detail"
					url:"/subpkg/good_list/good_list"
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
