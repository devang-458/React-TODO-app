import { useEffect, useState } from "react";
import axios from "axios"

export function Todos({ todos, refreshTodos }) {
    const [updatedTodos, setUpdatedTodos] = useState([]);
  
    const handleMarkAsDone = async (todoId) => {
        try {
            // Optimistically update the state
            setUpdatedTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo._id === todoId ? { ...todo, completed: true } : todo
                )
            );
    
            // Make the network request
            await axios.put(`http://localhost:3000/complete/${todoId}`, {});
            console.log("Todo marked as completed");
        } catch (error) {
            // Rollback the state on error
            setUpdatedTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo._id === todoId ? { ...todo, completed: false } : todo
                )
            );
            console.error("Error marking as done", error);
        }
    };
    
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:3000/todos");
          const json = await response.data;
          setUpdatedTodos(json.todos);
        } catch (error) {
          console.log("Error fetching data", error);
        }
      };
      fetchData();
    }, [todos]); // Trigger useEffect when todos prop changes
  
    return (
      <div className="flex flex-wrap justify-center">
        {updatedTodos.map(function (todo, index) {
          return (
            <div key={index} className="max-w-sm w-full p-4">
              <div className="bg-white border border-black rounded-lg overflow-hidden">
                <div className="bg-slate-300 p-2 rounded-t-md">
                  <h1 className="text-lg font-bold text-black">{todo.title}</h1>
                  <h2 className="text-gray-700">{todo.description}</h2>
                  <button
                    className={`${
                      todo.completed ? "bg-green-500" : "bg-blue-500 hover:bg-blue-700"
                    } text-white font-bold py-1 px-2 rounded m-2`}
                    onClick={() => handleMarkAsDone(todo._id)}
                  >
                    Mark as Done
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  