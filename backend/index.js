const express = require("express")
const app = express();
import { createTodo, updateTodo } from "./type";

app.use(express.json())

app.post("/todos",(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }
    // put it in mongoDb
})

app.get("/todos",(req,res)=>{
})

app.put("/complete",(req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg: " you sent the wrong inputs"
        })
        return;
    }
})

app.listen(3000,()=>{
    console.log("server is running")
})