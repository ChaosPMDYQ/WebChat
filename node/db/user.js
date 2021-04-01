const query = require('./query')

module.exports = {

    //注册用户
    addUser(account) {
        const sql = 'insert into user(nick_name, phone, email, password) values(?, ?, ?, ?);'
        return query(sql, [account.nickName, account.phone, account.email, account.password])
    },

    //通过ID获取用户信息
    getUserByUid(uid) {
        const sql = 'select * from user where uid = ?;'
        return query(sql, [uid])
    },

    getUserByPhone(phone) {
        const sql = 'select * from user where phone = ?;'
        return query(sql, [phone])
    },

    getUserByEmail(email) {
        const sql = 'select * from user where email = ?;'
        return query(sql, [email])
    }
}