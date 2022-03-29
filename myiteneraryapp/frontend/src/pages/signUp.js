import React, { useState } from "react";
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';
import { Link as LinkRouter } from 'react-router-dom';
import FacebookSignUp from './FacebookSignUp';
import '../components/SingUp/singIn.css'
import { paginationItemClasses } from "@mui/material";



function SignUp(props) {

  const countries =["Unselected", "Colombia", "Argentina", "Chile", "Brasil"]
  const [selectCoun, setSelectCount] = useState("unselected");
  
  const handleSubmit = (event) => {
    event.preventDefault()

    const userData = {
      firtsName: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      photo: event.target[4].value,
      country: selectCoun,
      from: "form-Signup"
    }
    props.signUpUser(userData)

  }

  function selected(event) {
    setSelectCount(event.target.value);
  }

  return (

    <div class="login-box">
      <h2>Create Account</h2>
      <div>
        <select className="select1" onChange={selected} name="Country">
          {countries.map(country =>
          <option>{country}</option>
          )}
        </select>
      </div>
      {selectCoun !== "unselected" ? (
        <form onSubmit={handleSubmit}>
          <div class="user-box">
            <input type="text" name="firtsName" required="" />
            <label>First Name</label>
          </div>
          <div class="user-box">
            <input type="text" name="lastName" required="" />
            <label>Last Name</label>
          </div>
          <div class="user-box">
            <input type="email" name="email" required="" />
            <label>E-Mail</label>
          </div>
          <div class="user-box">
            <input type="password" name="password" required="" />
            <label>Password</label>
            <div class="user-box">
              <input type="text" name="photo" required="" />
              <label>Photo</label>
            </div>
          </div>

          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
          </a>
          <FacebookSignUp country={selectCoun} />
          <div className="text-center">Have an account? <LinkRouter to="/SignIn">SignIn</LinkRouter> </div>
        </form>) : (<h1>Select your Country</h1>)}
    </div>
  );
}
const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,

}

export default connect(null, mapDispatchToProps)(SignUp);
