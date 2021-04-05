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
    },

    /**
     * 通过UID或者昵称获取用户信息摘要
     * UID使用精确查找，昵称使用模糊查找
     * 用户信息仅包括uid，昵称及头像
     * @param str UID或昵称
     * @return Promise 配合await获取查询结果
     */
    getUserBriefByUidOrName(str) {
        const sql = 'select uid, nick_name as nickName, icon from user where uid = ? or nick_name like ?;'
        return query(sql, [str, '%' + str + '%'])
    }
}