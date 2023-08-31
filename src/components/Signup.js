import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
// import { registeredUsers } from './registrationSlice';
import { registerUser } from './registrationSlice';
import MovieService from '../MovieService';

const Signup = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [username, setUsername] = useState('');
   
    const [email, setEmail] = useState('');
   
    const [password, setPassword] = useState('');
    const [errorReg,setErrorReg] = useState('');
    const registeredUsers=useSelector(state=>state.registration.registeredUsers);
    

    const oc=()=>{
        const usr= document.getElementById('username').value;
        setUsername(usr);
        console.log(usr);
        const pass= document.getElementById('password').value;
        setPassword(pass);
        const email= document.getElementById('email').value;
        setEmail(email);
        const cpass= document.getElementById('confirmPassword').value;
        // if(cpass!=pass)
        // alert('password and confirm password are not same');
    }
    
   
    const handleRegister = (e) => {
        
        console.log('chk');
     e.preventDefault();
     console.log(username);

       if (!username || !email || !password) {

        setErrorReg('All fields are required');
     
        return;
     
       }
       if (username.length<=3) {

        setErrorReg('username is very short');
     
        return;
     
       }
       if (password.length<=3) {

        setErrorReg('password  is very short');
     
        return;
     
       }
     
       // Check for duplicate email (this is a simple illustration)
     
       const isEmailTaken = registeredUsers.some(user => user.email === email);
     
       if (isEmailTaken) {
     
        setErrorReg('Email address is already registered');
     
        return;
     
       }
     
       // Clear any existing error message
     
       setErrorReg('');
     
     
     const newUser = {
   
      username,
   
      email,
   
      password,
   
     };
     console.log(newUser);
   
     //dispatch(registerUser(newUser));
   
     // Clear form fields after registrati
     MovieService.createUser( newUser)
     history.push('/login');
    }

   

    return (

        <div className="container d-flex justify-content-center align-items-center w-4">

            <div className="Auth-form-container">

                <form className="Auth-form p-4 rounded shadow" onSubmit={handleRegister}>

                    <div className="Auth-form-content">

                        <h3 className="Auth-form-title mb-4 text-center">Sign Up</h3>
                        
                        {errorReg && <p className='text text-danger'>{errorReg}</p>}
                        <div className="form-group">

                            <label htmlFor="username">Username</label>

                            <input

                                type="text"

                                className="form-control"

                                id="username"

                                placeholder="Enter username"
                                onChange={oc}

                            />

                        </div>

                        <div className="form-group mt-3">

                            <label htmlFor="email">Email address</label>

                            <input

                                type="email"

                                className="form-control"

                                id="email"

                                placeholder="Enter email"
                                onChange={oc}

                            />

                        </div>

                        <div className="form-group mt-3">

                            <label htmlFor="password">Password</label>

                            <input

                                type="password"

                                className="form-control"

                                id="password"

                                placeholder="Enter password"
                                onChange={oc}

                            />

                        </div>

                        <div className="form-group mt-3">

                            <label htmlFor="confirmPassword">Confirm Password</label>

                            <input

                                type="password"

                                className="form-control"

                                id="confirmPassword"

                                placeholder="Confirm password"
                                onChange={oc}

                            />

                        </div>

                        <div className="d-grid gap-2 mt-4">

                            <button type="submit" className="btn btn-primary btn-block">

                                Sign Up

                            </button>

                        </div>

                        <p className="mt-3 text-center">

                            Already have an account? <Link to="/login">Login</Link>
                        </p>

                    </div>

                </form>

            </div>

        </div>


    );

};

export default Signup;



/*  */

