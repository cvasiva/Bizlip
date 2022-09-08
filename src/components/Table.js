import React, { Fragment, useState,useEffect } from 'react';
import { nanoid } from 'nanoid';
import '../App.css'
import data from '../Mock-data.json'
import ReadOnlyRow from '../components/ReadOnlyRow';
import EditbleRow from '../components/EditbleRow';

function Table() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: ''
  })

  const [editFormData,setEditFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  })
  useEffect(()=>{
    console.log("data::",contacts)
  },[])

  const [editContactId,setEditContactId] = useState(null);

  const handleAddformChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name')
    const fieldvalue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldvalue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) =>{
    event.preventDefault();

    const fieldName = event.target.getAttribute('name')
    const fieldvalue = event.target.value;

    const newFormData = { ...editFormData };  
    newFormData [fieldName] = fieldvalue;

    setEditFormData(newFormData);
  };
  const handleAddformSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event)=>{
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    }

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact)=> contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event,contact) =>{
    event.preventDefault();
    setEditContactId(contact.id);

    const formvalues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };
    setEditFormData(formvalues);
  };

  const handleCancelClick =() => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) =>{
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact)=>contact.id ===contactId);

    newContacts.splice(index,1)

    setContacts(newContacts);
  }

  return (
    <div className='Table-container'>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (<EditbleRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} />
                ):(
                  <ReadOnlyRow contact={contact} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
                )}
              </Fragment>

            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a contact</h2>
      <form onSubmit={handleAddformSubmit}>
        <input type='text' name='fullName' required='required' placeholder='Enter a name...' onChange={handleAddformChange} />
        <input type='text' name='address' required='required' placeholder='Enter a address...' onChange={handleAddformChange} />
        <input type='text' name='phoneNumber' required='required' placeholder='Enter a phone Number...' onChange={handleAddformChange} />
        <input type='email' name='email' required='required' placeholder='Enter a email...' onChange={handleAddformChange} />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default Table;
