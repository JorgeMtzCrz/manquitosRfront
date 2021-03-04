import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import Profile from './Components/Profile'
import User from './Components/User'
import {useAuth} from '../AuthContext'

export default function AuthApp(){
  const [{user}] = useAuth()
  console.log(user)
  return(
    <>
      <Switch>
      {user.role === "Admin" ? (
        user.role=== "User" ? <Redirect to="/app/user"/> : (
        <Route exact path="/app/profile" component={Profile}/>
        )
      ):(
        <Route exact path="/app/user" component={User}/>
      )

      }
      {user.role === "Admin" ?(
        <Redirect to="/app/profile"/>

      ):(
        <Redirect to="/app/user"/>

      )

      }
      
      </Switch>
    </>
  )
}
