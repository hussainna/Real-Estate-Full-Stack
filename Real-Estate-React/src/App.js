import './App.css';
import { BrowserRouter as Router,Redirect,Route,Switch } from 'react-router-dom';
import Home from './components/home/Home.jsx'
import axios from 'axios'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/layout/Dashboard';



axios.defaults.withCredentials = true;
axios.defaults.baseURL='http://localhost:8000/api/'
axios.defaults.headers.post['Accept']='application/json'
axios.defaults.headers.post['Content-Type']='application/json'

//logout time

axios.interceptors.request.use(function(config){
  const token=localStorage.getItem('auth_token')
  config.headers.authorization=token?`Bearer ${token}`:'';
  return config
})

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login'>
            {localStorage.getItem('auth_token')?<Redirect to='/'/> : <Login/>}
          </Route>

          <Route path='/register'>
            {localStorage.getItem('auth_token')?<Redirect to='/'/> : <Register/>}
          </Route>

          <Dashboard path='/admin'/>

           {/* <Route path='/register' component={Register} />
           <Route path='/login' component={Login} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
