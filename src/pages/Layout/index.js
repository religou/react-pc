import { LogoutOutlined } from '@ant-design/icons'
import { Layout, Menu, theme, Popconfirm } from 'antd'
import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

// 导入样式文件
import './index.scss'

// 导入 store 文件
import { useStore } from '@/store'

// 将 Layout 进行解构
const { Header } = Layout

// Header 部分的数据
// todo: 该部分数据应该来自于后台请求的数据，且该部分数据可以由系统配置的
const items1 = [['/', '首页'], ['/medical', '医学模块'], ['/pv', 'PV模块'], ['/dm', '数据管理模块']
  , ['/stat', '统计编程模块'], ['/user_project', '人员/项目管理'], ['/systemconfig', '系统配置']].map((key) => ({
    key: key[0],
    label: (
      <a href={key[0]}>
        {key[1]}
      </a>
    )
  }))


// 框架整体
const MainLayout = () => {
  const { pathname } = useLocation()
  // 先从 useStore 中结构出 userStore
  const { loginStore, userStore } = useStore()
  // 在该页面加载的时候调用 useStore.getUserInfo() 的方法
  // 使用 useEffect 方法
  useEffect(() => {
    userStore.getUserInfo()
  }, [userStore])

  // 退出确认的函数
  // 首先是删除 token 和本地的缓存，然后是页面跳转至登录页面
  const navigate = useNavigate()
  const confirm = () => {
    loginStore.logout()
    navigate('/login')
  }

  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Layout className='layout'>
      <Header className="header">
        <div className="logo" />
        <Menu className='menu' theme="dark" mode="horizontal" defaultSelectedKeys={[pathname]} items={items1} />
        <div className="user-info">
          <span className="user-name">{userStore.userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" onConfirm={confirm} cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        {/* <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout> */}

        <Outlet />
      </Layout>
    </Layout>
  )
}

export default observer(MainLayout)