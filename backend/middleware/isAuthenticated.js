import jwt from "jsonwebtoken"


const isAuthenticated=async(req,res,next)=>{
try {
     const token = req.cookies.token
     if(!token){
        return res.status(401).json({
            message:"User not authenticated"
        })
     }
     const decode=await jwt.verify(token, process.env.JWT_SECRET_KEY)
    //  console.log(decode)
     if(!decode){
        return res.status(401).json({
            message:"Invalid token"
        })
     }
     //we will get tokendata in decode which we were sending during login controller check we were setting userId in login controller
     req.id=decode.userId
  
     next()
} catch (error) {
    console.log(error)
}
}

export default isAuthenticated