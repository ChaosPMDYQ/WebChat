const userModel = require('../db/user')
const getToken = require('../modules/token').getTokenByUid
const md5 = require('md5')

module.exports = async (req, res, next) => {
    const [phone, email, password] = [req.body.phone, req.body.email, req.body.password]

    //错误请求，不包含账号信息
    if ((!phone && !email) || !password) {
        res.send('错误请求')
        return
    }

    //根据手机号或邮箱查数据库
    let queryRes
    if (phone)
        queryRes = await userModel.getUserByPhone(phone)
    else
        queryRes = await userModel.getUserByEmail(email)

    //登录验证
    if (queryRes.length == 1) {
        if(md5(password) === queryRes[0].password) {
            //设置token
            const token = getToken(queryRes[0].uid)

            res.send({
                success: true,
                message: '登录成功',
                token: token,
                userInfo: {
                    uid: queryRes[0].uid,
                    nickName: queryRes[0].nick_name
                }
            })
        }
        else {
            res.send({
                success: false,
                message: '密码错误'
            })
        }
    }
    else {
        res.send({
            success: false,
            message: '用户名错误'
        })
    }

    return
}