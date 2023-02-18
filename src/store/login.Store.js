import { http, setToken, getToken, removeToken } from '@/utils'
import { makeAutoObservable } from 'mobx'

class LoginStore {
  // 初始化参数，当本地已经存储的话，直接调用
  token = getToken() || ''

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
    // 存储返回的 token，将 token 存储在内存中
    this.token = res.data.token

    // 将 token 存储到本地
    setToken(this.token)
  }

  // 退出登录
  logout = () => {
    this.token = ''
    removeToken()
  }
}

export default LoginStore