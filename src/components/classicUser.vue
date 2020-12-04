<template>
  <section id="classicUser" class="classicUser-section">
      <div class="classicUser-title">
        典型用户
        <span></span>
      </div>
      <div class="classicUser-content">
        <Row type="flex" :gutter="0" justify="space-between">
          <Col class="classicUser-item">
            <div class="classicUser-item--title">典型用户案例</div>
            <div  class="classicUser-item--table">
                <user-table :data="tableData"/>
            </div>
          </Col>
          <Col class="classicUser-item">
            <div class="classicUser-item--title">用户分布地图</div>
            <div ref="userMap" style="height:480px"></div>
          </Col>
        </Row>
      </div>
    </section>  
</template>
<script>
import "@/styles/classicUser.scss";
import * as echarts from "echarts";
const chinaJSon = require('@/libs/map/china1.js')
import _ from "lodash"
import tableData from "@/data/userList.js"
import userTable from './userTable.vue';
export default {
  components: { userTable },
    data(){
      return {
        tableData,
        mapChart:null,
        mapData:[
            {name: '北京',value: 0 },{name: '天津',value: 0 },
            {name: '上海',value: 0 },{name: '重庆',value: 0 },
            {name: '河北',value: 0 },{name: '河南',value: 0 },
            {name: '云南',value: 0 },{name: '辽宁',value: 0 },
            {name: '黑龙江',value: 0 },{name: '湖南',value: 0 },
            {name: '安徽',value: 0 },{name: '山东',value: 0 },
            {name: '新疆',value: 0 },{name: '江苏',value: 0 },
            {name: '浙江',value: 0 },{name: '江西',value: 0 },
            {name: '湖北',value: 0 },{name: '广西',value: 0 },
            {name: '甘肃',value: 0 },{name: '山西',value: 0 },
            {name: '内蒙古自治区',value: 0 },{name: '陕西',value: 0 },
            {name: '吉林',value: 0 },{name: '福建',value: 0 },
            {name: '贵州',value: 0 },{name: '广东',value: 0 },
            {name: '青海',value: 0 },{name: '西藏',value: 0 },
            {name: '四川',value: 0 },{name: '宁夏',value: 0 },
            {name: '海南',value: 0 },{name: '台湾',value: 0 },
            {name: '香港',value: 0 },{name: '澳门',value: 0 },
            {name:'南海诸岛',value:0}
            // {name:'南海诸岛',value:0,"itemStyle":{ "normal":{"opacity":0}} }
        ],
        scatterList:[
            { name: '华中', value: [111.15, 33.38, 0] },
            { name: '华东', value: [121.48, 31.22, 0] },
            { name: '华南', value: [110.3, 24.08, 0] },
            { name: '西南', value: [98.06, 30.67, 0] },
            { name: '西北', value: [90.68, 38.77, 0] },
            { name: '华北', value: [112.46, 40.92, 0] },
            { name: '东北', value: [126.63, 45.75, 0] },
        ]
      }
    },
    methods:{
      handleMapInit(){
        const self = this 
        echarts.registerMap('china',chinaJSon)
        this.mapChart = echarts.init(this.$refs.userMap)
        this.mapChart.setOption({
          // title:{
          //   text:'用户分布地图',
          //   left:'center',
          //   textStyle:{
          //     fontSize:20,
          //     fontWeight:'normal',
          //   }
          // },
          tooltip: {           //提示框组件
              trigger: 'item',
          },
          //地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
          //要显示散点图，必须填写这个配置
          geo:{
            show:true,
            map:'china',
            label:{
              color:'#000',
            },
            itemStyle:{
              areaColor:'#edeff4',
              borderColor:'#000',
            },
            emphasis:{
              label:{
                color:'#000',
              },
              itemStyle:{
                  areaColor:'#edeff4'
              }
            }
          },
          series:[
            {
              name:'myEcharts',
              coordinateSystem:'geo', //该系列使用的坐标系
              type:"map",
              map:'china',
              data:self.mapData,
              label:{
                show:false
              },
              emphasis:{
                label:{
                  show:false
                },
                itemStyle:{
                  areaColor:'#2db7f5',
                }
              },
              tooltip:{
                trigger:'item',
                show:true,
                alwaysShowContent:false,
                backgroundColor:"rgba(50,50,50,.7)",
                textStyle:{
                  color:'#c8cad0'
                },
                formatter:(data) => {
                  const currentData = _.get(data,'data',{})
                  const tipHtml = 
                  `
                   <div style="padding: 10px" class="home-echarts-tooltip-content">
                  <div style="color: #48A0FF;margin-bottom: 6px;font-size: 16px">${currentData.name}</div>
                  <div style="font-size: 14px">服务企业数：${_.get(currentData, 'value', '')}</div>
                  </div>
                  `
                  return tipHtml
                }
              }
            },{
              type:'effectScatter',
              coordinateSystem:'geo',
              data:self.scatterList,
              itemStyle: {
                color: '#5cadff',
                shadowBlur: 20,
                shadowColor: '#333'
              },
              rippleEffect: { //涟漪特效相关配置。
                brushType: 'fill', //波纹的绘制方式
                color:"#fff",
                period:4,
                scale:3,
              },
              symbolSize: function (val) {
                return 15
              },
              hoverAnimation:true, //鼠标移入放大圆
              tooltip:{
                //   提示框组件
                trigger:'item',
                show:true,
                alwaysShowContent: false,
                backgroundColor:"rgba(50,50,50,0.7)",
                textStyle: {
                    color: '#C8CAD0'
                },
                formatter: (data) => {
                  const currentData = _.get(data, 'data', {})
                  const tipHtml = `
                    <div style="padding: 10px" class="home-echarts-tooltip-content">
                    <div style="color: #48A0FF;margin-bottom: 6px;font-size: 16px">${currentData.name}</div>
                    <div style="font-size: 14px">服务企业数：${_.get(currentData, 'value[2]', '')}</div>
                    </div>
                    `
                return tipHtml
                }
              }
            }
          ]
        })
      }
    },
    mounted(){
        this.handleMapInit()
    },
    beforeDestroy(){
      if(this.mapChart){
        this.mapChart.dispose() 
        this.mapChart = null
      }
    }
}
</script>