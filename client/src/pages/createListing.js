import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { host } from '../config/config';

const CreateGigForm = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState(undefined);
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/Login");
    }else{
        setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);
  const [formData, setFormData] = useState({
    company: '',
    title: '',
   // location: '',
  //  email: '',
   // website: '',
  //  tags: '',
   
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData((prevFormData) => ({ ...prevFormData, logo: file }));
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.user_id = user.id;
    
    const  data  = await axios.post(`${host}/listings`, {
      ...formData
     });
     console.log(data.status);
     if (data.status === 201){
     // localStorage.setItem('user',JSON.stringify(data.data));
        navigate("/");
     } 
  };

  return (
    <div className="max-w-lg mx-auto mt-24 mb-150">
      <header className="text-center">
        <h2 className="text-2xl font-bold uppercase mb-1">
          Create a Gig
        </h2>
        <p className="mb-4">Post a gig to find a developer</p>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="company" className="inline-block text-lg mb-2">Company Name</label>
          <input type="text" className="border border-gray-200 rounded p-2 w-full" name="company" value={formData.company} onChange={handleChange} />
          {/* Add error message display if needed */}
        </div>

        <div className="mb-6">
          <label htmlFor="title" className="inline-block text-lg mb-2">Job Title</label>
          <input type="text" className="border border-gray-200 rounded p-2 w-full" name="title" placeholder="Example: Senior Laravel Developer" value={formData.title} onChange={handleChange} />
          {/* Add error message display if needed */}
        </div>

        {/* ... Other form fields ... */}

        {/* <div className="mb-6">
          <label htmlFor="logo" className="inline-block text-lg mb-2">Company Logo</label>
          <input type="file" className="border border-gray-200 rounded p-2 w-full" name="logo" onChange={handleFileChange} />
          {/* Add error message display if needed */}
       {/* </div> */}

        <div className="mb-6">
          <label htmlFor="description" className="inline-block text-lg mb-2">Job Description</label>
          <textarea className="border border-gray-200 rounded p-2 w-full" name="description" rows="10" placeholder="Include tasks, requirements, salary, etc" value={formData.description} onChange={handleChange}></textarea>
          {/* Add error message display if needed */}
        </div>

        <div className="mb-32">
          <button className="bg-laravel text-white rounded py-2 px-4 hover:bg-black">Create Gig</button>

          <a href="/" className="text-black ml-4">Back</a>
        </div>
      </form>
    </div>
  );
};

export default CreateGigForm;
