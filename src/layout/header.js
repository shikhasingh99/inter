import React, { Component } from 'react'  
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
// import { Link } from 'react-router';
// import {Link} from 'react-router-dom';
// import {Link} from 'react-router-dom';


// import {Route, Switch, Link} from "react-router-dom";

import Register from "./register";

export class Header extends Component {  
    render() {  
        return (  
       
            <Router >
         <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center">
      <h1 class="logo me-auto"><a href="index.html">ODC<span>.</span></a></h1>
      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto active" href="/">Home</a></li>
          <li><a class="nav-link scrollto" href="/about">About</a></li>
          <li><a class="nav-link scrollto" href="/register">Register</a></li>
         
          {/* <li> <Link to="register" className="nav-link scrollto">
          Register
              </Link></li> */}
          {/* <li><a href="blog.html">Blog</a></li> */}
          <li class="dropdown"><a href="login"><span>Login</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="login">Employer</a></li>
              <li><a href="loginemployee">Employee</a></li>
                          </ul>
          </li>
          {/* <li><a class="nav-link scrollto" href="#contact">Contact</a></li> */}
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      </div> 
      </header>

      </Router>  
             
        )  
    }  
}  
  
export default Header