import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles={
  display:"inline-blocks",
  width:"50px",
  padding:"12px",
  margin:"0 6px 6px",
  background:"blue",
  textDecoration:"none",
  color:"white",
}





function NavBar(){
  return(
    <div>
      <NavLink to="/" exact style={linkStyles}
      activeStyle={{background:"darkblue"}}
      >
        Home
      </NavLink>
      <NavLink to="/about" exact style={linkStyles}
      activeStyle={{background:"darkblue"}}
      >
        About
      </NavLink>
       <NavLink to="/signup" exact style={linkStyles}
      activeStyle={{background:"darkblue",}}
      >
        SignUp
      </NavLink>
      <NavLink to="/login" exact style={linkStyles}
      activeStyle={{background:"darkblue",}}
      >
        LogIn
      </NavLink>
       <NavLink to="/message" exact style={linkStyles}
      activeStyle={{background:"darkblue",}}
      >
        MessageUs
      </NavLink>
      
     
    </div>
  )
}
export default NavBar