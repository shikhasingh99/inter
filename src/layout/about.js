
import React, { Component } from 'react'  
// import { Fragment } from 'react';
import Header from './header' 
import Footer from './footer'
import AboutComponent from './aboutcomponent'  
function About() {  
    return (   
       
            <div> 
            <Header /> 
              <AboutComponent/>
                <Footer/>
                </div>
           
           );  
         }  
           
         export default About;  