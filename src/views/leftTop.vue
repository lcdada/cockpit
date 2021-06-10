<template>
	<div class="left-top">
		<dv-border-box-11 title="特别关注">
			<div class="four-block">	
				<div v-for="(item,index) in dataList" :key='index' >
					<div class="item-block">
						<div style="width: 100%;display: flex;justify-content: center;">
							<img :src="item.icon" alt="" />
						</div>
						<div style="width: 100%;">
							{{item.title}}
						</div>
					</div>
				</div>
			</div>
			<div>111111</div>
		</dv-border-box-11>
	</div>
</template>
	
<script>
	import api from '@/api/api'
	export default{
		data() {
			return {
				dataList:[
					{
						icon:require('../assets/wdxyl.png'),
						title:'未兑现演练'
					},
					{
						icon:require('../assets/dbyh.png'),
						title:'督办隐患'
					},
					{
						icon:require('../assets/wdxpx.png'),
						title:'未兑现培训'
					},
					{
						icon:require('../assets/yjyh.png'),
						title:'预警隐患'
					}
				]
			}
		},
	}
</script>

<style lang="stylus" scoped>
	.left-top{
		width: 100%;
		height: 27%;
		// background: #FFFFFF;
		z-index: 999;
		color #FFFFFF
	}
	.four-block{
		width: 86%;
		height: 100%;
		margin:0 auto;
		display:flex;
		justify-content:space-between;
		align-items:center;
		
	}
	
	.item-block{
		// width:25%;
		display:flex;
		justify-content:center;
		align-items:center;
		flex-direction column;
	}
</style>
