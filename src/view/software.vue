<template>
    <div class="software">
        <div class="software-top">
            <img src="@/assets/images/jiqiren.gif" alt="">
            <div class="software-top--title">模型与数据驱动的质量特性协同设计软件平台</div>
            <div class="software-top--btn">
                实施指南
            </div>
        </div>
        <div class="software-content">
            <div class="software-left software-card">
                <ul>
                  <li
                  :class="['software-left--item',activeUser.name === item.name ? 'active' : '']" 
                  v-for="(item,index) in leftList" 
                  :key="index">{{item.name}}</li>
                </ul>
            </div>
            <div class="software-right software-card">
                <div class="software-right--title">
                    <div class="software-right--name">{{activeUser.name}}</div>
                    <div class="software-right--btn">打开软件</div>
                </div>
                <div class="software-right--content">
                  <div class="software-right--module">
                      功能介绍
                  </div>
                  {{activeUser.introduce}}
                </div>
                <div class="software-right--content">
                  <div class="software-right--module">
                    技术指标
                  </div>
                  <div>
                    <ul>
                      <li 
                      v-for="(item,index) in activeUser.technical"
                      :key="index">
                        {{item}}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="software-right--content">
                  <div class="software-right--module">
                    软件展示
                  </div>
                  <div class="software-right--image">
                    <img :src="activeUser.image" alt="">
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "@/styles/software.scss"
import leftList from "@/data/softList"
export default {
    watch:{
      "$route":{
        handler(){
          const id = this.$route.params.id 
          if(id){
            const index = this.leftList.findIndex(item => item.name === id)
            this.activeUser = index > -1 ? this.leftList[index] : null
          }
        },
        immediate:true
      }
    },
    data(){
      return {
        leftList,
        activeUser:null,
      }
    }
}
</script>