import axios from "axios" 
import Setting from "@/Setting"

const service = axios.create({
  baseURL:Setting.apiBaseURL,
  timeout:5000,
})

export default service