const dbConfig = {
    host: 'localhost',
    port: '3306',
    database: 'web_chat',
    user: 'root',
    password: '123456'    
}

const jwtSrcret = 'web-chat-YQ'

module.exports = {
    dbConfig,
    jwtSrcret
}