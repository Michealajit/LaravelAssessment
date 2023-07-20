// Navigation.js
import React,{ useContext,useState,useEffect,} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Authprovider';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const[user,setUser] = useState(undefined);
  const { isAuthenticated } = useContext(AuthContext);
  useEffect( ()=>{

    if(localStorage.getItem('user')){
     // var name = ;
        setUser(JSON.parse(localStorage.getItem('user')) );
     // console.log();
    }

  },[]);

  const handleLogout = () =>{
    localStorage.clear();
    navigate("/");
  }
  return (
    <nav className="flex justify-between items-center mb-4">
      {isAuthenticated ? (
        <ul class="flex space-x-6 mr-6 text-lg">
          <li>
            <span>Welcome </span>{user ? user.name: undefined}
          </li>
          <li>
            <Link to="/listings/manage">Manage Listings</Link>
          </li>
          <li>
           
              <button type="submit" onClick={handleLogout}>Logout</button>
          
          </li>
        </ul>
      ) : (
        <ul class="flex space-x-6 mr-6 text-lg">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
