import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { host } from '../config/config';
import { useNavigate } from 'react-router-dom';
const RegisterForm = () => {
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const {name, email, password} = formData;
    const data  = await axios.post(`${host}/users`, {
     name,email,password
    });
    if (data.status === 201){
      localStorage.setItem('user',JSON.stringify(data.data));
        navigate("/");
     }
    
    // Your form submission logic goes here
  };

  return (
    <div className="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24">
      <header className="text-center">
        <h2 className="text-2xl font-bold uppercase mb-1">Register</h2>
        <p className="mb-4">Create an account to post gigs</p>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="inline-block text-lg mb-2">
            Name
          </label>
          <input
            type="text"
            className="border border-gray-200 rounded p-2 w-full"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {/* Error Example */}
          {/* Display your error messages here based on validation */}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="inline-block text-lg mb-2">
            Email
          </label>
          <input
            type="email"
            className="border border-gray-200 rounded p-2 w-full"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {/* Error Example */}
          {/* Display your error messages here based on validation */}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="inline-block text-lg mb-2">
            Password
          </label>
          <input
            type="password"
            className="border border-gray-200 rounded p-2 w-full"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {/* Error Example */}
          {/* Display your error messages here based on validation */}
        </div>

        <div className="mb-6">
          <label htmlFor="password2" className="inline-block text-lg mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            className="border border-gray-200 rounded p-2 w-full"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
          />
          {/* Error Example */}
          {/* Display your error messages here based on validation */}
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="text-white rounded py-2 px-4 bg-black"
          >
            Sign Up
          </button>
        </div>

        <div className="mt-8">
          <p>
            Already have an account?
            <a href="/login" className="text-laravel">
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
