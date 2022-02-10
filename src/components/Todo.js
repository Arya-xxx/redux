import React from "react";
import reactDom from "react-dom";
import { addTodo,deleteTodo,removeTodo } from "../actions/index";
import {useDispatch,useSelector} from "react-redux";
import {useState} from "react";
import "./Todo.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
 
const Todo=()=>{

const [inputData,setInputData]=useState('');
const list= useSelector((state)=>state.todoReducers.list);
const dispatch= useDispatch();

  return (
  <>
  <div className="main-div">

<div className="child-div">
  <figure>
  <figcaption>Add your list here</figcaption>
  </figure>

  <div className="addItems">
  <input type="text" placeholder="Add Items.." value={inputData} onChange={(event)=>setInputData(event.target.value)}/>
  <i className="fa fa-plus add-btn" onClick={()=>dispatch(addTodo(inputData), setInputData(''))} >+</i>
  </div>

<div className="showItems">
  {
    list.map((elem)=>{

      return (
      <div className="eachItem" key={elem.id}>
          <h3>{elem.data}</h3>
          <div className="todo-btn">

            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>dispatch(deleteTodo(elem.id))}>de</i>
            </div>
            </div>
      )

    })
  }


</div>

<div className="showItems">
<button className="btn effect04" onClick={()=>dispatch(removeTodo())}>remove</button>
</div>
  

</div>

  </div>
  
  </>
  );
}

export default Todo;