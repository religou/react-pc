import { LaptopOutlined, NotificationOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { Breadcrumb, Layout, Menu, theme, Popconfirm } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'

// 导入样式文件
import './index.scss'

// 将 Layout 进行解构
const { Header, Content, Sider } = Layout

// Header 部分的数据
// todo: 该部分数据应该来自于后台请求的数据，且该部分数据可以由系统配置的
const items1 = [['/', '首页'], ['/medical', '医学模块'], ['/pv', 'PV模块'], ['/dm', '数据管理模块']
  , ['/stat', '统计编程模块'], ['/user', '人员管理'], ['/systemconfig', '系统配置']].map((key) => ({
    key: key[1],
    label: (
      <a href={key[0]}>
        {key[1]}
      </a>
    )
  }))

// Left Side 部分的数据
// todo: 该部分数据应该来自于后台请求的数据，且该部分数据可以由系统配置的
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1)
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1
      return {
        key: subKey,
        label: `option${subKey}`,
      }
    }),
  }
})

// 框架整体
const MainLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Layout className='layout'>
      <Header className="header">
        <div className="logo" />
        <Menu className='menu' theme="dark" mode="horizontal" defaultSelectedKeys={['首页']} items={items1} />
        <div className="user-info">
          <span className="user-name">user.name</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
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

export default MainLayout