import { useState } from "react";
import axios from "axios";

export function Create({ refreshTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleAddTodo = async () => {
    try {
      await axios.post("http://localhost:3000/todos", {
        title: title,
        description: description,
        completed: false,
      });

      // Clear input fields
      setTitle("");
      setDescription("");

      // Call the refreshTodos function passed as a pro

      alert("Todo created");
    } catch (error) {
      console.error("Error creating todo", error);
    }
  };

  return (
    <div className="">
      <input
        onChange={(e) => {
          const value = e.target.value;
          setTitle(value);
        }}
        value={title} 
        className="border-black border rounded px-2 py-1 mb-2 border-slate-300 w-full"
        type="text"
        placeholder="title"
      ></input>
      <br></br>
      <input
        onChange={(e) => {
          const value = e.target.value;
          setDescription(value);
        }}
        value={description} 
        className="border-black border rounded px-2 py-1 mb-2 border-slate-300 w-full"
        type="text"
        placeholder="description"
      ></input>
      <br></br>
      <button
        className="bg-slate-300 rounded-lg border-black border p-1 font-semibold"
        onClick={handleAddTodo}
      >
        Add a todo
      </button>
    </div>
  );
}
