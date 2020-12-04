<template>
    <div>
        <!-- 头部照片 -->
        <section class="top-section">
            <img src="@/assets/images/top.png" alt="">
            <div class="top-box">
                <div class="top-box--title">模型与数据驱动的装备质量特性协同设计平台建设与产业化</div>
                <p class="top-box--desc">
                    以丰富的基础数据为支撑，建立集质量特性协同设计工具和管理于一体的质量特性协同工作环境，有效地规范工业产品质量特性工作程序和机制,实现产品质量特性指标的系统性和一致性，全面提高产品质量特性综合设计水平，实现产品质量和特性指标与产品质量指标的同步;积累质量特性设计分析数据和经验,进而提高设备质量特性工作的效率和准确性,全面提升产品质量特性水平,实现产品质量特性总目标。
                </p>
            </div>
        </section>
        <!-- hash盒子 fixed -->
        <section class="hash-section">
            <ul class="hash-box">
                <li v-for="(item,index) in hashBox" :key="index"
                :class="['hash-box--item',item.active ? 'active' : '']"
                @click="hashItemClick(index)">
                    <!-- <a :href = "`#${item.hashId}`"><span>{{item.name}}</span></a> -->
                    <span @click = "ScrollTo(item.hashId)">{{item.name}}</span>
                    
                </li>
            </ul>
        </section>
        <!-- 解决方案 -->
        <solution />
        <!-- 软件模块 -->
        <soft-module />
        <!-- 环境设置 -->
        <env-build />
        <!-- 展厅设置 -->
        <show-seting />
        <!-- 典型用户 -->
        <classic-user />
    </div>
</template>
<script>
import "@/styles/home.scss"
import solution from "@/components/solution"
import softModule from "@/components/softModule"
import envBuild from "@/components/envBuild"
import showSeting from "@/components/showSeting"
import classicUser from "@/components/classicUser"

export default {
    components:{
        solution,
        softModule,
        envBuild,
        showSeting,
        classicUser
    },
    data(){
        return {
            hashBox:[
                {name:'解决方案',hashId:'solution',active:true},
                {name:'软件模块',hashId:'softModule',active:false},
                {name:'环境建设',hashId:'envBuild',active:false},
                {name:'展厅中心',hashId:'showSeting',active:false},
                {name:'典型用户',hashId:'classicUser',active:false},
            ],
            lock:true
        }
    },
    methods:{
        hashItemClick(index){
            this.hashBox.map((item,i) => {
                return item.active = i === index
            })
        },
        handleScroll(){
            let top = document.documentElement.scrollTop || document.body.scrollTop;
            let dom = document.getElementsByClassName('hash-section')[0]
            dom.classList = top >= 400 ? 'hash-section fixed' : 'hash-section';
        },
        ScrollTo(id){
            
            let dom = document.getElementById(id)
            let top = dom.offsetTop
            if(this.lock){
                top -= 70
            }
            if(top >= 470){
                document.getElementsByClassName('hash-section')[0].classList = 'hash-section fixed'
            }
            setTimeout(() => {
                let dom = document.getElementsByClassName('hash-section')[0]
                if(this.activeIndex > 1)
                this.lock = false;
                window.scrollTo({ 
                    top,
                    behavior: "smooth" 
                    });
            },0)
        }
    },
    mounted(){
        // this.handleScroll()
        document.addEventListener('scroll',this.handleScroll)
    },
    destroyed(){
        document.removeEventListener('scroll',this.handleScroll)
    }
}
</script>   