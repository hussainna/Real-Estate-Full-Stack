import React, { useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import TopBar from '../Topbar/TopBar'
import Sidebar from '../sidebar/Sidebar'
import './product.css'
import axios from 'axios'
import swal from 'sweetalert'
import {PacmanLoader} from 'react-spinners'
function Product() {

    const history=useHistory()

    const deleteItem=(e,id)=>{
        e.preventDefault()
        axios.post(`delete-product/${id}`).then(res=>{
            if(res.data.status===200)
            {
                swal('success',res.data.message);
                history.push('/admin/products')

            }
        })
    }


    const [Items,setItems]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{

        axios.get('products').then(res=>{
            if(res.data.status===200)
            {
                setItems(res.data.product)
              
            }
            setLoading(false)

        })

    },[])

    var viewHTML='';
    if(loading)
    {
        return <PacmanLoader className='lazyLoading' color="#36d7b7" />
    }
    else
    {
        viewHTML=Items.map((item,idx)=>(
            <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.date}</td>
                <td>{item.description}</td>
                <td>{item.type}</td>
                <td>{item.country}</td>
                <td><img src={`http://localhost:8000/${item.image}`} width="50px" alt="Image" /></td>
                <td><button  onClick={(e)=>deleteItem(e,item.id)}>Delete</button></td>
                <td><Link to={`edit-product/${item.id}`}>Edit</Link></td>
            </tr>
        ))
    }

  return (
    <div className='master product'>
                <TopBar/>
        <div className="cont">
        <Sidebar/>

        <div className="card">
            <div className="card-top">
                <h4>Products
                    <Link to='/admin/add-product'>Add</Link>
                </h4>
            </div>
            <div className="card-body">
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>price</th>
                            <th>date</th>
                            <th>description</th>
                            <th>type</th>
                            <th>country</th>
                            <th>image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {viewHTML}
                    </tbody>
                </table>
            </div>
        </div>

        </div>
       
    </div>
  )
}

export default Product