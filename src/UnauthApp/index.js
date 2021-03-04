import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './Login'
import Sign from './Sign'

export default function UnauthApp(){
  return(
    <>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Sign}/>
        <Redirect to="/"/>
      
      </Switch>
    </>
  )
}