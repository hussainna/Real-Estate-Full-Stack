import React from 'react'
import  { useEffect, useState } from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import {PacmanLoader} from 'react-spinners'
import axios from 'axios'
import swal from 'sweetalert'
import Master from './Master'
import Product from './products/Product'
import AddProduct from './products/AddProduct'
import EditProduct from './products/EditProduct'
function Dashboard({...rest}) {


  const [Auth,setAuth]=useState(false)
  const [loading,setLoading]=useState(true)
  const history=useHistory()


  useEffect(()=>{
    axios.get('authcheck').then(res=>{
      if(res.data.status===200)
      {
        setAuth(true)
      }
      setLoading(false)
    })

    return()=>{
      setAuth(false)
  }

  },[])


  axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err){
    if(err.response.status===401)
    {
        swal('Unauthorized',err.response.data.message,'warning');
        history.push('/');
    }
    return Promise.reject(err);
   })
   
   axios.interceptors.response.use(function(response){
    return response;
   },function(error){
    if(error.response.status===403)
    {
        swal('warning',error.response.data.message);
        history.push('/');
    }
    else if(error.response.status===404)
    {
        swal('warning');
        history.push('/');
    }
    return Promise.reject(error);
    
   })



  if(loading){

    return(

      <PacmanLoader className='lazyLoading' color="#36d7b7" />

    )

  }

  return (
    <div>
      <Switch>
      <Route {...rest}
            render={({props,location})=>
            Auth?
            (<Master {...props} />):
            (<Redirect to={{pathname:'/login', state:{from:location}}} />)
        }
        path='/admin/dashboard'
        />

        <Route {...rest}
            render={({props,location})=>
            Auth?
            (<Product {...props} />):
            (<Redirect to={{pathname:'/login', state:{from:location}}} />)
        }
        path='/admin/products'
        />

       <Route {...rest}
            render={({props,location})=>
            Auth?
            (<AddProduct {...props} />):
            (<Redirect to={{pathname:'/login', state:{from:location}}} />)
        }
        path='/admin/add-product'
        />

         <Route {...rest}
            render={({props,location})=>
            Auth?
            (<EditProduct {...props} />):
            (<Redirect to={{pathname:'/login', state:{from:location}}} />)
        }
        path='/admin/edit-product/:id'
        />

      </Switch>
    </div>
  )
}

export default Dashboard