<template>
	<div class="right-center">
		<dv-border-box-2>
			<dv-scroll-board :config="config" style="width:100%;height:100%" />
		</dv-border-box-2>
	</div>
</template>
	
<script>
	import api from '@/api/api'
	export default{
		data() {
			return {
				config:{
					// // 表头
					// header:[],
					// data:[
						
					// ],
					// rowNum:5,
					// index: true,
					// align: ['center'],
				}
			}
		},
		mounted() {
			this.getNews()
		},
		methods:{
			getNews(){
				api.hiddenDangerBroadcast().then(res => {
					let arrlistresult =[]
					res.data.item.TR_DETAIL_LIST.map(item =>{
						let arrlist = [item.troDesc,item.nodeName,item.consume]
						arrlistresult.push(arrlist)
					})
					// this.config.header: = ['隐患描述','所属单位','整改时长与时限']
					this.config ={
						 index: true,
						 header:['隐患描述','所属单位','整改时长与时限'],
						 rowNum:6,
						 index: true,
						 align: ['center', 'center','center'],
						 data:arrlistresult,
						 columnWidth: [50],
					}
				}).catch(err => console.log(err))
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.right-center{
		width: 100%;
		height: 31%;
		// background: #789333;
		z-index: 999;
	}
</style>
