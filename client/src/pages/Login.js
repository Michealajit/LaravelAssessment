import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { host } from '../config/config';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
   
    // Perform form submission or API call here using the 'email' and 'password' values
   // console.log('Submitted:', { email, password });
   const  data  = await axios.post(`${host}/users/authenticate`, {
    email,password
   });
   console.log(data.status);
   if (data.status === 201){
    localStorage.setItem('user',JSON.stringify(data.data));
      navigate("/");
   } else if(data.status === 202){
        setError(true);
   }
   // Your form submission logic goes here
 };

  

  return (
    <div className="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24">
      <header className="text-center">
        <h2 className="text-2xl font-bold uppercase mb-1">Login</h2>
        <p className="mb-4">Login to post gigs</p>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          {error ? <h1>Login Failed Invaild Creditials</h1>:<></>}
          <label htmlFor="email" className="inline-block text-lg mb-2">Email</label>
          <input
            type="email"
            className="border border-gray-200 rounded p-2 w-full"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Error Example */}
          {/* @error('email') */}
          <p className="text-red-500 text-xs mt-1">{/* Replace with actual error message */}</p>
          {/* @enderror */}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="inline-block text-lg mb-2">Password</label>
          <input
            type="password"
            className="border border-gray-200 rounded p-2 w-full"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Error Example */}
          {/* @error('password') */}
          <p className="text-red-500 text-xs mt-1">{/* Replace with actual error message */}</p>
          {/* @enderror */}
        </div>

        <div className="mb-6">
          <button type="submit" className=" text-white rounded py-2 px-4 bg-black">
            Sign In
          </button>
        </div>

        <div className="mt-8">
          <p>
            Create an account?
            <a href="/register" className="text-laravel">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
