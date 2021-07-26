import React from 'react';  
import logo from './logo.svg';  
import './App.css';  
import Layout  from './layout/layout'  
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
// import { Link } from 'react-router';

 import Header from "./layout/header"; 
 import Home from "./layout/home"; 
 import Footer from "./layout/footer"; 
 import Register from "./layout/register"; 
import RegisterFunction from './layout/register';
import About from './layout/about';
// import { HashRouter, Route, Switch } from 'react-router-dom';  
function App() {  
  return (
    <div className="App">
      <Router>
        <Switch>
      
        <Route exact={true} path={"/register"} component={RegisterFunction} />
        <Route exact={true} path={"/about"} component={About} />
        <Route path={"/"} component={Home} />
         
          {/* <Route path={RouteEnum.AddCustomer} component={AddCustomerPage} />
          <Route path={RouteEnum.About} component={AboutPage} />
          <Route path={RouteEnum.Transfer} component={TransferPage} />
          <Route path={RouteEnum.Mytransfer} component={MyTransferPage} />
          <Route path={RouteEnum.Branch} component={BranchPage} />
          <Route path={RouteEnum.News} component={NewsPage} />
          <Route path={RouteEnum.Beneficiary} component={BeneficaryPage} />
          <Route path={RouteEnum.Calculator} component={CalculatorPage} />
          <Route path={RouteEnum.Rates} component={RatesPage} />
          <Route path={RouteEnum.Login} component={LoginPage} />
          <Route path={RouteEnum.VerifyOtp} component={VerifyOtp} />
          <Route path={RouteEnum.ForgotPin} component={ForgotPinPage} />
          <Route path={RouteEnum.ForgotPass} component={ForgotPassPage} />
          <Route path={RouteEnum.ResetPass} component={ResetPassPage} />
          <Route path={RouteEnum.ResetPin} component={ResetMpinPage} />
          <Route path={RouteEnum.SetCredentials} component={SetCredentialsPage} />
          <Route path={RouteEnum.Profile} component={MyProfilePage} />
          {/* <Route path={RouteEnum.Register} component={RegisterPage} /> */}
          {/* <Route path={RouteEnum.TermCondition} component={TermConditionPage} />
          <Route path={RouteEnum.More} component={MorePage} />
          <Route path={RouteEnum.Contact} component={ContactPage} />
          <Route path={RouteEnum.notfound} component={NotFoundPage} /> * 
          {/* <Redirect from="*" to="/" /> */}
        </Switch>
      </Router>
     </div>
    // </LoadingIndicator>
  );
}

  
export default App;  