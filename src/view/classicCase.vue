<template>
    <div class="classicCase">
        <div class="classicCase-top">
            <img src="@/assets/images/top.png" alt="">
            <div class="classicCase-top--title">典型用户应用案例</div>
        </div>
        <div class="classicCase-content">
            <Card class="classicCase-left">
                <ul> 
                    <li @click="handleClick(item.name)" :class="['classicCase-left--item',activeUser.name === item.name ? 'active' : '']" v-for="(item,index) in caseData" :key="index">{{item.name}}</li>
                </ul>
            </Card>
            <Card class="classicCase-right">
                <div class="classicCase-right--name">
                    <img class="classicCase-right--icon" src="@/assets/icon/company.png" alt="">
                    {{activeUser.name}}
                </div>
                <div v-html="activeUser.data">
                </div>
            </Card>
        </div>
    </div>
</template>
<script>
import "@/styles/classicCase.scss"
import caseData from "@/data/userList.js"
export default {
    watch:{
        "$route":{
            handler(){
                const name = this.$route.params.user
                if(name){
                    const index = this.caseData.findIndex(item => item.name === name)
                    this.activeUser = index > -1 ? this.caseData[index] : null
                }
            },
            immediate:true
            // 这是为了初次渲染
        },
    },
    data(){
        return {
            caseData,
            activeUser:null,
        }
    },
    methods:{
        handleClick(name){
            this.$router.push(`/classicCase/${name}`)
        }
    }
}
</script>