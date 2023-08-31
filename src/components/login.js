import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Dashboard from './dashboard';
import { Link } from 'react-router-dom';
import {login} from './authSlice.js';
import { registeredUsers } from './registrationSlice';
import { useDispatch, useSelector } from 'react-redux';
import MovieService from '../MovieService';


const Login = () => {

    const history=useHistory();
    const dispatch=useDispatch();


    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorLog,setErrorLog] = useState('');
    const registeredUsers=useSelector(state=>state.registration.registeredUsers);
    console.log(registeredUsers);
    const oc=()=>{
        const usr= document.getElementById('username').value;
        setUsername(usr);
        const pass= document.getElementById('password').value;
        setPassword(pass);
    }
    const handleLogin = (e) => {
        
        
        e.preventDefault();
        // In a real application, you would typically validate the credentials with a server
        //const loggedInUser=registeredUsers.find(u=>u.username===username && u.password===password)
        // For simplicity, we'll use hardcoded values here
        console.log(username);
        // console.log(usr)
        console.log(password);
       // console.log(loggedInUser);
        
        if(username.length<=3)
       setErrorLog('username is very short')
       if(password.length<=3)
       setErrorLog('password is very short')

       if(!password || !username)
       setErrorLog('All fields are required')
       else if(password && username)
       {        
        const user1 = {
   
            username,
         
            password,
         
           };
           console.log(user1);
            if(MovieService.loginUser(user1))
            {
               localStorage.setItem("loggedIn","true");
               localStorage.setItem("username",username)
               history.push('/dashboard');
               setErrorLog('')
               
           }
        }
        else{
           setErrorLog('Invalid credential')
        }
        
    }

        return (


            <div className="container d-flex justify-content-center align-items-center w-5">

                <div className="Auth-form-container">

                    <form className="Auth-form p-4 rounded shadow" onSubmit={handleLogin}>

                        <div className="Auth-form-content">

                            <h3 className="Auth-form-title mb-4 text-center">Sign In</h3>
                             <div className='text text-danger'><p>{errorLog}</p></div>
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

                                <label htmlFor="password">Password</label>

                                <input

                                    type="password"

                                    className="form-control"

                                    id="password"

                                    placeholder="Enter password"
                                    onChange={oc}

                                />

                            </div>

                            <div className="d-grid gap-2 mt-4">

                                <button type="submit" className="btn btn-primary btn-block">

                                    Submit

                                </button>

                            </div>

                            {/* <p className="forgot-password text-right mt-3">

                                Forgot <a href="#">password?</a>

                            </p> */}
                            <p className="mt-3">

                                Don't have an account? <Link to="/sign-up">Sign up</Link>

                            </p>
                            <p className="mt-3">

                                <Link to="/admin" class="btn btn-primary">Admin Login</Link>

                            </p>

                        </div>

                    </form>

                </div>

            </div>



        );

    };

export default Login;





