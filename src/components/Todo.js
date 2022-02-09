import React from "react";
import reactDom from "react-dom";
import { addTodo,deleteTodo,removeTodo } from "../actions/index";
import {useDispatch,useSelector} from "react-redux";
import useState from "react";
 
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
      <div className="eachItems" key={elem.id}>
  <h3>{elem.data}</h3>

  <div className="todo-btn">
  

    <i className="fa fa-plus add-btn" title="Delete Item" onClick={()=>dispatch(deleteTodo(inputData), setInputData(''))} >+</i>
</div>
</div>
      )

    })
  }


</div>

<div className="showItems">
<button className="" onClick={()=>dispatch(removeTodo())}></button>
</div>
  

</div>

  </div>
  <h1>hello thapa technical</h1>
  </>
  );
}

export default Todo;