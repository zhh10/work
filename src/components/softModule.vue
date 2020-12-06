<template>
  <section id="softModule" class="softModule-section">
      <div class="softModule-title">
        软件模块
        <span></span>
      </div>
      <div class="softModule-content">
          <Row type="flex" :gutter="80" justify="space-around">
              <Col  span="8" v-for="(item,index) in softList" :key="index">
                <div :class="['softModule-item',activeIndex === index ? 'active':'']" 
                @mouseenter="mouseEnter(index)"
                @mouseleave="mouseLeave">
                    <img class="softModule-item--bg" src="https://dfs.cepreicloud.com/download/2018-11-21/20181121095057_464.jpg" alt="">
                    <img class="softModule-item--icon" :src="item.icon" alt="">
                    <div class="softModule-item--name">{{item.name}}</div>
                    <div class="softModule-item--desc">{{item.desc}}</div>
                    <div class="softModule-item--btn">打开软件</div>
                </div>
              </Col>
          </Row>
          <div class="softModule-button">
                <div class="softModule-button--more" @click="handleMore()">查看更多</div>
          </div>
      </div>
    </section>  
</template>
<script>
import "@/styles/softModule.scss";
export default {
  data(){
    return {
        activeIndex:null,
        softList:[
          {
            icon:require('@/assets/images/ind04.png'),
            name:'协同设计任务与信息综合管理',
            desc:'产品全寿命周期质量管理',
          },
          {
            icon:require('@/assets/images/ind04.png'),
            name:'形式化质量特性综合建模',
            desc:'产品全寿命周期质量管理',
          },
          {
            icon:require('@/assets/images/ind04.png'),
            name:'基于模型的FMECA',
            desc:'产品全寿命周期质量管理',
          },
          {
            icon:require('@/assets/images/ind04.png'),
            name:'基于模型的FTA',
            desc:'产品全寿命周期质量管理',
          },
          {
            icon:require('@/assets/images/ind04.png'),
            name:'基于模型的预测性分析',
            desc:'产品全寿命周期质量管理',
          },
          {
            icon:require('@/assets/images/ind04.png'),
            name:'结构可靠性分析',
            desc:'产品全寿命周期质量管理',
          },
          {
            icon:require('@/assets/images/ind04.png'),
            name:'可靠性预计',
            desc:'产品全寿命周期质量管理',
          },
          {
            icon:require('@/assets/images/ind04.png'),
            name:'质量特性知识图谱管理',
            desc:'产品全寿命周期质量管理',
          },
          {
            icon:require('@/assets/images/ind04.png'),
            name:'基于故障物理的可靠性仿真',
            desc:'产品全寿命周期质量管理',
          },
          {
            icon:require('@/assets/images/ind04.png'),
            name:'系统故障预测',
            desc:'产品全寿命周期质量管理',
          },
          {
            icon:require('@/assets/images/ind04.png'),
            name:'设计协同系统',
            desc:'产品全寿命周期质量管理',
          },
          {
            icon:require('@/assets/images/ind04.png'),
            name:'系统特性要求仿真权衡分析',
            desc:'产品全寿命周期质量管理',
          },
        ]
    }
  },
  methods:{
    mouseEnter(index){
      this.activeIndex = index
    },
    mouseLeave(){
      this.activeIndex = null
    },
    handleMore(){
      const name = '可靠性预计'
      this.$router.push(`/software/${name}`)
    }
  }
}
</script>