import './App.css'
import { useState } from 'react'

function App () {
  // const [greetMsg, setGreetMsg] = useState('')
  // const [name, setName] = useState('')
  //
  // async function greet () {
  // //   Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  // setGreetMsg(await invoke('greet', { name }))
  // }

  const [todo, setTodo] = useState({ todoList: [], tmpTodo: '' })

  const handleSetTodo = (value) => setTodo({ ...todo, todoList: [...todo.todoList, value] })

  const handleSetTmpTodo = (event) => setTodo({ ...todo, tmpTodo: event.target.value })

  const setListElementRender = (element) => <div>
    <input id={element} type={'checkbox'}/>
    <label htmlFor={element}>{element}</label>
  </div>

  return (
    <div className="container">
      <div>
        <input type={'text'} name={'test'} value={todo.tmpTodo} onChange={handleSetTmpTodo}/>
        <input type={'button'} value={'Send'} onClick={() => handleSetTodo(todo.tmpTodo)} />
      </div>
      <div>
        {todo.todoList.map(setListElementRender)}
      </div>
    </div>
  )
}

export default App
