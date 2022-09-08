import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useNavigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


const Add = () => {
  const [name ,setName]=useState('');
  const { addUser } = useContext(GlobalContext);
  const navigate = useNavigate();


  const onSubmit = (e) => {
    e.preventDefalt();
    const newUser = {
      id: uuid(),
      name
    }
    addUser(newUser);
    navigate.push("/");
  }
  const onChange = (e) =>{
    setName(e.target.value);
  }
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' value={name} onChange={onChange} name="name" placeholder='Enter Name'></Input>
      </FormGroup>
      <Button type='submit'>Submit</Button>
      <Link to="/" className="btn btn-danger ml-2" >Cancel</Link>
    </Form>
  )
}

export default Add
