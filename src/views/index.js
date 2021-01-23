import React from "react";
import { Route, Redirect } from "react-router-dom";
import  Layout  from "../components/layout";
import Login from './login'
import Portal from "./portal"
import Dash from "./dash";
import FriendPage from '../components/friendpage'
import UserForm from '../components/user/userform'
import {isAuthenticated} from '../config/auth'


const Pages = [
  {
    name: 'Friends',
    path: 'friends',
    component:FriendPage
  },
  {
    name: 'Home',
    path: '',
    component:Portal
  },
  {
    name: 'Dash',
    path: 'dash',
    component:Dash
  },
]

const AuthRoute = ({...rest}) => {
  if(!isAuthenticated()) {
    return <Redirect to='/login'/> 
  }
  return <Route {...rest} />
}

const Views = (props) => {
  return (
    <>
      <Layout>
        <Route
          exact
          baseName={props.match.path}
          path={props.match.path + "login"}
          component={Login}
        />
        <Route
          exact
          baseName={props.match.path}
          path={props.match.path + "adduser"}
          component={UserForm}
        />
      {Pages.map((item, i) =>(
        <AuthRoute key={i} exact baseName={props.match.path} path={props.match.path + item.path} component={item.component}/>
        ))}
        
      </Layout>
    </>
  );
};

export default Views