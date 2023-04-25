import React from "react";
function Messages(){
  return(
    <div>
    <h1>Message Us</h1>
    <form>
      <div>
        <input type="text" name="email" placeholder="Enter your email" />
      </div>
      <div>
        <input type="text" name="text" placeholder="message us" />
      </div>
      <div>
        <input type="submit" name="Submit" />
      </div>
    </form>
    </div>
  )
}
export default Messages