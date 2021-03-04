import React, {useEffect} from 'react'
import {Box, Input, Button} from '@chakra-ui/react'
import {Link, useHistory} from 'react-router-dom'
import useForm from '../hooks/useForm'
import AUTH_SERVICE from '../services/auth'

export default function Sign() {
  const [form, handleInput] = useForm()

  const history = useHistory()
  const handleSubmit = async e =>{
    e.preventDefault()
   const response = await AUTH_SERVICE.SIGNUP(form).catch(e => console.log(e))
      if(response){
        history.push('/')
      } 
      else{
        alert('No se pudo chavo')
      }
  }
  
  return (
    <Box as="main" d="flex" w="100vw" h="100vh" alignContent="center" justifyContent="center">
      <Box as="form" d="flex" flexDirection="column" justifyContent="center" alignContent="center" >
        <Input
        type="email"
        name="email"
        onChange={handleInput}
        placeholder="Email"
        />
        <Input
        type="password"
        name="password"
        onChange={handleInput}
        placeholder="Password"
        />
        
        <Button
          type="submit"
          onClick={handleSubmit}
        >
          Registrarse
        </Button>
        
      
      </Box>
    </Box>
  )
}
