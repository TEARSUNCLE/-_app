<template>
	<view class="box">
		<van-index-bar style="height: 100vh;" :index-list="cityArr" sticky>
			<view v-for="(item, index) in cityArr" :key="index">
				<van-index-anchor :index="index" style="background-color: #f7f8fa;">{{ item.letter }}</van-index-anchor>
					<view v-for="(item1, index) in item.data" :key="index">
						<van-cell :title="item1" class="cityItem" @click="handleCity(item1)" />
					</view>
			</view>
		</van-index-bar>
	 </view>
</template>

<script setup>
	import cityList from '@/mock/cityData.js'
	import { onMounted, ref } from 'vue';
	
	const emit = defineEmits(['cityVal'])
	
	const cityArr = ref()
	const changeCity = () => {
		cityArr.value = cityList.list.filter(item => {
			return item.letter
		})
	}
	
	const handleCity = (val) => {
		emit("cityVal", val)
	}
	
	onMounted(() => {
		changeCity()
	})
	
</script>

<style lang="scss">
.box {
	.cityItem {
		border-bottom: 1px #f2f2f2 solid;
		&:hover {
			color: #f00;
		}
	}
}
</style>