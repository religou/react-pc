import { http } from '@/utils'
import { makeAutoObservable } from 'mobx'

class LoginStore {
  // 初始化参数
  token = ''

  // 定义构造器，将当前数据做成响应式
  constructor() {
    makeAutoObservable(this)
  }

  // 逻辑部分
  getToken = async (value) => {
    console.log(value)
    const { mobile, code } = value
    // 请求后台接口
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile, code
    })
    // 存储返回的 token
    this.token = res.data.token
  }
}

export default LoginStore