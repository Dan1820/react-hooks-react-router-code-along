import React from "react";

import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import LogIn from "./LogIn";
import NavBar from "./NavBar";
import Messages from "./Meassages";
import SignUp from "./SignUp";

function App(){
    return(
<div>
<NavBar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
   <Route path="/signup" element={<SignUp />} />
  <Route path="/login" element={<LogIn />} />
  <Route path="/message" element={<Messages />} />

</Routes>
</div>
)}

export default App