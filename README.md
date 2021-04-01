# webChat

## 项目功能
- [ ] 登录
- [ ] 注册
- [ ] 找回密码
- [ ] 个人信息
- [ ] 自定义头像

<br>

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

<br>

## 本地测试

### 运行后端node服务器
```powershell
    cd node
    npm i
    npm start
```
### 前端vue预览
```powershell
    cd vue
    npm i
    npm run serve
```
<br>

## 项目部署

我这里用的是前后端分离部署，服务器系统是Ubuntu

### 前端vue打包
```powershell
    cd vue
    npm i
    npm run build
```
完成后在vue目录下会多一个dist文件夹，里面放的是静态网页文件

### 安装并配置Nginx服务器