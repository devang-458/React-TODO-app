export function Todos({todos}){
    return <div className="flex flex-wrap justify-center">
        {todos.map(function(todo, index){
            return <div key={index} className="max-w-sm w-full p-4">
                <div className="bg-white border border-black rounded-lg overflow-hidden">
                    <div className="bg-slate-300 p-2 rounded-t-md">
                        <h1 className="text-lg font-bold text-black">{todo.title}</h1>
                        <h2 className="text-gray-700">{todo.description}</h2>
                        <button className={`${
                            todo.completed ? 'bg-green-500'
                            : "bg-blue-500 hover:bg-blue-700"
                        } text-white font-bold py-1 px-2 rounded m-2`}>Mark as Done</button>
                    </div>
                </div>

            </div>
        })}
    </div>
}