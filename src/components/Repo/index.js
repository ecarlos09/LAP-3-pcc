import React from 'react';

const Repo = (props) => {
    const [name,setName] = useState()
    setName(props.name)
    


    return (
        <h1>{name}</h1>
    )


}

export default Repo