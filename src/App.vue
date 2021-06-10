<template>
  <div id="app">
	<router-view/>
  </div>
</template>

<script>
// import { getQueryString } from './utils/index.js'
export default {
  name: 'app',
  components: {
  },
  created() {

	let token = this.getQueryString('Authorization')
	localStorage.setItem('token',token)
  },
  methods:{
	  // 获取链接参数
	  getQueryString(name) {
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	    var url = decodeURI(decodeURI(window.location.search))
	    var r = url.substr(1).match(reg);
	    if (r != null) return unescape(r[2]);
	    return null;
	  },
  }
}
</script>

<style>
	html ,body, #app{
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		overflow: hidden;
	}
	div{
		box-sizing: border-box;
	}
</style>
