import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initail state
const initialState = {
    users: []
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            Payload: id
        })
    }

    const AddUser = (user) => {
        dispatch({
            type: 'ADD_USER',
            Payload: user
        })
    }
    const editUser =(user)=>{
        dispatch({
            type:'EDIT_UDER',
            Payload:user
        })
    }

    return (
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            AddUser,
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}