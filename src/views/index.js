import React from "react";
import { Route, Redirect } from "react-router-dom";
import  Layout  from "../components/layout";
import Login from './login'
import Portal from "./portal"
import Dash from "./dash";
import {isAuthenticated} from '../config/auth'


const Pages = [
  {
    name: 'Login',
    path: 'login',
    component:Login
  },
  {
    name: 'Home',
    path: '',
    component:Portal
  }
]

const AdminRoute = ({...rest}) => {
  if(!isAuthenticated()) {
    return <Redirect to='/login'/> 
  }
  return <Route {...rest} />
}

const Views = (props) => {
  return (
    <>
      <Layout>
        <AdminRoute
          exact
          baseName={props.match.path}
          path={props.match.path + "dash"}
          component={Dash}
        />
      {Pages.map((item, i) =>(
        <Route key={i} exact baseName={props.match.path} path={props.match.path + item.path} component={item.component}/>
        ))}
        
      </Layout>
    </>
  );
};

export default Views