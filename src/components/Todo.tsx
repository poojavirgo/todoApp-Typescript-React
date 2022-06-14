import React,{useContext} from "react";
import { TodoContext } from "../store";
import TodoItem from "./TodoItem";
import classes from './Todo.module.css';

const Todo=()=>{
    const ctx= useContext(TodoContext);
     return(
      <ul className={classes.todos}>
      {ctx.items.map(item=>(
       <TodoItem text={item.text} key={item.id} onDelete={ctx.onDelete.bind(null,item.id)}/>
      ))}
      </ul>
  )
}

export default Todo;