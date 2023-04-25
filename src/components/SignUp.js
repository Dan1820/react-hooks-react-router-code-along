import React from "react";

function SignUp(){
  return(
  <div>
    <h1>Signup</h1>
    <form >
      <div>
          <input type="text" name="userName" placeholder="UserName" />
        </div>
      <div>
        <input type="text" name="fullnames" placeholder="fullnames" />
        </div>
        <div>
          <input type="text" name="email" placeholder="email" />
        </div>
        
        <div>
          <input type="password" name="password" placeholder="password" />
        </div>
        <input type="submit" value="Submit" />
        
      
    </form>
  </div>
    

  )
}
export default SignUp