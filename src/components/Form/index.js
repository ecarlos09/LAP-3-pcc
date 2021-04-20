import React, { useState }from 'react'
import axios from 'axios'

const Form = ({setRepoList}) => {
    const [username, setUsername] = useState("")
    const [nameInput, setNameInput] = useState("")


    const HandleSubmit =(e) => {
        e.preventDefault()
    }

    const updateInput = e => {
        setNameInput(e.target.value);
    }

    // useEffect(() => {
    //     getResult(location);
    // }, [location])

    const getResult = async (name)=> {
        try{
            const {data} = axios.get(`https://api.github.com/users/${username}/repos`)
            let nameList = data.map(repo => repo.name)
            setRepoList(nameList)
            


        } catch(err) {
            console.warn(err.mesage);


        }
    }



    return (
        <form onSubmit={handleSubmit} aria-role= "form">
            <label htmlFor="input" >Enter Username</label>
            <input type="text" name="input" ></input>
            <button>Submit</button>
        </form>
    )
}

export default Form