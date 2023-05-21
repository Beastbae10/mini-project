import './App.css';
import profile from "./image/972105c5a775f38cf33d3924aea053f1.jpg";
import email from "./image/images.png";
import pass from "./image/pass.png";
function LoginUi() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="User Id" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button><a href="#"> Login</a></button>
          </div>
           
            <p className="link" >
              <a href="#" >Forgotten your password?</a> 
              <br></br>
                Don't have an account? <a href='#'>  Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginUi;