<template>
    <section id="solution" class="solution-section">
        <div class="solution-title">
            数据模型 双擎驱动
            <span></span>
        </div>
        <div class="solution-content">
            <Row type="flex" :gutter="25" justify="space-between">
                <Col v-for="(item,index) in solutionList" :class="['solution-item',item.active ? 'active' : '']" :key="item.name" @mouseenter.native="mouseEnter(index)" @mouseleave.native="mouseLeave">
                    <img :src="item.image" alt="">
                    <div class="solution-item--title">{{item.name}}</div>
                    <div class="solution-item--desc">{{item.desc}}</div>
                </Col>
            </Row>
            <div class="solution-button">
                <div class="solution-button--more" @click="handleClick">相关成果</div>
            </div>
        </div>
    </section>
</template>
<script>
import "@/styles/solution.scss";
export default {
    data(){
        return {
            solutionList:[
                {
                    active:false,
                    image:require('@/assets/images/model.png'),
                    name:'模型引擎',
                    desc:'模型驱动：应用模型驱动的六性系统工程方法,基于装备设计环境及模型,实现六性建模分析自动化,确保模型数据一致性'
                },
                {
                    active:false,
                    image:require('@/assets/images/data.png'),
                    name:'数据引擎',
                    desc:'数据驱动: 通过装备寿命周期六性数据及知识积累与深度挖掘,实现数据驱动的六性应用智能化'
                }
            ]
        }   
    },
    methods:{
        mouseEnter(index){
            this.solutionList.map((item,i) => {
                console.log(i)
                return item.active = i === index
            })
        },
        mouseLeave(){
            this.solutionList.map(item => {
                return item.active = false
            })
        },
        handleClick(){
            const name = "工业机理模型"
            this.$router.push(`/Research/${name}`)
        }
    }
}
</script>