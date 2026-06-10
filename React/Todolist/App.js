
import './App.css';
import Hearder from "./MyComponents/Hearder";
import Todo from './MyComponents/todo';
import Todos from './MyComponents/todos';
import Footer from './MyComponents/footer';
import { useState } from 'react';
import { useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  let initTodo;
  if( localStorage.getItem("todos")===null){
    initTodo=[];

  }else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  
  const onDelete =(todo)=>{
    console.log("im on delete of todo" , todo.sno);
    setTodos(todos.filter((e)=>{
      return e.sno!==todo.sno;
    }))
  
  
  }
  const addTodo=(title,desc)=>{
    console.log("im adding this todo",title,desc);
    
    const mytodo={
      sno:todos.length+1,
      title:title,
      desc:desc
      
  }
   
    localStorage.setItem("todos",JSON.stringify(todos));
  
 
  setTodos([...todos,mytodo]);
  console.log(mytodo);
    }
  const [todos, setTodos] = useState(initTodo
  );
   useEffect(() =>{
      localStorage.setItem("todos",JSON.stringify(todos));

    }   ,[todos])
    

  return (
    <>
    <Router>
      <Hearder title="mytodolist" searchBar={false}/>
      <Routes>
      
         <Route path="/" element={
          <>
             <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
            </>
         }/>
        
        
        <Route path="/about" element={<About/>}/>
        
        </Routes>
      
    

     
      <Footer/>
    </Router>
    </>
   

  );
}

export default App;
