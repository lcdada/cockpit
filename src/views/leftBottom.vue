<template>
	<div class="left-bottom">
		<dv-border-box-9>
			<div class="content-block">
				<!-- 上 -->
				<div class="top-block">
					<div class="top-text-block">风险管控</div>
					<div class="pie-block">
						<div class="pie-item-block" ref='pie0'></div>
						<div class="pie-item-block" ref='pie1'></div>
						<div class="pie-item-block" ref='pie2'></div>
						<div class="pie-item-block" ref='pie3'></div>
					</div>
					<div class="pie-bottom-text">
						<div style="color:#CA2E2A;">重大风险</div>
						<div style="color:#F5A540 ;">较大风险</div>
						<div style="color:#FCF851;">一般风险</div>
						<div style="color:#5EE0FA;">低风险</div>
					</div>
					<div class="text-num-block">
						<!-- 重大 -->
						<div class="text-item">
							<div class="text-item-block">
								<div>总任务</div>
								<div>{{zd}}个</div>
							</div>
							<div class="text-item-block">
								<div>未排查</div>
								<div>{{zdw}}个</div>
							</div>
						</div>
						<!-- 较大 -->
						<div class="text-item">
							<div class="text-item-block">
								<div>总任务</div>
								<div>{{jd}}个</div>
							</div>
							<div class="text-item-block">
								<div>未排查</div>
								<div>{{jdw}}个</div>
							</div>
						</div>
						<!-- 一般 -->
						<div class="text-item">
							<div class="text-item-block">
								<div>总任务</div>
								<div>{{yb}}个</div>
							</div>
							<div class="text-item-block">
								<div>未排查</div>
								<div>{{ydw}}个</div>
							</div>
						</div>
						<!-- 低风险 -->
						<div class="text-item">
							<div class="text-item-block">
								<div>总任务</div>
								<div>{{df}}个</div>
							</div>
							<div class="text-item-block">
								<div>未排查</div>
								<div>{{dfw}}个</div>
							</div>
						</div>
					</div>
					<div class="four-block">
						<div class="dot-block">
							<div class="round-dot1"></div>
							<div>重大风险</div>
							<div class="four-num-item"><p style="color: #00FFFF;">11111</p>个</div>
						</div>
						<div class="dot-block">
							<div class="round-dot2"></div>
							<div>较大风险</div>
							<div class="four-num-item"><p style="color: #00FFFF;">11111</p>个</div>
						</div>
						<div class="dot-block">
							<div class="round-dot3"></div>
							<div>一般风险</div>
							<div class="four-num-item"><p style="color: #00FFFF;">11111</p>个</div>
						</div>
						<div class="dot-block">
							<div class="round-dot4"></div>
							<div>低风险</div>
							<div class="four-num-item"><p style="color: #00FFFF;">11111</p>个</div>
						</div>
					</div>
				</div>
				<!-- 下 -->
				<div class="bottom-block">
					<!-- <div class="top-text-block">风险管控</div> -->
				</div>
			</div>

		</dv-border-box-9>
	</div>
</template>

<script>
	import api from '@/api/api'
	export default {
		data() {
			return {
				RISK_LEVEL01_COUNT: '', //重大风险总任务
				RISK_LEVEL02_COUNT: '', //较大风险总任务
				RISK_LEVEL03_COUNT: '', //一般风险总任务
				RISK_LEVEL04_COUNT: '', //低风险总任务
				zd: "", //重大风险
				jd: "", //较大风险
				yb: "", //一般风险
				df: "", //低风险
				zdw: '', //重大未
				jdw: '', //较大未
				ydw: '', //一般未
				dfw: '', //低未
				zjb: 0, //重警报
				zjjb: 0, //较大警报
				yjb: 0, //一般警报
				djb: 0, //低警报
				alljb: 0, // 预警隐患总数
				ss0: '',
				ss1: '',
				ss2: '',
				ss3: '',
				dataStyle: {
				    normal: {
				        color: '#03C8DD', //完成的圆环的颜色
				        label: {
				            show: false
				        },
				       
				        shadowBlur: 40
				    }
				},
				placeHolderStyle: {
				    normal: {
				        color: '#132542', //未完成的圆环的颜色
				        label: {
				            show: false
				        },
				       
				    }
				
				}
			}
		},
		created() {
			this.getData()
		},
		methods: {
			getData() {
				api.hiddenDangerBroadcast().then(res => {
					console.log(res)
					this.zd = res.data.item.DS_DANGEROUS_BETTER1 ?res.data.item.DS_DANGEROUS_BETTER1 : 0; //重大风险
					this.zdw = res.data.item.RISK_LEVEL01_NOCHECK ? res.data.item.RISK_LEVEL01_NOCHECK : 0; //未
					this.RISK_LEVEL01_COUNT = res.data.item.RISK_LEVEL01_COUNT ? res.data.item.RISK_LEVEL01_COUNT : 0; //总任务数
					this.zjb = res.data.item.TR_RISK_LEVEL01 ? res.data.item.TR_RISK_LEVEL01 : 0; //暂报隐患
					if (this.RISK_LEVEL01_COUNT == 0) {
						this.ss0 = this.zdw
					} else {
						this.ss0 = this.zdw / this.RISK_LEVEL01_COUNT
					}


					this.jd = res.data.item.DS_DANGEROUS_BETTER2 ? res.data.item.DS_DANGEROUS_BETTER2 : 0; //较大风险
					this.jdw =res.data.item.RISK_LEVEL02_NOCHECK ? res.data.item.RISK_LEVEL02_NOCHECK : 0; //未
					this.RISK_LEVEL02_COUNT = res.data.item.RISK_LEVEL02_COUNT ? res.data.item.RISK_LEVEL02_COUNT : 0; //总任务数
					this.zjjb =res.data.item.TR_RISK_LEVEL02 ? res.data.item.TR_RISK_LEVEL02 : 0; //暂报隐患
					if (this.RISK_LEVEL02_COUNT == 0) {
						this.ss1 = this.jdw
					} else {
						this.ss1 = this.jdw / this.RISK_LEVEL02_COUNT
					}

					this.yb = res.data.item.DS_DANGEROUS_BETTER3 ? res.data.item.DS_DANGEROUS_BETTER3 : 0; //一般风险
					this.ydw = res.data.item.RISK_LEVEL03_NOCHECK ? res.data.item.RISK_LEVEL03_NOCHECK : 0; //未
					this.RISK_LEVEL03_COUNT = res.data.item.RISK_LEVEL03_COUNT ? res.data.item.RISK_LEVEL03_COUNT : 0; //总任务数
					this.yjb = res.data.item.TR_RISK_LEVEL03 ? res.data.item.TR_RISK_LEVEL03 : 0; //暂报隐患
					if (this.RISK_LEVEL03_COUNT == 0) {
						this.ss2 = this.ydw
					} else {
						this.ss2 = this.ydw / this.RISK_LEVEL03_COUNT
					}

					this.df = res.data.item.DS_DANGEROUS_BETTER4 ? res.data.item.DS_DANGEROUS_BETTER4 : 0; //低风险
					this.dfw = res.data.item.RISK_LEVEL04_NOCHECK ? res.data.item.RISK_LEVEL04_NOCHECK : 0; //未
					this.RISK_LEVEL04_COUNT = res.data.item.RISK_LEVEL04_COUNT ? res.data.item.RISK_LEVEL04_COUNT : 0; //总任务数
					this.djb = res.data.item.TR_RISK_LEVEL04 ? res.data.item.TR_RISK_LEVEL04 : 0; //暂报隐患
					if (this.RISK_LEVEL04_COUNT == 0) {
						this.ss3 = this.dfw
					} else {
						this.ss3 = this.dfw / this.RISK_LEVEL04_COUNT
					}
					this.alljb = this.zjb + this.zjjb + this.yjb + this.djb
					this.pie();
					// this.sonToP()
				})
			},
			pie() {
				var echarts = require('echarts')

				var myChart0 = echarts.init(this.$refs.pie0);
				var myChart1 =echarts.init(this.$refs.pie1);
				var myChart2 = echarts.init(this.$refs.pie2);
				var myChart3 = echarts.init(this.$refs.pie3);
				// 指定图表的配置项和数据
				var option0 = {
				    title: [{
				        text: 100 - Math.floor(this.ss0 * 100) + "%",
				        x: 'center',
				        y: 'center',
				        textStyle: {
				            fontWeight: 'normal',
				            color: '#ED3833',
				            fontSize: 12
				        }
				    }],
					color:['#55D0F9','#F1953D'],
				    series: {
				        type: 'pie',
				        radius: ['70%', '80%'],
				        // label: this.dataStyle,
				        hoverAnimation: false,
				
				        data: [{
				            value: 100 - Math.floor(this.ss0 * 100)
				        }, {
				            value: 100 - (100 - Math.floor(this.ss0 * 100)),
				            // label: this.placeHolderStyle
				        }],
						label: { 　　　　　　　　　　//去除饼图的指示折线label
							normal: {
								show: false,
							},
						},
				    }
				};
				var option1 = {
				    title: [{
				        text: 100 - Math.floor(this.ss1 * 100) + "%",
				        x: 'center',
				        y: 'center',
				        textStyle: {
				            fontWeight: 'normal',
				            color: '#F5A540',
				            fontSize: 12
				        }
				    }],
					color:['#55D0F9','#5ACCB3'],
				    series: {
				        type: 'pie',
				        radius: ['70%', '80%'],
				        hoverAnimation: false,
				        data: [{
				            value: 100 - Math.floor(this.ss1 * 100)
				        }, {
				            value: 100 - (100 - Math.floor(this.ss1 * 100)),
				        }],
						label: { 　　　　　　　　　　//去除饼图的指示折线label
							normal: {
								show: false,
							},
						},
				    }
				};
				var option2 = {
				    title: [{
				        text: 100 - Math.floor(this.ss2 * 100) + "%",
				        x: 'center',
				        y: 'center',
				        textStyle: {
				            fontWeight: 'normal',
				            color: '#FCF851',
				            fontSize: 12
				        }
				    }],
					color:['#55D0F9','#7549AC'],
				    series: {
				        type: 'pie',
				        radius: ['70%', '80%'],
				        hoverAnimation: false,
				
				        data: [{
				            value: 100 - Math.floor(this.ss2 * 100)
				        }, {
				            value: 100 - (100 - Math.floor(this.ss2 * 100)),
				        }],
						label: { 　　　　　　　　　　//去除饼图的指示折线label
							normal: {
								show: false,
							},
						},
				    }
				};
				var option3 = {
				    title: [{
				        text: 100 - Math.floor(this.ss3 * 100) + "%",
				        x: 'center',
				        y: 'center',
				        textStyle: {
				            fontWeight: 'normal',
				            color: '#5EE0FA',
				            fontSize: 12
				        }
				    }],
					color:['#55D0F9','#DE773F'],
				    // tooltip: {
				    //     show: false,
				    //     formatter: "{a} <br/>{b} : {c} ({d}%)"
				    // },
				    series: {
				        type: 'pie',
				        radius: ['70%', '80%'],
				        hoverAnimation: false,
				
				        data: [{
				            value: 100 - Math.floor(this.ss3 * 100)
				        }, {
				            value: 100 - (100 - Math.floor(this.ss3 * 100)),
				        }],
						label: { 　　　　　　　　　　//去除饼图的指示折线label
							normal: {
								show: false,
							},
						},
				    }
				};
				myChart0.setOption(option0, window.addEventListener("resize", myChart0.resize));
				myChart1.setOption(option1, window.addEventListener("resize", myChart1.resize));
				myChart2.setOption(option2, window.addEventListener("resize", myChart2.resize));
				myChart3.setOption(option3, window.addEventListener("resize", myChart3.resize));
			}
		},
	}
</script>

<style lang="stylus" scoped>
	.left-bottom {
		align-items:flex-end;
		width: 100%;
		height: 74%;
		// background:#897654;
		z-index: 999;
	}

	.content-block {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		padding: 4% 6%;
	}

	.top-block {
		display: flex;
		width: 100%;
		height: 58%;
		// background-color: #041B3F;
		flex-direction: column;

	}

	.top-text-block {
		height: 10%;
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
		color: #FFFFFF;
	}

	.pie-block {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height:30%
	}

	.pie-item-block {
		flex: 1;
		height:100% 
		-webkit-tap-highlight-color: transparent;
		user-select: none;
	}
	.publicstyle {
	  flex: 1 1 0%;
	  display: flex;
	  margin-top: -10%;
	  -webkit-tap-highlight-color: transparent;
	  user-select: none;
	}
	.pie-bottom-text{
		display:flex;
		justify-content:space-between;
		align-items:center;
		height:10%;
		div{
			flex:1;
			display:flex;
			align-items:center;
			justify-content:center;
		}
	}
	.text-num-block{
		width:100%;
		height:20%
		display:flex;
		justify-content:space-between;
		align-items:center;
		.text-item{
			display:flex;
			justify-content:center;
			flex-direction:column;
			.text-item-block{
				flex:1;
				display:flex;
				justify-content:space-between;
				align-items:center;
				font-size:12px;
				:nth-child(1){
					color:#AFB1B5;
				}
				:nth-child(2){
					color:#FFFFFF;
				}
			}
		}
	}
	.four-block{
		width:100%;
		height:25%;
		display:flex;
		justify-content:space-between;
		align-items:center;
		flex-wrap:wrap;
	}
	.dot-block{
		width:40%;
		height:30%
		display:flex;
		justify-content:space-around;
		align-items:center;
		color:#ffffff;
	}
	.four-num-item{
		display:flex;
		justify-content:flex-start;
		align-items:center;
	}
	.round-dot1{
		width:10px;
		height:10px;
		border-radius:50%
		background-color:#ED3833;
	}
	.round-dot2{
		width:10px;
		height:10px;
		border-radius:50%
		background-color:#F5A540;
	}
	.round-dot3{
		width:10px;
		height:10px;
		border-radius:50%
		background-color: #5EE0FA;
	}
	.round-dot4{
		width:10px;
		height:10px;
		border-radius:50%
		background-color:red;
	}





	.bottom-block {
		display:flex;
		width:100% ;
		height:41% ;
		background-color:#FFFFFF;
		
	}
</style>
