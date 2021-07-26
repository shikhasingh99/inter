import React, { Component } from 'react'  
// import { Fragment } from 'react';
import Header from './header' 
import Footer from './footer'
import LoginEmpComp from './loginempcomponent'  
function LoginEmployee() {  
    return (   
       
            <div> 
            <Header /> 
              <LoginEmpComp/>
                <Footer/>
                </div>
           
           );  
         }  
           
         export default LoginEmployee;  