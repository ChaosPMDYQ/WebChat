const userModel = require('../db/user')
const jwt = require('jsonwebtoken')
const jwtSrcret = require('../config').jwtSrcret
const md5 = require('md5')

module.exports = async (req, res, next) => {
    const type = req.body.type

    //检查手机号是否被注册
    if(type === 'checkPhone') {
        const queryRes = await userModel.getUserByPhone(req.body.phone)
        checkSend(queryRes, res)
    }

    //检查邮箱是否被注册
    else if(type === 'checkEmail') {
        const queryRes = await userModel.getUserByEmail(req.body.email)
        checkSend(queryRes, res)
    }

    //正常注册
    else if(type === 'register') {
        const account = {
            nickName: req.body.account.nickName,
            phone: req.body.account.phone,
            email: req.body.account.email,
            password: md5(req.body.account.password)
        }

        //后端检查
        const queryPhone = await userModel.getUserByPhone(account.phone)
        const queryEmail = await userModel.getUserByEmail(account.email)

        if(queryPhone.length == 0 && queryEmail.length == 0) {
            //注册账号
            await userModel.addUser(account)

            //获取刚刚注册的账号信息，顺便登录
            const queryRes = await userModel.getUserByPhone(account.phone)
            const payload = {
                id: queryRes[0].uid
            }
            const token = jwt.sign(payload, jwtSrcret, {
                expiresIn: '6h'
            })

            res.send({
                success: true,
                message: '注册成功',
                token: token,
                userInfo: {
                    uid: queryRes[0].uid,
                    nickName: queryRes[0].nick_name
                }
            })
        }
        else {
            res.send({
                success: false
            })
        }
    }

    else {
        res.send('错误请求')
    }

    return
}

function checkSend(queryRes, res) {
    if(queryRes.length == 0) {
        res.send({
            success: true
        })
    }
    else {
        res.send({
            success: false
        })
    }
}