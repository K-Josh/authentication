import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';



const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function register(ev) {
      ev.preventDefault();
      axios.post('http://localhost:3000/register', {username,email,password})
        .then(result => {console.log(result)
          navigate('/login')
        })
        .catch(err => console.log(err));
    } 

  return (
    <div className="bg-blue-50 h-screen flex items-center" id='register'>
      <form className="mx-auto p-3 flex justify-center items-center flex-col w-72 mb-12 shadow-sm border-2 border-orange-00 " onSubmit={register}>
        <h2 className="mb-4 text-md font-bold text-orange-700/75">Let&apos;s Chat</h2>
        <input
          value={username}
          onChange={(ev) => setUsername(ev.target.value)} 
          type="text" 
          placeholder='username'
          name='username'  
          className="w-64 text-md border-2 border-hidden outline-none focus:border-orange-700  hover:shadow-lg rounded-sm p-2 mb-7" required/>
          <input
          value={email}
          onChange={(ev) => setEmail(ev.target.value)} 
          type="email" 
          placeholder='Email'
          name='email'  
          className="peer w-64 text-md border-2 border-hidden outline-none focus:border-orange-700  hover:shadow-md rounded-sm p-2 mb-4" />
          <p className="mb-2 invisible peer-invalid:visible text-orange-700 text-sm">
      Please provide a valid email address.
    </p>
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)} 
          type='password'
          name='password' 
          placeholder='password' 
          className="block w-64 border-2 border-hidden focus:border-orange-700  hover:shadow-lg text-md outline-none rounded-sm p-2 mb-5 -mt-2" required/>
        <button className="bg-orange-500 outline-none text-white items-center rounded-md w-36 p-2 mb-4 hover:bg-orange-400">Register</button>
        <p className="opacity opacity-90 text-gray-400">
         Already have an account
         <Link to='/login' className="text-orange-400 p-2">Login</Link> 
        </p>
      </form>
    </div>
  )
}

export default Register