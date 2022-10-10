<template>
	<van-popup v-model:show="cityStatus" position="top" closeable :style="{ height: '100vh' }" >
		<CitySelect  @cityVal="cityVal" />
	</van-popup>
	
	<van-nav-bar class="searchBox">
		<template #left>
		  <van-icon name="arrow-left" style="color:#fff" size="18" />
		</template>
		<template #title>
		<van-search v-model="iptVal" placeholder="输入城市/景点/游玩主题" background="#52bad0" />
		</template>
	  <template #right>
		  <div class="topCity">
			<div @click="cityStatus = true" class="c-fff">{{ currentCity }}</div>
			<div class="topCityIcon"></div>
		  </div>
	  </template>
	</van-nav-bar>
	
	<van-swipe :autoplay="3000" lazy-render indicator-color="white" style="mt200">
	  <van-swipe-item v-for="(item, index) in bannerList" :key="index">
	    <img :src="item.img" class="img" />
	  </van-swipe-item>
	</van-swipe>
		
	<swiper 
		circular 
		:indicator-dots="false" 
		:autoplay="false" 
		:interval="false"
		:duration="500"
		class="mt20 mb20 iconSwipe"
		>
		<swiper-item v-for="item in changeArr" :key="item">
			<template class="flex flexWrap">
				<div v-for="i in item" :key="i.id" style="width: 25vw;text-align: center;">
					<img :src="i.icon" alt="" style="width: 15vw;">
					<view class="mt10 mb5">{{ i.text }}</view>
				</div>
			</template>
		</swiper-item>
	</swiper>
	
	<view class="hotRecommend">
		热销推荐
	</view>
	
	<view class="recommendBox mt10">
		<div v-for="item in recommendList" :key="item.id" class="flex align-items-y mb15">
			<img :src="item.img" alt="" style="width: 20vw;margin-left: 1vw;">
			<div class="ml20">
				<div class="fs26 mb5">{{ item.title }}</div>
				<div style="color: #BFB7B7;">{{ item.desc }}</div>
				<navigator url="#" class="detail c-fff mt10" open-type="redirect">查看详情</navigator>
			</div>
		</div>
	</view>
	
	<view class="weekend">
		周末去哪儿
	</view>
	<view class="weekendList">
		<div v-for="item in weekendList" :key="item.id" class="mb10">
			<img :src="item.img" alt="">
			<div class="fs26 mb5 ml10 mt10">{{ item.title }}</div>
			<div style="color: #BFB7B7;" class="ml10">{{ item.desc }}</div>
		</div>
	</view>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { bannerList, cityOptions, list, recommendList, weekendList } from '@/mock/commonData.js'
	import cityList from '@/mock/cityData.js'
	import CitySelect from '../city/index.vue'

	const iptVal = ref()
	
	const currentCity = ref('北京')
	
	const changeArr = ref([])
	const changeList = () => {
		for (let i = 0; i < list.length; i += 8) {
			changeArr.value.push(list.slice(i, i + 8))
		}
	}
	
	const cityStatus = ref(false)
	
	const cityVal = (val) => {
		if (val){
			currentCity.value = val
			cityStatus.value = false
		}
	}
	
	onMounted(() => {
		changeList()
	})
</script>

<style lang="scss" scoped>
::v-deep .van-search__content {
	border-radius: 1.5vw;
}
.searchBox {
	background-color: #54b9d0;
	position: sticky;
	position: -webkit-sticky;
	top: 0;
	width: 100vw;
}
.van-search {
	height: 4vh;
	width: 80vw;
	margin-right: 5vw;
}
::v-deep .van-nav-bar__title {
	max-width: none;
}
::v-deep .van-dropdown-menu__bar {
	background-color: transparent;
}
::v-deep .van-dropdown-menu__title {
	color: #fff;
}
::v-deep .van-dropdown-menu__title::after {
	opacity: 1;
}
::v-deep .van-nav-bar__left {
	left: -2vw;
}
.img {
	background-repeat: no-repeat;
	width: 100vw;
	height: 20vh;
}
.iconSwipe {
	height: 21.5vh;
}
.hotRecommend, .weekend {
	height: 5vh;
	line-height: 5vh;
	padding-left: 3vw;
	background-color: #f0edf1;
	font-size: 30rpx;
}
.recommendBox {
	.detail {
		display: block;
		background-color: #ee9939;
		width: 18vw;
		text-align: center;
		padding: 5rpx 0;
		border-radius: 5rpx;
	}
}
.weekendList img {
	width: 100vw;
}

.topCity {
	width: 12vw;
	position: relative;
	text-overflow: ellipsis;
	
	div {
		// nvue设置
		lines:1;
		
		overflow: hidden;
		display: -webkit-box;
		
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	.topCityIcon {
		position: absolute;
		top: 50%;
		right: -5rpx;
		margin-top: -10rpx;
		border: 3px solid;
		border-top-color: currentcolor;
		border-right-color: currentcolor;
		border-bottom-color: currentcolor;
		border-left-color: currentcolor;
		border-color: transparent transparent var(--van-gray-4) var(--van-gray-4);
		transform: rotate(-45deg);
		content: "";
	}
}
</style>
