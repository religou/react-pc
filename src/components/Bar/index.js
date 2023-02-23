// 图表组件中 Bar 组件

import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

function Bar ({ title, xData, yData, style }) {
  const domRef = useRef()

  // echarts 组件
  // 基于准备好的dom，初始化echarts实例
  const chartInit = () => {
    const myChart = echarts.init(domRef.current)
    // 绘制图表
    myChart.setOption({
      title: {
        text: title
      },
      tooltip: {},
      xAxis: {
        data: xData
      },
      yAxis: {},
      series: [
        {
          name: '数量',
          type: 'bar',
          data: yData
        }
      ]
    })
  }

  useEffect(() => {
    chartInit()
  }, [])

  return (
    <div ref={domRef} style={style}></div>
  )
}

export default Bar