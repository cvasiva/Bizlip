import React, { useState, useContext,useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useNavigate} from 'react-router-dom';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';


const Edit = (props) => {
  const { users,editUser } = useContext(GlobalContext);
  const [selectedUser ,setSelectedUser]=useState({
    id:'',
    name:''
  })
 
  const navigate = useNavigate();
  const currentUserId = props.match.params.id;

  useEffect(()=>{
    const userId = currentUserId;
    const selectedUser=users.find(user=>user.id === userId)
    setSelectedUser(selectedUser);
  },[currentUserId,users])

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser)
    navigate.push("/");
  }
  const onChange = (e) =>{
    setSelectedUser({...selectedUser,[e.target.name]:e.target.value})
    
  }
  return (
    <div>
       <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' name='name' value={selectedUser.name}  onChange={onChange} placeholder='Enter Name'></Input>
      </FormGroup>
      <Button type='submit'>Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2" >Cancel</Link>
    </Form>
    </div>
  )
}

export default Edit
