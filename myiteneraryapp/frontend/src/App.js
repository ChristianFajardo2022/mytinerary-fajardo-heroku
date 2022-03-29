import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/navBar'
import Home from './pages/Home'
import Cities from './pages/cities'
import Footer from './components/footer'
import "bootstrap/dist/css/bootstrap.min.css";
import React,{useEffect, useState} from  "react"
import Detail from './components/detail'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import Snackbar from './pages/Snackbar';
import { connect } from 'react-redux';
import userActions from './redux/actions/userActions';

function App(props) {
  useEffect(() => {
 
    if(localStorage.getItem('token')!== null){
      const token = localStorage.getItem("token")
      props.VerificarToken(token)
    }
  },[])
  return (
    <BrowserRouter>
        <div className="App">

          <ResponsiveAppBar/>
          <Routes>

          <Route path="*" element={<Home/>}/>
          <Route path="Cities" element={<Cities/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          </Routes>
          <Snackbar/>
          <Footer/>


        </div>
    </BrowserRouter>
      

  );
}
const mapDispatchToProps = {
	VerificarToken: userActions.VerificarToken,

}



export default connect(null, mapDispatchToProps)(App);
