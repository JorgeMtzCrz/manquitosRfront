import React, {useEffect} from 'react'
import {Box, Input, Button, Heading, useToast} from '@chakra-ui/react'
import {Link, useHistory} from 'react-router-dom'
import useForm from '../hooks/useForm'
import AUTH_SERVICE from '../services/auth'
import handleAsync from '../utils/handleAsync'
import {useAuth} from '../AuthContext'
export default function Login() {
  const [form, handleInput] = useForm()
  const toast = useToast()
  const history = useHistory()
  const [,dispatch] = useAuth()

  const handleSubmit = async e =>{
    e.preventDefault()
   const {user} = await handleAsync(()=>AUTH_SERVICE.LOGIN(form))
      if(user){
        dispatch({type: 'LOGIN', payload: {user}})
      } 
      else{
        toast({
          position: 'top',
          title: 'Error',
          description: 'Email o password incorrecto',
          status: 'error',
          duration: 3000,
          isClosable: true
        })
      }
  }
  
  return (
    <Box as="main" d="flex" w="100vw" h="100vh" alignContent="center" justifyContent="center">
      <Heading as="h1">
        Es el Login
      </Heading>
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
