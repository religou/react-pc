import { Form, Input, Checkbox, Button } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

import './index.scss'

function Login () {

  // 登录成功
  function onFinish (values) {
    console.log(values)
    // todo: 登录逻辑
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
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入登录邮箱!',
              },
              {
                pattern: '^[a-zA-Z]*@hengrui.com$',
                message: '请输入正确格式邮箱',
                validateTrigger: 'onBlur'
              }
            ]}
          >
            <Input size="large" placeholder="邮箱" prefix={<UserOutlined />} allowClear />
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