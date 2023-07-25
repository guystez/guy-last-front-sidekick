
import { Button } from "react-bootstrap"
import { Link, Navigate, NavLink } from "react-router-dom"


function LoginPage({login,logout}){
   function formlogin(e){
       e.preventDefault()
       login(e.target.username.value, e.target.password.value)
       
   }
return (
    <div>
    <nav className="login-page-nav">
          <ul>
        
          {localStorage.getItem('username') ? (
  <>
 <Navigate to="/home" />
    <li><a href="http://localhost:3000/home">Home</a></li>
    <li><a href="http://localhost:3000/supersearch">Super Search</a></li>
    <li><a href="http://localhost:3000/openers/">Openers</a></li>
    <li><a href="http://localhost:3000/chatpayment/">Chat</a></li>
    <NavLink to="/home" className="me-auto" onClick={logout}>Logout</NavLink>
    <div className='me-auto3'>
      <span className='me-auto3__text'>Logged in as: {localStorage.getItem('username')}</span>
    </div>
  </>
) : (
  <>
    <li><a href="http://localhost:3000/home">Home</a></li>
    <li>
                    <a href="http://localhost:3000/upgrade/">Upgrade</a>
                  </li>
  </>
)}


            
          </ul>
        </nav>
        
       <div >
       <h2 style={{color: "white"}}>Please Login</h2>

           <form className="login-page" onSubmit={formlogin}>
               <input className="heading6" type="text" name="username" placeholder="Enter Username" value={'guest'}/>
               <input type="password" name="password" placeholder="Enter Password" value={'1111'}/>
               <input className="login-button" type="submit"/>
               אינך משתמש רשום?<Button className="register"><a href="http://localhost:3000/signup/" style={{'color':'green'}}>הרשם מיד</a></Button>
              
           </form>
       </div>
       </div>
   )
}


export default LoginPage
