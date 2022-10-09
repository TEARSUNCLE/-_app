// 轮播图
import banner1 from '@/static/img/banner/banner1.jpg'
import banner2 from '@/static/img/banner/banner2.jpg'
import banner3 from '@/static/img/banner/banner3.jpg'
import banner4 from '@/static/img/banner/banner4.jpg'
export const bannerList = [
	{ img: banner1 },
	{ img: banner2 },
	{ img: banner3 },
	{ img: banner4 },
]

export const  cityOptions = [
	{ text: '北京', value: 0 },
	{ text: '上海', value: 1 },
	{ text: '天津', value: 2 },
	{ text: '重庆', value: 3 },
]

import icon1 from "../static/img/icon/entranceTicket.png"
import icon2 from "../static/img/icon/ski.png"
import icon3 from "../static/img/icon/hotSpring.png"
import icon4 from "../static/img/icon/ZoologicalGarden.png"
import icon5 from "../static/img/icon/park.png"
import icon6 from "../static/img/icon/list.png"
import icon7 from "../static/img/icon/show.png"
import icon8 from "../static/img/icon/city.png"
import icon9 from "../static/img/icon/oneDayTour.png"
export const list = [
	{ id: 0, text: '景点门票', icon: icon1 },
	{ id: 1, text: '滑雪季', icon: icon2 },
	{ id: 2, text: '泡温泉', icon: icon3 },
	{ id: 3, text: '动植园', icon: icon4 },
	{ id: 4, text: '游乐园', icon: icon5 },
	{ id: 5, text: '必游榜单', icon: icon6 },
	{ id: 6, text: '演出', icon: icon7 },
	{ id: 7, text: '城市观光', icon: icon8 },
	{ id: 8, text: '一日游', icon: icon9 },
]

import img1 from '../static/img/recommend/gugong.jpg'
import img2 from '../static/img/recommend/ski.jpg'
import img3 from '../static/img/recommend/tam.jpg'
import img4 from '../static/img/recommend/waterCube.jpg'
import img5 from '../static/img/recommend/aquarium.jpg'
export const recommendList = [
	{ id: 0, img: img1, title: '故宫', desc: '东方宫殿建筑代表，世界宫殿建筑典范' },
	{ id: 1, img: img2, title: '南山滑雪场', desc: '背景专业级滑雪场' },
	{ id: 2, img: img3, title: '天安门广场', desc: '我爱北京天安门，天安门上太阳升' },
	{ id: 3, img: img4, title: '水立方', desc: '中国的荣耀，阳光下的最莹水滴' },
	{ id: 4, img: img5, title: '温都水城养生馆', desc: '各种亚热带植物掩映其间，仿佛置身热带雨林' },
]

import wk1 from '../static/img/weekend/hotSpringTop.jpg'
import wk2 from '../static/img/weekend/PekingTop10.jpg'
import wk3 from '../static/img/weekend/imperialCityTop.jpg'
import wk4 from '../static/img/weekend/museumTop.jpg'
import wk5 from '../static/img/weekend/parkTop.jpg'
export const weekendList = [
	{ id: 0, img: wk1, title: '北京温泉排行榜', desc: '细数北京温泉，温暖你的冬天' },
	{ id: 1, img: wk2, title: '北京必游TOP10', desc: '来北京必去的景点非这些地方莫属' },
	{ id: 2, img: wk3, title: '寻找北京的皇城范儿', desc: '数百年的宫廷唐宇，至今依旧威严霸气' },
	{ id: 3, img: wk4, title: '学生最爱的博物馆', desc: '周末干嘛？北京很多博物馆已经免费开放啦' },
	{ id: 4, img: wk5, title: '儿童剧场，孩子的乐园', desc: '带宝贝观看演出，近距离体验大自然' },
]