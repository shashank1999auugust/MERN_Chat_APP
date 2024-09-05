import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/database.js"
import userRoute from "./routes/userRoute.js"

dotenv.config({})


const app = express()

const PORT= process.env.PORT||5000
//we can write our buisness logic here , but lets seperate these logics and otherwise the file will become to big 
// app.post("/login",(req,res)=>{

// })
// app.post("/register",(req,res)=>{

// })



//middleware
app.use(express.json())

//routes
app.use("/api/v1/user",userRoute)
//http://localhost:8080/api/v1/user/register

app.listen(PORT,()=>{
    connectDB()
    console.log(`server listening at port ${PORT}`)
})