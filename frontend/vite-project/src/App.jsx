import { Create } from "./components/Create"
import { Todos } from "./components/Todos"

function App() {

  return (
    <div className="flex justify-center h-screen bg-slate-500"> 
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white text-center w-90 p-2 h-max px-4">
        <h1 className="text-4xl pb-4 font-bold">Todo-app</h1>
        <Create />
        <Todos todos = {[
          {
            title:"Go to gym",
            description: "working",
            completed: false
          }
        ]}/>
        </div>
      </div>
    </div>
  )
}

export default App
