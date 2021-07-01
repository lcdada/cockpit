<template>
	<div class="left-top">
		<dv-border-box-9>
			<div class="center-block">
				<div class="top-text-block">特别关注指标</div>
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
				<div class="num-block">
					<div>{{wdxyl}}个</div>
					<div>{{dbyh}}个</div>
					<div>{{wdxpx}}个</div>
					<div>{{yjyh}}个</div>
				</div>
			</div>
		</dv-border-box-9>
		<!-- <dv-border-box-9>
			<div style="padding:20px">dv-border-box-9</div>
		</dv-border-box-9> -->
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
				],
				wdxyl:0,
				dbyh:0,
				wdxpx:0,
				yjyh:0,
			}
		},
		created() {
			this.getNum()
		},
		methods: {
			getNum() {
				let params ={
					'qm.orgLevel': 0,
					'qm.lastWeek':0,
					'qm.operationIndicator':"'DS_POINT_BETTER01','EM_EXERCISE_UN','TR_SUPED_ALL','DS_POINT_BETTER02','TR_WARN_FLAG','EDU_TRAIN_UN'"
				}
				api.getPyramid(params).then(res=>{
					console.log(res.data.items[0])
					// this.zdfx=res.data.items[0].DS_POINT_BETTER01,
					// this.jdfx=res.data.items[0].DS_POINT_BETTER02,
					this.wdxyl=res.data.items[0].EM_EXERCISE_UN,
					this.dbyh=res.data.items[0].TR_SUPED_ALL,
					this.wdxpx=res.data.items[0].EDU_TRAIN_UN,
					this.yjyh=res.data.items[0].TR_WARN_FLAG
				})
			}
		},
	}
</script>

<style lang="stylus" scoped>
	.left-top{
		width: 100%;
		height: 24%;
		// background: #FFFFFF;
		z-index: 999;
		color #FFFFFF
		background-color:#041B3F;
	}
	.center-block{
		width: 86%;
		height: 100%;
		margin:0 auto;
		display:flex;
		// justify-content:space-between;
		// align-items:center;
		flex-direction:column
		
	}
	.top-text-block{
		width:100%;
		height:20%;
		display:flex;
		justify-content:flex-start;
		align-items:flex-end;
		font-family: Adobe Heiti Std;
		font-weight: bold;
		color: #FFFFFF;
	}
	.four-block{
		height:50%;
		width:100%;
		display:flex;
		justify-content:space-between;
		align-items:center;
	}
	.num-block{
		width:100%;
		height:30%
		display:flex;
		justify-content:space-between;
		align-items:center;
		div{
			flex:1;
			display:flex;
			justify-content:center;
			align-items:center;
		}
		
	}
	
	.item-block{
		// width:25%;
		display:flex;
		justify-content:center;
		align-items:center;
		flex-direction column;
	}
</style>
