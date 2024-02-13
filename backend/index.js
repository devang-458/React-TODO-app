const express = require("express")
const app = express();


app.use(express.json())



app.post("/todos",(req,res)=>{

})

app.get("/todos",(req,res)=>{
 
})

app.put("/complete",(req,res)=>{

})

app.listen(3000,()=>{
    console.log("server is running")
})