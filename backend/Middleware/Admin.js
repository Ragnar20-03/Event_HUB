const jwt = require('jsonwebtoken');
const { SECRETE } = require('../config');

function validateAdminToken (req ,res , next) 
{
   try{
    if( ! req.headers.authorization )
    {
        return res.status(501).json({
            msg : "unAuthorized Request"
        })
    }

   let  token = req.headers.authorization.split(' ')[1];
    if (! token )
    {
        return res.status(501).json({
            msg : "unAuthorized Request"
        })
    }

    let verifiedToken = jwt.verify(token , SECRETE);
    if (!verifiedToken)
    {
        return res.status(501).json({
            msg : "unAuthorized Request"
        })
    }

    if (verifiedToken.isAdmin == false)
    {
        return res.status(501).json({
            msg : "unAuthorized Request"
        })
    }
    req.username = verifiedToken.username
    next() ;
   }
   catch(error)
   {
    return res.status(501).json({
        msg : "unAuthorized Request"
    })
   }

}

module.exports = validateAdminToken