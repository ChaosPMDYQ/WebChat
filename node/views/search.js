const userModel = require('../db/user')
const verify = require('../modules/token').verifyToken

module.exports = async(req, res, next) => {
    let token = req.get('authorization')
    if(!verify(token)) {
        res.status('401').send('Error: 401')
    }
    
    if(req.body.searchInput) {
        let queryRes = await userModel.getUserBriefByUidOrName(req.body.searchInput)
        res.send(queryRes)
    }
    else {
        res.send('')
    }
    
}