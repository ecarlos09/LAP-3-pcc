import React, { useState, useEffect }from 'react';
import { useDispatch } from 'react-redux';

import { getResult } from '../../redux/actions'


const Form = () => {

    const dispatch = useDispatch();
    const [nameInput, setNameInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getResult(nameInput))
        setNameInput("")
    }

    const updateInput = e => {        
        setNameInput(e.target.value);
    }
    
    return (
        <form onSubmit={handleSubmit} role= "form">
            <label htmlFor="input" >Enter Username</label>
            <input type="text" name="input" value = {nameInput} onChange={updateInput}></input>
            <button>Submit</button>
        </form>
    )
}

export default Form