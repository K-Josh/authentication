import Register from './components/Register';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
axios.defaults.baseURL = 'http://localhost:3000';
// used so we can set cookies from our api
axios.defaults.withCredentials = true;
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          {/* <Route path='/home' element={<Home/>}></Route> */}
        </Routes>
      </BrowserRouter>
  )
}

export default App
