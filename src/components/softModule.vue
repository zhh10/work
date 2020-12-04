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
            name:'可靠性预计',
            desc:'产品全寿命周期质量管理',
          },
          {
            icon:require('@/assets/images/ind04.png'),
            name:'可靠性预计',
            desc:'产品全寿命周期质量管理',
          },
          {
            icon:require('@/assets/images/ind04.png'),
            name:'可靠性预计',
            desc:'产品全寿命周期质量管理',
          },
          {
            icon:require('@/assets/images/ind04.png'),
            name:'可靠性预计',
            desc:'产品全寿命周期质量管理',
          },
          {
            icon:require('@/assets/images/ind04.png'),
            name:'可靠性预计',
            desc:'产品全寿命周期质量管理',
          },
          {
            icon:require('@/assets/images/ind04.png'),
            name:'可靠性预计',
            desc:'产品全寿命周期质量管理',
          },
          {
            icon:require('@/assets/images/ind04.png'),
            name:'可靠性预计',
            desc:'产品全寿命周期质量管理',
          },
          {
            icon:require('@/assets/images/ind04.png'),
            name:'可靠性预计',
            desc:'产品全寿命周期质量管理',
          },
          {
            icon:require('@/assets/images/ind04.png'),
            name:'可靠性预计',
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
      this.$router.push(`/software`)
    }
  }
}
</script>