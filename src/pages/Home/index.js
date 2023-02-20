import { NotificationOutlined, ProjectOutlined, BarChartOutlined } from '@ant-design/icons'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import * as echarts from 'echarts'
import { useRef } from 'react'

// 将 Layout 进行解构
const { Content, Sider } = Layout

// Left Side 部分的数据
// todo: 该部分数据应该来自于后台请求的数据，且该部分数据可以由系统配置的
const items2 = [['项目列表', ProjectOutlined], ['项目进度', BarChartOutlined], ['提醒', NotificationOutlined]].map((item, index) => {
  const key = String(index + 1)
  return {
    key: `sub${key}`,
    icon: React.createElement(item[1]),
    label: item[0],
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1
      return {
        key: subKey,
        label: `option${subKey}`,
      }
    }),
  }
})

const Home = () => {
  const domRef = useRef()

  // echarts 组件
  // 基于准备好的dom，初始化echarts实例
  const chartInit = () => {
    const myChart = echarts.init(domRef.current)
    // 绘制图表
    myChart.setOption({
      title: {
        text: '项目基本信息'
      },
      tooltip: {},
      xAxis: {
        data: ['筛选中', '筛选成功', '筛选失败', '已入组', '治疗结束', '研究结束']
      },
      yAxis: {},
      series: [
        {
          name: '数量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    })
  }

  useEffect(() => {
    chartInit()
  }, [])

  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Layout className='layout'>
      <Layout>
        <Sider
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
            <div ref={domRef} style={{ width: '500px', height: '500px' }}></div>
          </Content>
        </Layout>

        <Outlet />
      </Layout>
    </Layout>
  )
}

export default Home