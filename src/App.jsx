import { useEffect, useRef, useState } from "react";
import Todo from "./Todo";
import "./App.css"

export default function App() {

  const [todo, setTodo] = useState([]);
  const [inputValue,setInputValue]=useState("")
  const inputRef = useRef();
  let editIndex = null;

  //save
  const saveToDo = (e) => {

if(e.target.todo.value==="")
{
  alert("enter the todo")
}

else{

  const list = e.target.todo.value;
  const todoList = [...todo, list];
  setTodo(todoList);
}
//clear the input field after task submitted
 inputRef.current.value=" "
 setInputValue("")

  };
  //deletion
  const deletTodoItem = (index) => {
    const finalTododata = todo.filter((v, i) => i !== index);
    setTodo(finalTododata);
  };

  //updation
  const editTodoItem = (value, index) => {
    inputRef.current.value = value;
    const arr = todo.filter((val) => val != value);
    editIndex = index;
    setTodo(arr);
    // console.log(inputRef.current)
    // const newValue = value;
    // const modifyItem = todo.map((previousvalue, i) => {
    //   if (i === index) {
    //     return newValue;
    //   }

    //   return previousvalue;
    // });
    // console.log(modifyItem);
    // setTodo(modifyItem);
  };
  const clear=(e)=>{e.target.todo.value=" "}
  const data = todo.map((value, index) => {
    return (
      <Todo
        value={value}
        key={index}
        indexNo={index}
        editTodoItem={() => editTodoItem(value, index)}
        deletTodoItem={() => deletTodoItem(index)}
      />
    );
  });

  return (
    <>
    <div className="container">
      <h1 style={{ textAlign: "center",margin:"10px auto" }}>ToDo app</h1>
      <form className="search-box" onSubmit={saveToDo}>
        <input
         autoFocus
          type="text"
          name="todo"
          className="todo"
          placeholder="Enter the todo"
          ref={inputRef}
          onChange={(e)=>setInputValue(e.target.value)}
        />
        <button className="save-btn" onClick={clear} disabled={inputValue.trim()===""}>Save</button>
      </form>
      <div >
        <ul >
          {data} 
        </ul>
      </div></div>
    </>
  );
} 