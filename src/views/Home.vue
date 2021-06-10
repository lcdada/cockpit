<template>
	<div class="home">
		<dv-loading v-if="loading">Loading...</dv-loading>
		<div v-else class="body-block">
			<top-head />
			<div class="center-block">
				<!-- 左 -->
				<div class="center-left-block">
					<left-top class="left-top-block"></left-top>
					<left-bottom class="left-bottom-block"></left-bottom>
				</div>
				<!-- 右 -->
				<div class="center-right-block">
					<right-top></right-top>
					<right-center></right-center>
					<right-bottom></right-bottom>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {formatTime} from '../utils/index.js'
	import topHead from './hade.vue'
	import leftTop from './leftTop.vue'
	import leftBottom from './leftBottom.vue'
	import rightTop from './rightTop.vue'
	import rightCenter from './rightCenter.vue'
	import rightBottom from './rightBottom.vue'
	
	export default {
		components: {
			topHead,
			leftTop,
			leftBottom,
			rightTop,
			rightCenter,
			rightBottom
		},
		data() {
			return {
				loading: true,
			};
		},
		mounted() {
			this.cancelLoading();
		},
		methods: {
			// loading提示框
			cancelLoading() {
				setTimeout(() => {
					this.loading = false;
				}, 500);
			}
		}
	}
</script>
<style>
	.home,
	.body-block {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		overflow: hidden;
	}
	.center-block{
		width: 100%;
		height: 90%;
		padding: 0 1% 1% 1%;
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* background-color: aqua; */
		
	}
	.center-left-block , .center-right-block{
		width: 27%;
		height: 100%;
		display: flex;
		background-color: #8EC5E8;
		z-index: 99;
		flex-direction: column;
		justify-content: space-between;
		
		
	}
	.left-top-block{
		align-self: flex-start;
	}
	.left-bottom-block{
		align-self: flex-end;
	}
</style>
