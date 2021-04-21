import React from 'react';
import { useSelector } from 'react-redux';

import {Form, Repo} from '../../components';
import{ Header } from '../../layout';


const Homepage = () => {

    const error = useSelector(state => state.error);
    const avatarLink = useSelector(state => state.avatar);
   
    return (
        <section id="homepage">
            <Header />
            <Form />
            { avatarLink ? <img src={avatarLink} alt="avatar image" style={{width:"5rem"}} /> : <span id="no-image-here"></span> } 
            { error ? <p role='alert'>Oops!  We cannot find that user.  Try a different name.</p> : <Repo /> }
        </section>
    )
}

export default Homepage;