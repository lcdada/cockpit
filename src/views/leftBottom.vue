<template>
	<div class="left-bottom">
		<dv-border-box-1></dv-border-box-1>
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
	.left-bottom{
		align-items flex-end
		width: 100%;
		height: 70%;
		background:#897654;
		z-index: 999;
	}
</style>
