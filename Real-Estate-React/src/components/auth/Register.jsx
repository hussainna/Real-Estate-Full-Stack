import React, { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
function Register() {
    const [Register,setRegister]=useState({
        name:'',
        email:'',
        password:'',
    })
    const handleInput=(e)=>{
        e.persist();
        setRegister({...Register,[e.target.name]:e.target.value})
    }

    const history=useHistory();

    const RegisterSubmit=(e)=>{
        e.preventDefault()
        const data={
            name:Register.name,
            email:Register.email,
            password:Register.password,

        }

        axios.get("/sanctum/csrf-cookie").then(async () => {
            //Logic to handle login

            axios.post('register',data).then(res=>{
                if(res.data.status===200)
                {
                    localStorage.setItem('auth_token',res.data.token);
                    localStorage.setItem('auth_name',res.data.user)
                    swal('success',res.data.message)
                    history.push('/')
    
                }
                else
                {
    
                }
            })
    
            //end

            });
      

      
    }

  return (
    <div>
        <form onSubmit={RegisterSubmit}>
            <input type="text" placeholder='name' name="name" onChange={handleInput} value={Register.name} id="" />
            <input type="email" placeholder='email' name="email" onChange={handleInput} value={Register.email}  id="" />
            <input type="password" placeholder='password' onChange={handleInput} value={Register.password}   name='password'  />
            <button>Register</button>
        </form>
    </div>
  )
}

export default Register