import React,{useState} from "react";
import Todo from '../modal/Todo';

type TodoObj={
    AddTo: (text:string)=> void;
    onDelete:(id:string)=>void;
    items:Todo[];
}

export const TodoContext = React.createContext<TodoObj>({
    AddTo:(text:string)=>{},
    items:[],
    onDelete:(id:string)=>{},
})


const TodoContextProvider:React.FC<{children:any}> =(props)=>{

    const [todo, setTodo]= useState<Todo[]>([]);

    const onAddHandler=(text:string)=>{
    const newtodo = new Todo(text);
    setTodo(prevState=>{
        return prevState.concat(newtodo);
    })
    }

    const onDeleteHandler=(id:string)=>{
        setTodo(prevstate=>{
            return prevstate.filter(item=> item.id !==id);
        })
    }

    const contextValue:TodoObj={
        AddTo:onAddHandler, 
        items:todo,
        onDelete:onDeleteHandler,
    }
    return <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>

}

export default TodoContextProvider;