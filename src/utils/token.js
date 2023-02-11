// 封装 localStorage 存储 token 的方法

const key = 'pc-key'

// 存储 token
const setToken = (token) => {
  return window.localStorage.setItem(key, token)
}

// 取 token
const getToken = () => {
  return window.localStorage.getItem(key)
}

// 删除 token
const removeToken = () => {
  return window.localStorage.removeItem(key)
}

// 导出
export {
  setToken,
  getToken,
  removeToken
}