<template>
	<div class="haed-block">
		<div class="header-block title-text">XXX管理驾驶舱</div>
		<div class="time-text">
			<span class="text">{{dateYear}} {{dateWeek}} {{dateDay}}</span>
		</div>
	</div>
</template>

<script>
	import api from '@/api/api'
	import {
		formatTime
	} from '../utils/index.js'
	export default {
		data() {
			return {
				msg: 111111,
				dateDay: null,
				dateYear: null,
				dateWeek: null,
				weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
			}
		},
		created() {
			this.timeFn();
		},
		mounted() {
		},
		methods: {
			timeFn() {
				setInterval(() => {
					this.dateDay = formatTime(new Date(), 'HH: mm: ss');
					this.dateYear = formatTime(new Date(), 'yyyy-MM-dd');
					this.dateWeek = this.weekday[new Date().getDay()];
				}, 1000)
			},
		}
	}
</script>

<style>
	.haed-block {
		display: flex;
		align-items: center;
		width: 100%;
		height: 10%;
		/* background-color: #041B3F; */
		position: relative;
		padding: 0.2rem 0.2rem 0 0.2rem;
		background: url("../assets/topBg.png") #041B3F;
		background-size: cover;
		background-position: center center;
	}

	.time-text {
		position: absolute;
		right: 5%;
		top: 10%;
	}

	.header-block {
		flex: 1;
		display: flex;
		height: 100%;
		align-items: center;
	}

	.title-text {
		height: 100%;
		position: relative;
		justify-content: center;
		align-items: center;
		text-align: center;
		/* width: 318px;
		height: 25px; */
		font-size: 36px;
		font-family: CTLaoSongSJ;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 16px;

		background: linear-gradient(0deg, rgba(239, 249, 255, 0.95) 0%, rgba(70, 170, 228, 0.95) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		padding-bottom: 20px;
	}

	.dv-decoration-7 {
		position: absolute;
		bottom: 0;
		left: 0;
	}

	.text {
		color: #23CEFD;
	}
</style>
