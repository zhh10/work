<template>
    <div class="classicCase">
        <div class="classicCase-top">
            <img src="@/assets/images/top.png" alt="">
            <div class="classicCase-top--title">典型用户应用案例</div>
        </div>
        <div class="classicCase-content">
            <div class="classicCase-left classicCase-card">
                <ul> 
                    <li @click="handleClick(item.name)" 
                    :class="['classicCase-left--item',activeUser.name === item.name ? 'active' : '']" 
                    v-for="(item,index) in caseData" 
                    :key="index">{{item.name}}</li>
                </ul>
            </div>
            <div class="classicCase-right classicCase-card">
                <div class="classicCase-right--title">
                    <img class="classicCase-right--icon" src="@/assets/icon/company.png" alt="">
                    {{activeUser.name}}
                </div>
                <div class="classicCase-right--content">
                    {{activeUser.case}}
                </div>
                <div class="classicCase-right--content">
                    <div class="classicCase-right--module">
                        应用背景
                    </div>
                    <div v-html="activeUser.a"></div>
                </div>
                <div class="classicCase-right--content">
                    <div class="classicCase-right--module">
                        工作内容
                    </div>
                    <div v-for="(item,index) in activeUser.b" :key="index">
                        <div v-if="item.type === 'text'">
                            {{item.content}}
                        </div>
                        <img v-if="item.type === 'image'" :src="item.content" alt="">
                    </div>
                </div>
                <div class="classicCase-right--content">
                    <div class="classicCase-right--module">
                        应用效果
                    </div>
                    <div v-html="activeUser.c"></div>
                </div>
            </div>
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