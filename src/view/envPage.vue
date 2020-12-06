<template>
    <div class="envBuild">
        <div class="envBuild-top">
            <img src="@/assets/images/jiqiren.gif" alt="">
            <div class="envBuild-top--title">
                模型驱动的质量特性协同工程化应用验证环境
            </div>
        </div>
        <div class="envBuild-content">
            <div class="envBuild-left envBuild-card">
                <ul>
                    <li
                    :class="['envBuild-left--item',activeUser.name === item.name ? 'active' : '']" 
                    v-for="(item,index) in envList"
                    :key="index"
                    >
                        {{item.name}}
                    </li>
                </ul>
            </div>
            <div class="envBuild-right envBuild-card">
                <div class="envBuild-right--title">
                    <div class="envBuild-right--name">{{activeUser.name}}</div>
                </div>
                <div class="envBuild-right--content">
                    <div class="envBuild-right--module">
                        场景介绍
                    </div>
                    {{activeUser.introduce}}
                </div>
                <div class="envBuild-right--content">
                    <div class="envBuild-right--module">
                        建设方案
                    </div>
                    <div class="envBuild-right--image">
                        <img :src="activeUser.build" alt="">
                    </div>
                </div>
                <div class="envBuild-right--content">
                    <div class="envBuild-right--module">
                        场景展示
                    </div>
                    <div class="envBuild-right--image">
                        <img :src="activeUser.show" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "@/styles/envPage.scss"
import envList from "@/data/envList"
export default {
    watch:{
        "$route":{
            handler(){
               const id = this.$route.params.id 
               if(id){
                   const index = this.envList.findIndex(item => item.name === id)
                   this.activeUser = index > -1 ? this.envList[index] : null
               } 
            },
            immediate:true
        }
    },
    data(){
        return {
            envList,
            activeUser:null
        }
    }
}
</script>