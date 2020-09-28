import React from 'react';
import { Link } from 'react-router-dom';

function Landing(){

    return(
        <div>
            <h1> TodoList App</h1>
            <Link to="/signin"> 
                <button> SignIn</button>
            </Link>
            
            <Link to="/signup">
                <button> SignUp</button>
            </Link>

        </div>
    )
};

export default Landing;