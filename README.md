# Getting Started with Learning React

This project was created for learning React

## SCSS 的使用

1. react 项目中自带 scss 的配置，使用之前需要添加包，npm 命令为 npm add sass -D
   注意：这里使用的是 sass，不是 scss；由于 scss 是在开发环境下生效，所以使用 -D

2. 包添加完成之后，创建 index.scss，在 index.scss 中添加样式初始化的内容

3. 最后在 index.js 中导入 index.scss，使得 index.scss 生效

## react-route-dom 的使用

1. 使用 react-route-dom 是为了形成页面与导航之间尽心关联

2. 使用之前，需要添加相应的包，npm 命令为 npm add react-route-dom -s

3. 首先创建 Layout、Login 的组件，每个页面使用一个文件夹，并作为一个独立的组件，遵循函数组件的样式

4. 在 App.js 中使用 BrowseRouter 包裹 App 组件，并在其中添加 Routes，Routes 中添加 Route，并
   使用 Route 来关联 path 和 element，而 element 调用的内容则是上面创建的两个组件

## antd 的使用

1. 使用 antd 是为了更方便地使用 UI 组件

2. 引用之前，需要添加相应的包，npm 命令为 npm add antd -v

3. 在 index.js 中使用 `import 'antd/dist/reset.css'` 引入 antd 的 css

4. 然后在相应的界面中使用组件

## craco 的使用

1. 使用 craco 是为了更方便地进行全局配置，包括：别名的配置

2. 引用之前，需要添加相应的包，npm 命令为 `npm add @craco\craco -D`

3. 然后创建 `craco.config.js` 文件，并在其中添加相应的内容，并导出该模块

4. 最后在 package.json 中用 craco 的命令接管 react 之前的命令

注意：
在 package.json 文件中不要使用注释内容
上面修改完成之后，需要重新启动项目

## jsconfig.json

1. 该文件是 vscode 的配置文件

2. 创建该文件的目的是在输入 @ 之后会显示文件夹路径

3. 在 jsconfig.json 文件中添加相应的内容

## 配置登录界面

1. 上网搜索一张登录界面的背景图片

2. 创建 index.scss 用来控制 Login 界面的样式，在该文件中 Login 设置背景图片，width 和 height
   设置为 100%，并设置背景图片

3. 为 login-container 设置显示字体，并调整样式，自己瞎调，自己觉得怎么好看怎么来

## 登录界面表单校验

1. 在 Form.item 中添加 rules 属性，该属性的内容为对象

2. 触发校验的方式为 validateTrigger，需要在 Form 层面先指定，然后在 Form.Item 层面上指定才会
   生效

## 登录界面事件处理

1. 登录界面并没有按钮关联函数或者是事件，而是指定 button 的 htmlType 为 submit，那么点击时会自
   动认为该按钮需要绑定的函数

2. 绑定的函数需要在函数组件中使用 Function 定义好，并在 Form 层面关联定义好的函数，例如：onFinish
   为提交成功的函数，而 onFinishFailed 则为提交失败的函数

## 使用 mobx 存储并编写登录逻辑

1. 使用 mobx 先添加使用的 package，npm 命令为 `npm add mobx mobx-react-lite -S`

2. 在 store 文件夹中，创建 index.js 和 login.Store.js 文件

3. 在 login.Store.js 文件中定义 LoginStore 类，并初始化变量、创建构造器、更新逻辑

4. 在 index.js 文件中统一管理 store/xxx.Store.js

5. 最后在 Login/index.js 中调用 useStore 来引用逻辑方法

## token 的持久化

1. 在 util 中建立 token.js 工具，并在其中编写三个函数 (setToken、getToken、removeToken)

2. 然后在 login.Store.js 中调用 getToken、setToken

## 路由鉴权

1. 由于路由鉴权的原理是将需要验证的组件包裹在公共组件中

2. 首先在 components 文件夹中创建 AuthComponent 文件

3. 然后在 App.js 中使用 AuthComponent 包裹 Layout 组件

4. 当访问 Layout 路由时，会先到 AuthComponent 组件中确认当前是否存在 Token

## Layout 设定

1. 修改 pages/Layout/index.js，在其中添加 AntD 的 Layout 组件

2. 同时修改 pages/Layout/index.scss，使其高度可以占满整个屏幕，然后更新 Header 和右侧 userinfo

## 二级路由配置

1. 在 pages 文件夹下添加 DM、Home、Medical、PV、Stat、SystemConfig、User 页面

2. 在添加的这些文件夹中每一个 index.js 都 export default

3. 然后在 app.js 的 AuthComponent 中引入这些组件，这些组件是 MainLayout 的二级组件
   所以这些组件也是需要路由鉴权之后，才可以访问的

4. 在 Layout/index.js 中 MainLayout 中 Content 标签中使用 <Outlet /> 来设置这些
   二级路由的出口

## 二级路由跳转配置

1. 在二级路由配置完成之后，修改 Layout/index.js 中的 items1

2. 由原来的一维数组修改为二维数组，二维数组中的第一个值为跳转的 link，第二个值为显示的 Label

3. 修改 label 中的内容，由 ${key} 修改为
   (
   <a href={key[0]}>
   {key[1]}
   </a>
   )
   这样就可以实现点击文字跳转页面了

## 路由反向高亮

1. 配置完成二级路由之后，在 Layout/index.js 文件中使用 raact-router-dom 中 useLocation
   获取当前的路由

2. 将路由结构出来，并设置为 <Menu /> 组件中 defaultSelectedKeys 属性值

## 用户信息

1. 在 store 文件夹中创建 user.Store.js 文件，然后在 index.js 中引用该文件

2. 然后在 Layout/index.js 文件中使用 useEffect Hook，在该 Hook 中引用
   getUserInfo 的方法
   注意：使用 observer 来包裹 MainLayout 组件，这样才可以关联数据

3. 最后修改 user-name 标签中的数据，使用 {userStore.userInfo.name} 来显示

## 退出

1. 首先在 Layout/index.js 中修改 Popconfirm 的 onConfirm 属性

2. 编写 confirm 函数，在函数中调用 loginStore 中的 logout 函数

3. 编写 loginStore 中 logout 函数

4. 并修改 Home 页面，再添加相应的一些元素与内容

## token 失效时自动跳转至登录界面

1. 由于页面的跳转在组件之外是无法使用，所以按照官方 github 中的建议，使用 history 包

2. 使用命令 `npm add history -s` 安装，并在 utils 文件夹中创建 history.js 文件

3. 在 history.js 中使用 createBrowserHistory 创建实例，并导出给后面使用

4. 然后在 App.js 中导入 unstable_HistoryRouter，并用这个包裹整个 App.js 中的 div

5. 最后在 http.js 添加响应拦截器部分，编写业务逻辑，使用 history.push

## 添加 echarts 组件

1. 使用 `npm add echars -s` 安装 echarts

2. 然后在 Home/index.js 文件中，使用 echarts.init 创建函数

3. 使用 useRef 来创建 dom 节点

4. 使用 useEffect 在该组件初始化的时候调用 echartInit 函数
   注意：echarts 所在的 div 组件需要设置 width 和 height
