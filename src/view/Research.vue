<template>
    <div class="Research">
        <div class="Research-top">
            <img src="@/assets/images/top.png" alt="">
            <div class="Research-top--title">主要研究成果</div>
        </div>
        <div class="Research-content">
            <Card class="Research-left">
                <ul>
                  <li @click="handleClick(item.name)" :class="['Research-left--item',activeResearch.name === item.name ? 'active' : '']" v-for="(item,index) in researchData" :key="index">{{item.name}}</li>
                </ul>
            </Card>
            <Card class="Research-right"></Card>
        </div>
    </div>
</template>
<script>
import "@/styles/Research.scss";
import researchData from "@/data/research.js"
export default {
    watch:{
      "$route":{
        handler(){
             const name = this.$route.params.name 
             if(name){
               const index = this.researchData.findIndex(item => item.name === name)
               this.activeResearch = index > -1 ? this.researchData[index] : null
             }
        },
        immediate:true
      }
    },
    data(){
      return {
        researchData,
        activeResearch:null,
      }
    },
    methods:{
      handleClick(name){
        this.$router.push(`/research/${name}`)
      }
    }
}
</script>