import React, { Component } from 'react'  

export class LoginEmpComp extends Component { 
    render() {  
        return ( 
            <div class="wrapperlogin fadeInDown">
            <div id="formContent">
          
              <div class="fadeIn first">
              <i class="fa fa-user" aria-hidden="true" id="icon"></i>
          
              </div>
              <form>
                <input type="text" id="login" class="fadeIn second" name="login" placeholder="Name" />
                <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password" />
                <input type="submit" class="fadeIn fourth" value="Log In" />
              </form>
              <div id="formFooter">
                <a class="underlineHover" href="#">Forgot Password?</a>
              </div>
          
            </div>
          </div>
                     )  
        }  
        }  
        
        export default LoginEmpComp