import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import TopBar from '../Topbar/TopBar'
import Sidebar from '../sidebar/Sidebar'
import axios from 'axios'
import swal from 'sweetalert'

function AddProduct() {

  const [img,setImage]=useState([])

  const history=useHistory()

  const [Input,setInput]=useState({
    name:'',
    price:'',
    date:'',
    description:'',
    
    type:'',
    country:'',
})

  const handleInput=(e)=>{
    e.persist()
    setInput({...Input,[e.target.name]:e.target.value})
  }

  const handleImage=(e)=>{
    e.persist();
    setImage({image:e.target.files[0]})
}

  const InsertProduct=(e)=>{
    e.preventDefault()

    const formData=new FormData();
    formData.append('image',img.image)
    formData.append('name',Input.name)
    formData.append('price',Input.price)
    formData.append('date',Input.date)
    formData.append('description',Input.description)
    formData.append('type',Input.type)
    formData.append('country',Input.country)

    
    axios.get("/sanctum/csrf-cookie").then(async () => {
      
      axios.post('insert-product',formData).then(res=>{
        if(res.data.status===200)
        {
          swal('success',res.data.message)
          history.push('/admin/products')
        }
      })


      });
    
  }

  return (
    <div className='master Add'>
                <TopBar/>
        <div className="cont">
        <Sidebar/>

        <div className="card">
            <div className="card-top">
                <h4>Products
                    <Link to='/admin/products'>Back</Link>
                </h4>
            </div>
            <div className='card-body'>
              <form onSubmit={InsertProduct}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" onChange={handleInput} name="name" value={Input.name} id="" />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input type="number" onChange={handleInput} value={Input.price}  name="price" id="" />
              </div>
              <div className="form-group">
                <label>Data</label>
                <input type="date" onChange={handleInput} value={Input.date} name="date" id="" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input type="text" onChange={handleInput} value={Input.description} name="description" id="" />
              </div>
              <div className="form-group">
                <label>image</label>
                <input type="file" name="image" onChange={handleImage}/>
              </div>
              <div className="form-group">
                <label>Type Product</label>
                <input type="text" onChange={handleInput} value={Input.type} name="type" id="" />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input type="text" onChange={handleInput} value={Input.country} name="country" id="" />
              </div>
              <button>Insert</button>
              </form>
            </div>
        </div>

        </div>
       
    </div>
  )
}

export default AddProduct