import React, { useState }from 'react'

const Form = () => {
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


        } catch(error) {

            
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