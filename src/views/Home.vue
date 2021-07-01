<template>
  <div class="home">
    <dv-loading v-if="loading">Loading...</dv-loading>
    <div v-else class="body-block">
      <top-head />

      <div class="center-block">
        <!-- 地图代码 -->
        <div class="map-block">
			  <div id="container" style="width: 100%;height: 100%">
        </div>
		    </div>
        <!-- 左 -->
        <!-- <div class="center-left-block">
          <left-top class="left-top-block"></left-top>
          <left-bottom class="left-bottom-block"></left-bottom>
        </div> -->
        <!-- 右 -->
        <!-- <div class="center-right-block">
          <right-top></right-top>
          <right-center></right-center>
          <right-bottom></right-bottom>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import AMap from 'AMap' // 引入高德地图
import { formatTime } from "../utils/index.js";
import topHead from "./hade.vue";
import leftTop from "./leftTop.vue";
import leftBottom from "./leftBottom.vue";
import rightTop from "./rightTop.vue";
import rightCenter from "./rightCenter.vue";
import rightBottom from "./rightBottom.vue";
import api from '@/api/api'
export default {
  components: {
    topHead,
    leftTop,
    leftBottom,
    rightTop,
    rightCenter,
    rightBottom,
  },
  data() {
    return {
      loading: true,
      map:'',
      markers:[]
    };
  },
  mounted() {
    this.cancelLoading();
    this.initMap()
  },
  methods: {
    initMap:function() {
      setTimeout(() => {
        var limitBounds = new AMap.Bounds(
                [118.0581402,40.178058],
                [118.094709,40.190915]
        );
        //设置背景图 及缩放级别
        // var imageLayer = new AMap.ImageLayer({
        //     // url:  window.basePath+map_url,
        //     // opacity: '1',
        //     bounds: limitBounds,
        //     zooms: [15, 18]
        // });
         this.map = new AMap.Map('container', {
            // scrollWheel: true,
            center: [118.075639,40.184817],//centerPath.split(','),
            zoom: 14,//map_initialization_level,
            zooms: [12, 18],
            pitch: 50,
            bounds: limitBounds,
            viewMode:'3D',
            mapStyle:'amap://styles/05631e535654d5f02db7dac9a93ff86d',
            layers: [
                new AMap.TileLayer(),
                // imageLayer
            ]
        });
         //设置限制范围
        this.map.setLimitBounds(limitBounds);

        // 添加 Object3DLayer 图层，用于添加 3DObject 对象
        var object3Dlayer = new AMap.Object3DLayer();
        this.map.add(object3Dlayer);
        // var mapSign= "118.062638,40.187125,118.06303,40.187125,118.063051,40.186891,118.062628,40.186891"

        // 创建 Object3D 
        

       api.getSpaceColor({'qm.companyNodeId':'GL','qm.jibie':'3'}).then(res => {
         for(var i=0;i<res.data.items.length;i++){
           if(res.data.items[i].mapSign){
              var mapData=res.data.items[i].mapSign.split('&')
              // console.log(mapData)
            if(mapData.length>1){
              for(var j=0;j<mapData.length;j++){
                var paths=this.sliceArr(mapData[j].toString().split(','),2)
                        var path = paths.map(function(limitPath) {
                            return new AMap.LngLat(limitPath[0], limitPath[1]);
                        });
                        var prism = new AMap.Object3D.Prism({
                            path: path,
                            height: 500,
                            color:  '#0088ffcc' // 支持 #RRGGBB、rgb()、rgba() 格式数据

                        });
                        prism.transparent = true;
                        object3Dlayer.add(prism);
                        new AMap.Text({
                          text:res.data.items[i].spaceName,
                          verticalAlign:'bottom',
                          position:paths[1],
                          map:this.map,
                          style:{
                             'background-color': 'transparent',
                              '-webkit-text-stroke': 'red',
                              '-webkit-text-stroke-width': '0.5px',
                              'text-align': 'center',
                              'border': 'none',
                              'color': 'white',
                              'font-size': '14px',
                              'font-weight': 600
                          }
                       })
              }
           }else{
             var paths=this.sliceArr(res.data.items[i].mapSign.toString().split(','),2)
                        var path = paths.map(function(limitPath) {
                            return new AMap.LngLat(limitPath[0], limitPath[1]);
                        });
                        // console.log(path)
                        var prism = new AMap.Object3D.Prism({
                            path: path,
                            height: 500,
                            color:  '#0088ffcc' // 支持 #RRGGBB、rgb()、rgba() 格式数据

                        });
                        prism.transparent = true;
                        object3Dlayer.add(prism);
                        new AMap.Text({
                          text:res.data.items[i].spaceName,
                          verticalAlign:'bottom',
                          position:paths[1],
                          height:651,
                          map:this.map,
                          style:{
                              'background-color': 'transparent',
                              '-webkit-text-stroke': 'red',
                              '-webkit-text-stroke-width': '0.5px',
                              'text-align': 'center',
                              'border': 'none',
                              'color': 'white',
                              'font-size': '14px',
                              'font-weight': 600
                          }
                       })
           }
           
           }
          
           
           
        //   console.log(this.sliceArr(mapSign.split(','),2))
       
         }

				}).catch(err => console.log(err))
        this.getcolor()
    }, 500);
    
    },

    getcolor(){
      // var that =this
      // that.map.remove(that.markers);
      api.getYHPointer({'qm.pointTypeAndSecondTypeArray':'YH-01,YH-02,YH-03,YH-04,YH-05','limit':'999999'}).then(res => {
          // console.log(res)
          for(var i=0;i<res.data.items.length;i++){
            if(res.data.items[i].secondType=='01'){
              var icon = new AMap.Icon({
                  image: require('/src/assets/yh-a.gif'),
                  size: new AMap.Size(25, 30)
              });
              var marker = new AMap.Marker({
                  icon: icon,
                  position: res.data.items[i].location.split(','),
                  offset: new AMap.Pixel(-12,5),
                  anchor:'bottom-left',
                  zIndex: 101,
                  map: this.map
              });
              marker.businessSid=res.data.items[i].businessSid;
              marker.type=res.data.items[i].pointType;
            }else if(res.data.items[i].secondType=='02'){
              var icon = new AMap.Icon({
                  image: require('/src/assets/yh-b.gif'),
                  size: new AMap.Size(25, 30)
              });
              var marker = new AMap.Marker({
                  icon: icon,
                  position: res.data.items[i].location.split(','),
                  offset: new AMap.Pixel(-12,5),
                  anchor:'bottom-left',
                  zIndex: 101,
                  map: this.map
              });
              marker.businessSid=res.data.items[i].businessSid;
              marker.type=res.data.items[i].pointType;
            }else if(res.data.items[i].secondType=='03'){
              var icon = new AMap.Icon({
                  image: require('/src/assets/yh-c.gif'),
                  size: new AMap.Size(25, 30)
              });
              var marker = new AMap.Marker({
                  icon: icon,
                  position: res.data.items[i].location.split(','),
                  offset: new AMap.Pixel(-12,5),
                  anchor:'bottom-left',
                  zIndex: 101,
                  map: this.map
              });
              marker.businessSid=res.data.items[i].businessSid;
              marker.type=res.data.items[i].pointType;
            }else if(res.data.items[i].secondType=='04'){
              var icon = new AMap.Icon({
                  image: require('/src/assets/yh-d.gif'),
                  size: new AMap.Size(25, 30)
              });
              var marker = new AMap.Marker({
                  icon: icon,
                  position: res.data.items[i].location.split(','),
                  offset: new AMap.Pixel(-12,5),
                  anchor:'bottom-left',
                  zIndex: 101,
                  map: this.map
              });
              marker.businessSid=res.data.items[i].businessSid;
              marker.type=res.data.items[i].pointType;
            }else if(res.data.items[i].secondType=='05'){
              var icon = new AMap.Icon({
                  image: require('/src/assets/yh-e.gif'),
                  size: new AMap.Size(25, 30)
              });
              var marker = new AMap.Marker({
                  icon: icon,
                  position: res.data.items[i].location.split(','),
                  offset: new AMap.Pixel(-12,5),
                  anchor:'bottom-left',
                  zIndex: 101,
                  map: this.map
              });
              marker.businessSid=res.data.items[i].businessSid;
              marker.type=res.data.items[i].pointType;
              marker.setMap(this.map);
            }
            this.markers.push(marker);
            
          }

      }).catch(err => console.log(err))
      console.log(this.markers)
    },
     sliceArr(array, size) {
        var result = [];
        for (var x = 0; x < Math.ceil(array.length / size); x++) {
            var start = x * size;
            var end = start + size;
            result.push(array.slice(start, end));
        }
        return result;
    },
    getCenterPoint(lnglatarr){
      var total = lnglatarr.length;
      var X = 0, Y = 0, Z = 0;
      for(var i=0;i<total;i++) {
          var lng = lnglatarr[i].lng * Math.PI / 180;
          var lat = lnglatarr[i].lat * Math.PI / 180;
          var x, y, z;
          x = Math.cos(lat) * Math.cos(lng);
          y = Math.cos(lat) * Math.sin(lng);
         z = Math.sin(lat);
         X += x;
        Y += y;
         Z += z;
      };
 
     X = X / total;
     Y = Y / total;
     Z = Z / total;
 
     var Lng = Math.atan2(Y, X);
     var Hyp = Math.sqrt(X * X + Y * Y);
     var Lat = Math.atan2(Z, Hyp);
     return this.getLatLng(Lat * 180 / Math.PI, Lng * 180 / Math.PI);

    },
    // loading提示框
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
        
      }, 500);
      
    },

  },
};
</script>
<style>
.home,
.body-block {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.center-block {
  width: 100%;
  height: 90%;
  padding: 0 1% 1% 1%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: aqua; */
}
.map-block {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* background-color: aqua; */
}
.center-left-block,
.center-right-block {
  width: 27%;
  height: 100%;
  display: flex;
  background-color: #8ec5e8;
  z-index: 99;
  flex-direction: column;
  justify-content: space-between;
}
.left-top-block {
  align-self: flex-start;
}
.left-bottom-block {
  align-self: flex-end;
}
</style>