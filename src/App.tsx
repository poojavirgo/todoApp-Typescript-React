import NewTodo from './components/NewTodo';
import TodoContextProvider from './store';
import Todo from './components/Todo';

const App:React.FC=()=> {
  return (
   <>
   <TodoContextProvider>
    <NewTodo/>
    <Todo/>
   </TodoContextProvider>
   </>
  );
}

export default App;
