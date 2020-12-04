<template>
    <Table :columns="columns"
           :data="data"
           border
           @on-row-click="handleClick"/>
</template>
<script>
export default {
  props:{
    data:{
      type:Array,
      required:true
    }
  },
  data(){
    return {
      columns:[
        {
          title:'用户',
          key:"name",
          align:"center",
        },{
          title:"典型案例",
          key:"case",
          align:"center",
        }
      ]
    }
  },
  methods:{
    handleClick(e){
        const name = e.name 
        this.$router.push(`/classicCase/${name}`)
    }
  }

}
</script>