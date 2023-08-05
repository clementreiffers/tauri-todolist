import './App.css'
import { useState } from 'react'

function App () {
  const [todo, setTodo] = useState({ todoList: [], tmpTodo: '' })

  const createTodoElement = (value, done) => ({ value, done })

  const handleSetTodo = (value) => setTodo({ ...todo, todoList: [...todo.todoList, createTodoElement(value, false)] })

  const handleSetTmpTodo = (event) => setTodo({ ...todo, tmpTodo: event.target.value })

  const setDone = (event) => {
    const todoList = todo.todoList
    const id = event.target.id

    const todoElement = todo.todoList[id]
    const isDone = todoElement.done
    const todoValue = todoElement.value

    todoList[id] = createTodoElement(todoValue, !isDone)
    setTodo({ ...todo, todoList })
    console.log(todo)
  }

  const setTextDecoration = (element) => element.done ? 'line-through' : 'none'

  const setListElementRender = (element, key) => <div key={key}>
    <input id={key} type={'checkbox'} onChange={setDone}/>
    <label htmlFor={key} style={{ textDecoration: setTextDecoration(element) }}>{element.value}</label>
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
