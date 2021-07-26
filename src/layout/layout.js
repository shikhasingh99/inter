import React, { Component } from 'react';  
import Header from './header'  
import Home from './home'
import Footer from './footer'  
import RegisterFunction from './register'   
// import {  
//     Route, Switch, Redirect  
// } from 'react-router-dom';  
export class Layout extends Component {  
    loading = () => <div class="animated fadeIn pt-1 text-center">Loading...</div>  
    render() {  
        return (  
            <div>  
                <div id="wrapper">  
                 
                    <div id="content-wrapper" class="d-flex flex-column">  
                        <div id="content">  
                            <Header />  
                            <Home/> 
                            <RegisterFunction/>
                            <Footer/> 
                        </div>  
                        <footer />  
                    </div>  
                </div>  
            
            </div>  
        )  
    }  
}  
  
export default Layout  