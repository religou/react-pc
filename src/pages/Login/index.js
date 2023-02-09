import { Form, Input, Checkbox, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import './index.scss'

function Login () {
  return (
    <div className="login">
      <div className='login-container'>
        <div className='header'>临床数据平台</div>
        <Form className='container'>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入登录邮箱!',
              },
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
            ]}
          >
            <Input.Password size="large" placeholder="密码" prefix={<UserOutlined />} allowClear />
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