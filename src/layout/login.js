import React, { Component } from 'react'  
// import { Fragment } from 'react';
import Header from './header' 
import Footer from './footer'
import LoginComp from './logincomponent'  
function LoginFunction() {  
    return (   
       
            <div> 
            <Header /> 
              <LoginComp/>
                <Footer/>
                </div>
           
           );  
         }  
           
         export default LoginFunction;  