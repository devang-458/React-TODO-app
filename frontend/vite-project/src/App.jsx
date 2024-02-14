import { useState, useEffect } from "react";
import axios from "axios";
import { Create } from "./components/Create";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/todos");
        setTodos(response.data.todos);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // Function to refresh todos after adding a new one
  const refreshTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/todos");
      setTodos(response.data.todos);
    } catch (error) {
      console.log("Error refreshing todos", error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center h-screen w-full bg-slate-500">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white text-center w-90 p-2 h-max px-4">
          <h1 className="text-4xl pb-4 font-bold">Todo-app</h1>
          {/* Pass refreshTodos function as a prop */}
          <Create refreshTodos={refreshTodos} />
          <Todos todos={todos} refreshTodos={refreshTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
