import React,{useRef,useContext} from "react";
import { TodoContext } from "../store";
import classes from './NewTodo.module.css';

const NewTodo =()=>{
    const inputRef= useRef<HTMLInputElement>(null);
    const ctx = useContext(TodoContext);
    // onsubmitHandler
    const onSubmitHandler=(event:React.FormEvent)=>{
     event.preventDefault();
     const enteredValue = inputRef.current!.value;
     if(enteredValue.trim().length === 0){
         return;
     }
     console.log( enteredValue,"f")
     ctx.AddTo(enteredValue);
    }

    console.log(ctx.items,"abc");
     return(
    <form className={classes.form} onSubmit={onSubmitHandler}>
    <input type="text" id="text" ref={inputRef}/>
    <button>Add Item</button>
    </form>   
)
}

export default NewTodo;