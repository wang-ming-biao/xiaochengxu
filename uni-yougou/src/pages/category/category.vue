<template>
	<view class="category">
		<!-- 头部搜索框 -->
		<searchLink></searchLink>
		<!-- 下半部分列表 -->
		<view class="content" v-if="categoriesList.length !== 0">
			<view class="left">
				<view :class="{active:activeIndex === index}" class="li" v-for="(cate1,index) in categoriesList" :key="index" @click="changeIndex(index)" >
					{{cate1.cat_name}}
				</view>
			</view>
			<view class="right">
				<image src="../../static/images/titleImage.png" mode=""></image>
				<view class="cate2" v-for="(cate2,index) in categoriesList[activeIndex].children" :key="index" >
					<!-- 二级分类 -->
					<view class="title">
						/
						<text>{{ cate2.cat_name }}</text>
						/
					</view>
					<!-- 三级分类 -->
					<view class="cate3-wrapper">
						<view class="cate3" v-for="(cate3,index) in cate2.children" :key="index" >
							<image :src="cate3.cat_icon" mode=""></image>
							<text>{{ cate3.cat_name }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import searchLink from '../../components/searchLink.vue'
	export default {
		data() {
			return {
				activeIndex: 0, // 选中下标的样式
				categoriesList: []
			}
		},
		components: {
			searchLink
		},
		onLoad() {
			this.getCategories()
		},
		methods: {
			changeIndex (index) {
				this.activeIndex = index
			},
			async getCategories() {
				this.categoriesList = await this.$request({
					url: '/api/public/v1/categories'
				})
				console.log(this.categoriesList)
			}
		}
	}
</script>

<style lang="less" scoped>
.content {
	display: flex;
	position: absolute;
	left: 0;
	right: 0;
	top: 100rpx;
	bottom: 0;
	.left {
		width: 198rpx;
		overflow: scroll;
		.li {
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			border: 1rpx solid #eee;
			color: #333333;
			background-color: #f4f4f4;
			&.active {
				color: #ed4450;
				background-color: #fff;
				position: relative;
				&::before {
					position: absolute;
					height: 60rpx;
					width: 8rpx;
					content: '';
					background-color: #ed4450;
					left: 0;
					top: 20rpx;
				}
			}
		}
	}
	.right {
		flex: 1;
		overflow: scroll;
		>image {
			width: 520rpx;
			height: 180rpx;
			padding: 20rpx 16rpx;
		}
		.cate2 {
			margin-bottom: 60rpx;
			.title {
				height: 110rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #e0e0e0;
				text {
					margin: 0 30rpx;
					color: #333;
				}
			}
		}
		.cate3-wrapper {
			display: flex;
			flex-wrap: wrap;
			.cate3 {
				display: flex;
				flex-direction: column;
				width: 33.33%;
				align-items: center;
				margin-bottom: 10rpx;
				image {
					width: 120rpx;
					height: 120rpx;
				}
			}
		}
	}
}
</style>
