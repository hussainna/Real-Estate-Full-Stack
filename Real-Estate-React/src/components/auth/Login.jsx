import React, { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
function Login() {
    const [Login,setLogin]=useState({
     
        email:'',
        password:'',
    })
    const handleInput=(e)=>{
        e.persist();
        setLogin({...Login,[e.target.name]:e.target.value})
    }

    const history=useHistory();

    const LoginSubmit=(e)=>{
        e.preventDefault()
        const data={
            email:Login.email,
            password:Login.password,

        }

        axios.get("/sanctum/csrf-cookie").then(async () => {
            //Logic to handle login

            axios.post('login',data).then(res=>{
                if(res.data.status===200)
                {
                    localStorage.setItem('auth_token',res.data.token);
                    localStorage.setItem('auth_name',res.data.user)
                    swal('success',res.data.message)
                    history.push('/')
    
                }
                else if(res.data.status===401)
                {
                    swal('invided cred')
                }
            })
    
            //end

            });
      

      
    }

  return (
    <div>
        <form onSubmit={LoginSubmit}>
            <input type="email" placeholder='email' name="email" onChange={handleInput} value={Login.email}  id="" />
            <input type="password" placeholder='password' onChange={handleInput} value={Login.password}   name='password'  />
            <button>Register</button>
        </form>
    </div>
  )
}

export default Login