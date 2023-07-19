
import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  // Function to add a new ToDo item
  const addTodo = () => {
    if (toDo.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: toDo,
        status: false
      };
      setToDos([...toDos, newTodo]);
      setToDo('');
    }
  };

  // Function to mark a ToDo item as complete or incomplete
  const toggleTodoStatus = (id) => {
    const updatedTodos = toDos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    setToDos(updatedTodos);
  };

  const doingEdit = (id)=>{
    const editItem = toDos.find((ele)=>{
      return ele.id === id
    })
    setToDo(editItem.text)
    setToDos(toDos.filter((data)=>{
      return (data.id !== id)
    }))
  }

  // Function to remove a ToDo item
  const deleteTodo = (id) => {
    const updatedTodos = toDos.filter((todo) => todo.id !== id);
    setToDos(updatedTodos);
  };
  

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ADD YOUR WORKS</h1>
      </div>
      <div className="subHeading">
        <br />
      
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((todo) => (
          <div className="todo" key={todo.id}>
            <div className="left">
              <input
                onChange={() => toggleTodoStatus(todo.id)}
                checked={todo.status}
                type="checkbox"
              />
              <p className={todo.status ? 'completed' : ''}>{todo.text}</p>
            </div>
            <div className="right">
            <i onClick={()=>{
                  if(todo.status){
                    doingEdit(todo.id)
                  }else{
                    alert('Please select');
                  }
                }} className="fas fa-edit"></i>
              <i onClick={() => deleteTodo(todo.id)} className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;

