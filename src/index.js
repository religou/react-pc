import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 导入 antd 样式文件
import 'antd/dist/reset.css'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
