import React from "react";
import '../components/SingUp/singIn.css'
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';
import FacebookSignIn from './FacebookSignIn';

import { Link as LinkRouter } from 'react-router-dom';


function SignIn(props) {

  const handleSubmit = (event) => {
		event.preventDefault()
		const logedUser = {
			email: event.target[0].value,
			password: event.target[1].value,
			from: "form-Signup"
		}
		props.signInUser(logedUser)
	}
  
  return (
    
    <div class="login-box">
  <h2>Login</h2>
  <form onSubmit={handleSubmit}>
    <div class="user-box">
      <input type="email" name="email" placeholder="Email address"/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password" name="password" />
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <button type="submit" className="btn btn-primary btn-block"> SignIn  </button>
    </a>
    <FacebookSignIn/>
    <div className="text-center">Have an account? <LinkRouter to="/SignUp">SignUp</LinkRouter> </div>
  </form>
</div>
  );
}
const mapDispatchToProps = {
	signInUser: userActions.signInUser,

}

export default connect(null, mapDispatchToProps)(SignIn);
