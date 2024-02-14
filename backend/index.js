//index.js

const {todo} = require("./db")
const {createTodo, updateTodo} = require("./type")
const cors = require("cors")
const express = require("express")
const app = express();

app.use(express.json())
app.use(cors({}))

app.post("/todos", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs"
        });
        return;
    }

    // Explicitly set completed to false
    const newTodo = {
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    };

    try {
        // Use create method to insert newTodo into the database
        const createdTodo = await todo.create(newTodo);

        res.json({
            msg: "Todo created",
            todo: createdTodo
        });
    } catch (error) {
        console.error("Error creating todo:", error);
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
});


app.get("/todos",async (req,res)=>{
    const todos = await todo.find({})
    res.json({
        todos
    })
})

app.put("/complete/:id",async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg: " you sent the wrong inputs"
        })
        return;
    }
    await todo.updateOne({
        _id: req.params.id
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