<template>
	<view>
		<button @click.self="getUserProfile">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			getUserProfile(){
				console.log('6666666')
				uni.getUserProfile({
			      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
			      success: (res) => {
					  console.log(res, "resssssssssss")
			        // this.setData({
			        //   userInfo: res.userInfo,
			        //   hasUserInfo: true
			        // })
			      }
			    })
			},
			
		// 	getuserinfo(e){
		// 		let appid = 'wx68be33c1022aedcd'
		// 		const secret = '209c5f5562377bac4626bd9db94d0e94'
		// 		console.log(e, 'eeeeeeeee')
				
		// 		uni.login({
		// 			provider:'weixin'
		// 		}).then(res => {
		// 				const [,{errMsg,code}] = res
		// 				let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code';
		// 				    uni.request({
		// 				      url: url, // 请求路径
		// 				      method: 'GET', //请求方式
		// 				      success: result => {
		// 				        //响应成功
		// 				        //这里就获取到了openid了
		// 				        console.info(result.data.openid);
		// 				        uni.setStorage({
		// 				          key:'user',
		// 				          data: result.data.openid
		// 				        })
		// 				      },
		// 				      fail: err => {} //失败
						

		// })
		
		// 		})
		// 	}
		},
		onShow() {
			
		},
	}
</script>

<style lang="scss">

</style>
