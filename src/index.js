import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardChecklist } from "react-bootstrap-icons";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Navbar from "react-bootstrap/Navbar";
import  { useState } from 'react';
import { Trash } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';


// 这是一个函数，他会返回一个数组，这个数组中包含了一系列的对象，每个对象都有三个数据
function fetchTodos()
{
return[
{
 id : 1,
 title : "Eat",
 completed : false,
},
{
 id : 2,
 title : "Sport",
 completed : false,
},
{
 id : 3,
 title : "Love",
 completed : false,
},
{
 id : 4, 
 title : "Drink",
 completed : false,
},
{
 id : 5,
 title : "Learn",
 completed : false,
},
];
}

// React中的组件都可以被简化成为一个函数的定义
function App(){
  const [todos,setTodos] = useState(fetchTodos());
  return (
<>
<Navbar bg ="dark" variant = "dark">
<container>
  <Navbar.Brand href='#home'>
    <CardChecklist/> To Do List
  </Navbar.Brand>
</container>
</Navbar>
  <Container>
  {todos.map((todo) => (
  <TodoItem
   key = {todo.id}
   title =  {todo.title}
   completed = {todo.completed}
   onDelete = {() =>{
     setTodos(todos.filter((x)=>x.id !== todo.id));
   }}
   onToggle = {() => {
     setTodos(
      todos.map((x) =>
      x.id ==todo.id ? {...x,completed:!x.completed } : x
      )
     )
   }}
   />
  ))}
 </Container>
</>
  );
}
// 拆分为一个独立的组件，就是模块化TodoItem
function TodoItem(props)
{
  return(
   <InputGroup key={props.id}>
    <InputGroup.Checkbox
     checked = {props.completed} 
     onChange ={props.onToggle}
     />
       <Form.Control 
       value = {props .title}
       style = {{
           textDecoration: props .completed ? "line-through 4px" : "none", 
       }}
       />
       <Button variant = "outline-danger" onClick={props.onDelete}>
        <Trash/>
        </Button>
    </InputGroup>
   );
}
// Everything starts from here.
ReactDOM.render( <App /> , document.getElementById("root"));


