import { Form, Input, Checkbox, Button, message } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import './index.scss'

import { useStore } from '@/store'

function Login () {
  const { loginStore } = useStore()
  const navigate = useNavigate()

  // 登录成功
  async function onFinish (values) {
    console.log(values)
    try {
      // 登录逻辑
      await loginStore.getToken({
        mobile: values.username,
        code: values.password
      })

      // 登录成功之后，界面跳转到首页
      navigate('/')

      // 界面提示'登录成功'
      message.success('登录成功')
    } catch (e) {
      message.error(e.response?.data?.message || '登录失败')
    }
  }

  // 登录失败
  function onFinishFailed (values) {
    console.log(values)
    // todo: 登录失败
  }

  return (
    <div className="login">
      <div className='login-container'>
        <div className='header'>临床数据平台</div>
        <Form className='container'
          validateTrigger={['onBlur', 'onChange', '']}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            mobile: '13911111111',
            code: '246810',
            remember: true
          }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入手机号!',
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号码格式不对',
                validateTrigger: 'onBlur'
              }
            ]}
          >
            <Input size="large" placeholder="手机号" prefix={<UserOutlined />} allowClear />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入正确的密码!',
              },
              {
                len: 6,
                message: '请输入正确格式密码',
                validateTrigger: 'onBlur'
              }
            ]}
          >
            <Input.Password size="large" placeholder="密码" prefix={<LockOutlined />} allowClear />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
          >
            <Checkbox className='login-checkbox-label'>我已阅读并同意「用户协议」和「隐私条款」</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block className='submit'>
              登录
            </Button>
          </Form.Item>
        </Form>

      </div>
    </div>
  )
}

export default Login