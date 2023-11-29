/** Navigation component shows navigation opation for the users. Show details of the user logged in. Also check the user type to show reports tab. */
import React from 'react'
import avatar from  '../Images/avatar.jpg';
import { menuItems } from '../Utils/MenuItems'
import { signout } from '../Utils/Icons';
import '../Styles/navigation.css';
import { useGlobalContext } from '../Context/globalContext';
import { useNavigate } from "react-router-dom";



function Navigation({active, setActive}) {

    const {logoutUser} = useGlobalContext();
    const navigate = useNavigate();

    const handleSignOut = (event) =>{
    //    logoutUser().then ((res) => {
    //     console.log(`This is logout in navigation ${res}`);
    //     if(res.status === 'success'){
    //         localStorage.clear();
    //         window.location.reload(true);
    //         navigate("");
    //     }
    //    })
    localStorage.clear();
    navigate("/login");
    window.location.reload(true);
    }
    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");
    const userType = localStorage.getItem("userType");

  return (
    <div className='nav'>
        <div className='user-con'>
            <img src={avatar} alt ="" />
            <div className='text'>
                <h2>{userName}</h2>
                <p>{userEmail}</p>
            </div>
        </div>
        <ul className='menu-items'>
            {menuItems.map((item) => {
                return <li  
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className={active === item.id ? 'active' : ''}
                    id = {userType === "user" && item.title === 'Reports' ? 'reportTab' : ''}
                >
                   {item.icon}
                   <span>{item.title}</span>
                </li>
            })}
        </ul>
        <div className='bottom-nav'>
            <li onClick={handleSignOut}>
                {signout} Sign Out
            </li>
        </div>
    </div>
  )
}


export default Navigation