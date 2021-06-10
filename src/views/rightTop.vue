<template>
	<div class="left-top">
		<dv-border-box-1 :dur="4"></dv-border-box-1>
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
</style>
