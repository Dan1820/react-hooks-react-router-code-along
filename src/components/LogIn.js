import React from "react";
function LogIn(){
  return(
    <div>
      <h1>Log In</h1>
      <form >
        <div>
          <input type="text" name="username" placeholder="username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
export default LogIn