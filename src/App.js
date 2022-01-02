//import logo from './logo.svg';
import './App.css';
import Header from  "./myComponents/Header";
import {Footer} from  "./myComponents/Footer";  // here we have to use {footer} cod we font udse default in footer file
import {Todos} from  "./myComponents/Todos";  // {  "   "    "   "  }
import {Addtodo} from  "./myComponents/Addtodo";  // {  "   "    "   "  }
import {About} from  "./myComponents/About";  // {  "   "    "   "  }
import React,{useState, useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  let initTodo;
  if (localStorage.getItem("todos")===null){
    initTodo =[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("i am on delete of todo ",todo);

    // let index = todos.indexOf(todo);
    // todos.splice(index,1);     // this will not work in react we need to use the hooks and here we use state hook

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));

  }

    const addtodo = (title, desc)=>{
      console.log("i am adding this to list", title, desc);
      if (todos.length===0){
        var sno = 0; 
      }
      else{

        var sno = todos[todos.length-1].sno +1;
      }
      const mytodo={
        sno:sno,
        title:title,
        desc:desc,
      }
      setTodos([...todos,mytodo]);
      console.log(mytodo);
      // upper waali lines run na hoyi ho aur humne local storagewali run krdi islei isko shi krne ke lie use effect use kra
      
    }

  const [todos, setTodos] = useState (initTodo);

  useEffect(() => {  // this is used for making app more wfficient like pehle kuc delete ho rhe  si todo  task after reloading
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
      
    <Header title ="my todos list" searchbar = {true}/>  {/* passign data from parent to child component and usinf false true props too */}
    <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <Addtodo addtodo={addtodo}/>
              <Todos todos={todos} onDelete ={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
    <Footer/>

    </Router>
    </>
  );
}

// this is millawat or we say mixture of html and JS called JSX 

export default App;
