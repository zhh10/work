import request from "@/plugins/request" 
import Setting from "@/Setting" 

// 获取列表
export function getApp(){
  return request({
    url:`${Setting.api_prefix.store}api/product/search`,
    method:'get',
    params:{
      page:1,
      pageSize:9999,
    }
  })
}