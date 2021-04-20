import React, { useState, useEffect }from 'react'
import axios from 'axios'

const Form = ({setRepoList, username, setUsername}) => {
    
    const [nameInput, setNameInput] = useState("")

    useEffect(() => {
        if(username){
            getResult(username);
            }
        },[username] 
    )


    const handleSubmit =(e) => {
        e.preventDefault()
        setUsername(nameInput)
        // console.log(username)
        // getResult(username)
        setNameInput("")
    }

    const updateInput = e => {
        
        setNameInput(e.target.value);
    }

    // useEffect(() => {
    //     getResult(location);
    // }, [location])

    const getResult = async (name)=> {
        try{
            const {data} = await axios.get(`https://api.github.com/users/${username}/repos`)
            let nameList = data.map(repo => repo.name)
            console.log(nameList)
            setRepoList(nameList)
        } catch(err) {
            console.warn(err.mesage);

        }
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