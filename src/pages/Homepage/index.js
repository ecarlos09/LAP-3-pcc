import React from 'react';
import { useSelector } from 'react-redux';

import {Form, Repo} from '../../components';
import{ Header } from '../../layout';


const Homepage = () => {

    const error = useSelector(state => state.error);
   
    return (
        <>
        <Header />
        <Form />
        { error ? <p role='alert'>Oops!  We cannot find that user.  Try a different name.</p> : <Repo /> }
        </>
    )
}

export default Homepage;