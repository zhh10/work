<template>
    <section id="envBuild" class="envBuild-section" >
        <div class="envBuild-title">
            环境建设
            <span></span>
        </div>
        <div class="envBuild-content">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in dataList" :key="index">
                        <div class="swiper-slide--item">
                            <img :src="item.image" alt="">
                            <div class="swiper-slide--text">
                                <div class="swiper-slide--title">{{item.title}}</div>
                                <div class="swiper-slide--desc">{{item.desc}}</div>
                                <button class="swiper-slide--btn">了解更多+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        
    </section>
</template>
<script>
import "@/styles/envBuild.scss";
// import Swiper from "swiper"
import Swiper from "swiper/swiper-bundle.min.js"
import "swiper/swiper-bundle.min.css"
export default {
    data(){
        return {
            currentIndex:1,
            SwiperOption:{
                // controls: true,
                loop:true,
                autoplay:false,    
                pagination:{
                    el:'.swiper-pagination',
                    type:'custom',
                    clickable:true,
                    renderCustom:(swiper,current,total) => {
                        console.log('current',current,total)
                        const html = 
                        `
                        <ul class="swiper-pageGroup">
                            <li name="1" class="swiper-page ${current - 1 === 0 ? 'swiper-pagination-customs-active' : ''}"></li>
                            <li name="2" class="swiper-page ${current - 1 === 1 ? 'swiper-pagination-customs-active' : ''}"></li>
                        </ul>
                        `
                        return html
                    }
                },
                // 监听分页器点击事件
                on:{
                    click: function(swiper,e){
                        const currentIndex = Number(e.target.getAttribute('name')) - 1  
                        if(currentIndex > -1){
                            this.currentIndex = currentIndex
                            swiper.slideTo(currentIndex + 1,1000,false)
                        }
                        
                    }
                }
            },
            dataList:[
                {
                    image:require('@/assets/images/data.png'),
                    title:'模型驱动的质量特性协同设计及应用验证环境',
                    desc:'形成典型场景的应用验证服务能力与展示能力,扩大软件系统的应用示范和推广作用,为工业产品全寿命周期质量工作的开展提供成套解决方案'
                },{
                    image:require('@/assets/images/data.png'),
                    title:'模型驱动的质量特性协同设计及应用验证环境',
                    desc:'形成典型场景的应用验证服务能力与展示能力,扩大软件系统的应用示范和推广作用,为工业产品全寿命周期质量工作的开展提供成套解决方案'
                }
            ],
        }
    },
    methods:{
        SwiperInit(){
            const self = this 
            this.BannerSwiper = new Swiper('.swiper-container',self.SwiperOption)
        }
    },
    mounted(){
        this.SwiperInit()
        console.log(this.BannerSwiper)
    }
}
</script>