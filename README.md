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
