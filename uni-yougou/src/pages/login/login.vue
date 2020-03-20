<template>
  <view>
    <button open-type="getUserInfo" @getuserinfo="getInfo">点我登录</button>
  </view>
</template>

<script>
	export default {
		methods: {
			// 获取用户信息
			getInfo (userInfoRes) {
				console.log(userInfoRes)
				let {encryptedData,rawData,iv,signature} = userInfoRes.detail
				// 获取微信用户的唯一标识
				uni.login({
					success: async loginRes => {
						console.log(loginRes)
						let data = await this.$request({
							url: '/api/public/v1/users/wxlogin',
							method: 'post',
							data: {
								encryptedData,
								rawData,
								iv,
								signature,
								code: loginRes.code
							}
						})
						// 将获取到的token存到本地,方便后面发请求
						uni.setStorageSync('token',data.token)
						// 登录后返回
						uni.navigateBack()
					}
				})
			}
		}
	}
</script>

<style>
</style>