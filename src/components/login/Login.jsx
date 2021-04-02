import React, { useState } from 'react';
import { auth } from '../../firebase';
import './login.css';
import {useHistory} from "react-router-dom";

function Login(props) {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const Signin = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth =>{
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    const Register = (e) =>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
           if(auth){
               history.push('/')
           }
        })
        .catch(error => alert(error.message))
    }
    
    return (
       <div className="login">
           <div className="login__container">
                <h1>sign in</h1>
                <form >
                    <h5>e mail</h5>
                    <input type="text" value={email} onChange={(e) =>setEmail(e.target.value)} />
                    <h5>password</h5>
                    <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)} />
                    <button type="submit" onClick={Signin}>
                        login
                    </button>
                    <button type="submit" onClick={Register}>
                        register
                    </button>
                </form>
           </div>
       </div>
    )
}


export default Login;