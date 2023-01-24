import React, { useState } from 'react';
import CreateACard from "./components/Card";


function App(props) {

  const l = [];
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    l.push(todo);
    const newTodo = {
      id: Math.random(),
      todo: todo
    };

  //add the todo to the list
  setList([...list, newTodo]);

  //clear input box
  setInput("");
};


  return (
    <>
      <CreateACard list={l} />
        <div>
            <h1>To-do List</h1>
            <input type="text"
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => addTodo(input)}>Add</button>
        </div>
        
        <ul className = "card">
            {list.map((todo) => (
              <li key ={todo.id}>
                {todo.todo}
              </li>
            ))}
        </ul>
    </>
  );
}

export default App;