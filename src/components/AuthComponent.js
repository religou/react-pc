// 鉴权组件
// 该部分为高阶组件，高阶组件即组件传递的参数为一个组件

// 鉴权的逻辑：
// 1. 当 LocalStorage 中存在 token，那么就可以跳转到相应的界面
// 2. 当 LocalStorage 中不存在 token，那么就可以跳转到登录界面

import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'

/**
 * 
 * @param {*} 传入的组件 
 */
function AuthComponent ({ children }) {
  const token = getToken()
  console.log(token)
  if (token) {
    return <>{children}</>
  } else {
    // 使用 router 中的 Navigate 组件，需要和 useNavigate 区分
    return <Navigate to='/login' replace />
  }
}

export {
  AuthComponent
}