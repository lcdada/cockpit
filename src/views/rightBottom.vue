<template>
	<div class="left-top">
		<dv-border-box-6>
			<div class="content-block">
				<div class="text">安全金子塔</div>
				<div class="img-block">
					<img src="../assets/jzt.png" alt="">
					<!-- 一般及以上的事故 -->
					<div class="num-1">{{numTextData.TR_MAL_AVAILAVLE}}</div>
					<div class="text-1">一般及以上的事故</div>
					<!-- 未遂事件 -->
					<div class="num-2">{{numTextData.TR_MAL_ATTEMPT}}</div>
					<div class="text-2">未遂事件</div>
					<!-- 风险防控措施 -->
					<div class="num-3">{{numTextData.DS_MEASURE}}</div>
					<div class="text-3">风险防控措施</div>
					<!-- 轻伤事故 -->
					<div class="num-4">{{numTextData.TR_MAL_SLIGHT}}</div>
					<div class="text-4">轻伤事故</div>
					<!-- 隐患总计 -->
					<div class="num-5">{{numTextData.TR_RECORD_ALL}}</div>
					<div class="text-5">隐患总计</div>
				</div>
			</div>
		</dv-border-box-6>
	</div>
</template>
	
<script>
	import api from '@/api/api'
	export default{
		data() {
			return {
				numTextData:{}
			}
		},
		created() {
			this.getInfo()
		},
		methods: {
			getInfo() {
				
				api.rectificationRate().then(res => {
					console.log(res)
					this.numTextData = res.data.item
				}).catch(err => console.log(err))
			}
		},
	}
</script>

<style lang="stylus" scoped>
	.left-top{
		width: 100%;
		height: 40%;
		background: #041B3F;
		z-index: 999;
		}
	.content-block{
		width:100%;
		height:100%;
		padding:2% 4% 2% 4%;
		display:flex;
		flex-direction:column;
		justify-content:space-between;
	}
	.text{
		height:10%;
		display:flex;
		align-items:flex-end;
		font-size: 17px;
		font-family: Adobe Heiti Std;
		font-weight: bold;
		color: #FFFFFF;
	}
	.img-block{
		display:flex;
		align-items:flex-end;
		align-content:flex-end;
		align-self:flex-end;
		width:100%;
		height:85%;
		position:relative;
		color:#ffffff;
		font-size:12px;
		img{
			width:100%;
			height:100%;
		}
		.num-1{
			position:absolute;
			top: 4%;
			left: 20%;
			color:#DAFF0F;
		}
		.text-1{
			position:absolute;
			top: 14%;
			left: 12%;
			color:#0FF6FF;
		}
		.num-2{
			position:absolute;
			top: 32%;
			left: 14%;
			color:#DAFF0F;
		}
		.text-2{
			position: absolute;
			top: 42%;
			left: 12%;
			color:#0FF6FF;
		}
		.num-3{
			position: absolute;
			bottom: 30%;
			left: 10%;
			color:#DAFF0F;
		}
		.text-3{
			position: absolute;
			bottom: 20%;
			left: 4%;
			color:#0FF6FF;
		}
		.num-4{
			position: absolute;
			top: 18%;
			right: 14%;
			color:#DAFF0F;
		}
		.text-4{
			position: absolute;
			top: 27%;
			right: 10%;
			color:#0FF6FF;
		}
		.num-5{
			position: absolute;
			bottom: 46%;
			right: 8%;
			color:#DAFF0F;
		}
		.text-5{
			position: absolute;
			bottom: 38%;
			right: 4%;
			color:#0FF6FF;
		}
	}
</style>
