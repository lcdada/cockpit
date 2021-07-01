<template>
	<div class="left-top">
		<dv-border-box-12>
			<div class="left-top-block">
				<el-tabs type="border-card" class="border-card">
				  <el-tab-pane label="预警信息" class="border-card-item">
					  <el-card class="box-card">
							
					  </el-card>
				  </el-tab-pane>
				  <el-tab-pane label="主要影响单位">配置管理</el-tab-pane>
				  <el-tab-pane label="主要影响指标">角色管理</el-tab-pane>
				</el-tabs>
			</div>
		</dv-border-box-12>
	</div>
</template>
	
<script>
	import api from '@/api/api'
	export default{
		data() {
			return {
				
			}
		},
	}
</script>

<style lang="stylus" scoped>
	.left-top{
		width: 100%;
		height: 25%;
		background: #000000;
		z-index: 999;
	}
	.left-top-block{
		width:100%;
		height:100%;	
		padding:5%;
	}
	.border-card{
		width:100%;
		height:100%;
		
	}
	.el-tabs__content{
		width: 100% !important;
		height: 83% !important;
		// box-sizing: border-box;
	}
	.border-card-item{
		width:100%;
		height:100%;
	}
	.box-card{
		width:100%;
		height:100%;
		background-color #8EC5E8
	}
</style>
