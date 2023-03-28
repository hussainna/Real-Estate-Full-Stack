import React, { useEffect, useState } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import TopBar from '../Topbar/TopBar'
import Sidebar from '../sidebar/Sidebar'
import axios from 'axios'
import swal from 'sweetalert'

function EditProduct(props) {

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


  useEffect(()=>{
    const product_id=props.match.params.id;
    axios.get(`edit/${product_id}`).then(res=>{
        if(res.data.status===200)
        {
            setInput({
                name:res.data.product.name,
                price:res.data.product.price,
                date:res.data.product.date,
                description:res.data.product.description,
                type:res.data.product.type,
                country:res.data.product.country,
            })
        }
    })
  },[])

  const UpdateProduct=(e)=>{
    e.preventDefault()
    const product_id=props.match.params.id;

    const formData=new FormData();
    formData.append('name',Input.name)
    formData.append('price',Input.price)
    formData.append('date',Input.date)
    formData.append('description',Input.description)
    formData.append('type',Input.type)
    formData.append('country',Input.country)

    
      axios.post(`update-product/${product_id}`,formData).then(res=>{
        if(res.data.status===200)
        {
          swal('success',res.data.message)
          history.push('/admin/products')
        }
      })

    
  }

  return (
    <div className='master Add'>
                <TopBar/>
        <div className="cont">
        <Sidebar/>

        <div className="card">
            <div className="card-top">
                <h4>Edit Product
                    <Link to='/admin/products'>Back</Link>
                </h4>
            </div>
            <div className='card-body'>
              <form onSubmit={UpdateProduct}>
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
                <label>Type Product</label>
                <input type="text" onChange={handleInput} value={Input.type} name="type" id="" />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input type="text" onChange={handleInput} value={Input.country} name="country" id="" />
              </div>
              <button>Update</button>
              </form>
            </div>
        </div>

        </div>
       
    </div>
  )
}

export default withRouter(EditProduct)