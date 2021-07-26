import React, { Component } from 'react'  
// import { Fragment } from 'react';
import Header from './header' 
import Footer from './footer'
import RegisterComp from './registercomponent'  
function RegisterFunction() {  
    return (   
       
            <div> 
            <Header /> 
              <RegisterComp/>
                <Footer/>
                </div>
           
           );  
         }  
           
         export default RegisterFunction;  