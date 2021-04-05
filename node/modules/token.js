const jwt = require('jsonwebtoken')
const jwtSrcret = require('../config').jwtSrcret

module.exports = {

    /**
     * 根据UID获取token
     * @param uid 用户UID
     * @param time 可选，token超时时间，默认'24h'
     * @return token
     */
    getTokenByUid(uid, time = '24h') {
        const payload = {
            id: uid
        }
        const token = jwt.sign(payload, jwtSrcret, {
            expiresIn: time
        })

        return token
    },

    /**
     * 验证token是否有效
     * @param token 需要验证的token
     * @return boolean 验证结果，为真时有效
     */
    verifyToken(token) {
        try {
            jwt.verify(token, jwtSrcret)
            return true
        }
        catch {
            return false
        }
    }
}