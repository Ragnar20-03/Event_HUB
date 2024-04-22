const jwt = require('jsonwebtoken');
const { SECRETE } = require('../config');

function validateToken (req ,res , next) 
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
    
    next() ;
   }
   catch(error)
   {
    return res.status(501).json({
        msg : "unAuthorized Request"
    })
   }

}

module.exports = validateToken