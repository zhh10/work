<template>
    <div>软件</div>
</template>
<script>
import {getApp} from "@/api/getApp"
export default {
    data(){
      return {
        appList: [],
      }
    },
    methods:{
      async getApp(){
        const data = await getApp()
        console.log(data)
      }
    },
    mounted(){
      this.getApp()
    }
}
</script>