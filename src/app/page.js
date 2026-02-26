"use client"
import { useState,useEffect } from "react";


export default function Home() {

  const [todos, setTodos] = useState([]);
  const [input, setInput]=useState('');

  useEffect(()=>{
    const saved = localStorage.getItem('todos')
    if(saved){
      setTodos(JSON.parse(saved))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  const addTodo=()=>{

    if(input.trim()=='') return;

     const newTodo={
      id: Date.now(),
      text:input,
      completed:false
     }
     setTodos([...todos,newTodo])
     setInput('')
  }

  const deleteTodo=(id)=>{
    setTodos(todos.filter(todo=>todo.id!==id))

  }

  const toggleComplete=(id)=>{
    setTodos(todos.map(todo=>({
      ...todo,
      completed:todo.id===id? !todo.completed: false
    })))
  }

  const totalTodos=todos.length
  const completedTodo=todos.filter(t=>t.completed).length;
  const pendingCounts= totalTodos-completedTodo



  return (
    <div className="min-h-screen bg-slate-400 py-8 px-4">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-slate-900 mb-8">
            Todo App
        </h1>
        <div className="flex justify-center gap-6 mb-8 text-sm text-gray-600">
          <span>{totalTodos} total</span>
          <span>{completedTodo} Done</span>
          <span>{pendingCounts} left </span>
        </div>

         <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              placeholder="Add a new todo..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addTodo}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              Add
            </button>
          </div>
        </div>

        <div className="space-y-3">
          { todos.length===0? (
            <div className="text-center py-12 text-slate-600">
              No todos yet
            </div>
          ):(
            todos.map(todo => (
              <div
                key={todo.id}
                className={`bg-white rounded-lg shadow p-4 flex items-center gap-3 ${
                  todo.completed ? 'opacity-75' : ''
                }`}
              >
               
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                  className="w-5 h-5 text-blue-600 cursor-pointer"
                />

                
                <span
                  className={`flex-1 ${
                    todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
                  }`}
                >
                  {todo.text}
                </span>

                
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  ID: {todo.id}
                </span>

                
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

      </div>

    </div>
  );
}
