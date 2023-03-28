import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import swal from 'sweetalert'
import { Nav } from '../../data/Data'

function Header() {

  const history=useHistory()

  const Logout=(e)=>{
    e.preventDefault()

    axios.post('logout').then(res=>{
      if(res.data.status===200)
      {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('auth_user')
        swal('success',res.data.status);
        history.push('/')
      }
    })
  }

  var authButton='';

  if(!localStorage.getItem('auth_token'))
  {
    authButton=(
      <ul className='flex'>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/register'>Register</Link></li>

    </ul>
    )
  }
  else{
    authButton=(
      <button onClick={Logout}>Logout</button>
      

    )
  }
 
  return (
    <header>
        <div className="container">
            <div className="logo">
              <img src='./images/logo.png' alt="" />
            </div>
            <nav>
              <ul className='flex'>
                {Nav.map((item,idx)=>(
                  <li key={idx}>
                    <Link to={item.path}>{item.link}</Link>
                  </li>
                ))}
                
                {authButton}


              </ul>
            </nav>
            <div className="media">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-regular fa-user"></i>
            <i class="fa-solid fa-cart-shopping"></i>
           
            </div>
        </div>
    </header>
  )
}

export default Header