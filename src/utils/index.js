// 统一在这边导出工具
import { http } from './http'
import { setToken, getToken, removeToken } from './token'
import { history } from './history'

export { http, setToken, getToken, removeToken, history }

// 后续在其他文件中则可以直接导入 utils，如下所示：
// import http from '@/utils'