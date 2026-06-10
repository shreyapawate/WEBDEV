import React from 'react'
import { useState } from 'react';

import { Form, Button } from 'react-bootstrap';

const AddTodo = ({addTodo}) => {
    const [title,setTitle]= useState("");
    const[desc,setDesc]=useState("");
    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title or description cannot be empty");
        }
        addTodo(title,desc);
        setTitle("");
        setDesc("");


    }
  return (
    <div className= "container my-3">
      <h3>Add Todo</h3> 
    <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter todo</Form.Label>
        <Form.Control  placeholder="go to the hotel" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter description</Form.Label>
        <Form.Control as="textarea" value={desc} rows={3} onChange={(e) => setDesc(e.target.value)} />
      </Form.Group>
       <Button variant="primary" type="submit" className="btn btn-sm btn-success">
         Submit
       </Button>
    </Form>
  


      
    </div>
  )
}

export default AddTodo
