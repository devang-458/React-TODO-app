const express = require("express")
const app = express();
import { todo } from "./db";
import { createTodo, updateTodo } from "./type";

app.use(express.json())

app.post("/todos", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }
    // put it in mongoDb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos",async (req,res)=>{
    const todos = await todo.find({})
    res.json({
        todos
    })
})

app.put("/complete",async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg: " you sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000,()=>{
    console.log("server is running")
})