import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function register(ev) {
      ev.preventDefault();
      axios.post('http://localhost:3000/login', {username,password})
        .then(result => {console.log(result)
            if (result.data === 'success') {
                navigate('/home')
            }
        })
        .catch(err => console.log(err));
    } 

  return (
    <div className="bg-blue-50 h-screen flex items-center" id="login">
      <form className="mx-auto p-3 flex justify-center items-center flex-col w-72 mb-12 shadow-sm border-2 border-orange-00 " onSubmit={register}>
        <h2 className="mb-4 text-md font-bold text-orange-700/75">Let&apos;s Chat</h2>
        <input
          value={username}
          onChange={(ev) => setUsername(ev.target.value)} 
          type="text" 
          placeholder='username'
          name='username'  
          className=" w-60 text-md border-2 border-hidden focus:border-orange-700/40 outline-none hover:shadow-lg rounded-sm p-2 mb-4" required/>
         
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)} 
          type='password'
          name='password' 
          placeholder='password' 
          className="block w-60 border-2 border-hidden focus:border-orange-700/40 outline-none hover:shadow-lg text-md  rounded-sm p-2 mb-4" required/>
        <button type='submit' className="bg-orange-500 hover:bg-orange-600 outline-none text-white items-center rounded-md w-32 p-2 mb-4 ">Login</button>
        <div className="flex items-center">
        <p className="opacity opacity-90 text-gray-400 whitespace-nowrap">
         Don&apos;t have an account
        </p>
        <Link to='/register' className="text-orange-400 p-2 ">Register</Link> 
        </div>
      </form>
    </div>
  )
}

export default Register