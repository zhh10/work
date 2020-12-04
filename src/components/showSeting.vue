<template>
    <section id="showSeting" class="showSeting-section">
        <div class="showSeting-title">
            展厅中心
            <span></span>    
        </div>
        <div class="showSeting-content" @click="handleClick">
            <!-- <img src="http://storage.cepreicloud.com/qrcloud-v2/bb373569-30b9-483f-8295-780d5ae17225.jpg" alt=""> -->
            <img :src="require('@/assets/images/show.gif')" alt="">
            <div class="showSeting-content--title">{{title}}</div>
            <div class="showSeting-content--desc">{{desc}}</div>
        </div>
    </section>
</template>
<script>
import "@/styles/showSeting.scss";
export default {
    data(){
        return {
            title:'创新应用平台实际运行和应用推广展示中心',
            desc:'基于先进的全息展示技术,创建出身临其境的全息世界,为前来参观的客户提供临场极强的空间互动体验,方便客户更快速、快捷地了解五所数据中心及驱动平台的业务能力和范围'
        }
    },
    methods:{
        handleClick(){
            this.$router.push({name:'showCenter'})
        }
    }
}
</script>