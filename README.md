# webChat

## 简介

### [线上预览](http://106.15.200.185/)

## 项目功能
- [x] 登录
- [x] 注册
- [ ] 找回密码
- [ ] 个人信息
- [ ] 自定义头像

<br>

- [x] 搜索联系人
- [ ] 添加好友
- [ ] 删除好友
- [ ] 私聊
- [ ] 消息提示
- [ ] 聊天表情包
- [ ] 聊天发送图片

<br>  

- [ ] 创建聊天群
- [ ] 加群、退群
- [ ] 群备注
- [ ] 群聊

## 技术栈
前端：Vue2，vuex, vue-router, element-ui，axios
<br>
后端：Node, Express, Mysql
<br>

## 本地测试

### 配置数据库
安装并配置好mysql，创建数据库并导入 /node/mysql 文件夹下的 .sql文件
<br>
修改 /node/congif.js 文件，使之符合你的数据库
<br>
可以参考菜鸟上的node教程写一个js来测试数据库能否正常连接

### 运行后端node服务器
```
    cd node
    npm i
    npm start
```
运行之后可以通过访问 http://localhost:3000 来测试

### 前端vue预览
```
    cd vue
    npm i
    npm run serve
```
<br>

## 项目部署

我这里用的是前后端分离部署，服务器系统是Ubuntu

### 前端vue打包
```
    cd vue
    npm i
    npm run build
```
完成后在vue目录下会多一个dist文件夹，里面放的是静态网页文件

### 安装并配置Nginx服务器
具体配置可以参考 [Nginx配置](Nginx/webChat.conf)
<br>
将刚刚生成的静态文件上传至服务器的相应目录

### 启动后端Node服务器
直接使用 npm start 命令虽然也能开启后端服务，但需要保持终端开启
<br>
使用 pm2 进行管理更加方便
```
npm i pm2 -g
pm2 start ./node/bin/www -watch
```