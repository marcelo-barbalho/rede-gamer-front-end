import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {createUser} from '../../store/user/user.action'

const UserForm = () => {

    const [form, setForm] = useState() 
    const dispatch  = useDispatch()

    const handleChange = (attr) => {
        const {value, name} = attr.target
        setForm({
            ...form,
            [name]: value
          })
        } 

        const validSubmit = () => form?.password===form?.passwordTest&&form?.password
        
        const submitForm = async () => {
   
            await dispatch(createUser(form))
        }


  return (
    <>
        <Container>
            <Name placeholder="nome" name='name' onChange={handleChange} type='text'/>
            <Email placeholder="email" name='email' onChange={handleChange} type='email'/>
            <User placeholder="usuário" name='username' onChange={handleChange} type='text'/>
            <Birthdate placeholder="data de nascimento" name='birthdate' onChange={handleChange} type='date'/>
            <LikedGames placeholder="jogos curtidos" name='likedGames' onChange={handleChange} type='text'/>
            <Password placeholder="senha" name='password' onChange={handleChange} type='password'/>
            <Password placeholder="confirme sua senha" name='passwordTest' onChange={handleChange} type='password'/>
            {validSubmit()&&<button onClick={()=>submitForm()}>Enviar</button>}
        </Container>
    </>
  )
}

export default UserForm

const Container = styled.div`
display:flex;
flex-direction:column;
width:50%;
background-color:green;
`

const Name = styled.input`
background-color:black;
padding:3px;
margin:3px;
color:red;
`
const Email = styled.input`
background-color:black;
padding:3px;
margin:3px;
color:red;
`
const User = styled.input`
background-color:black;
padding:3px;
margin:3px;
color:red;
`
const Birthdate = styled.input`
background-color:black;
padding:3px;
margin:3px;
color:red;
`
const LikedGames = styled.input`
background-color:black;
padding:3px;
margin:3px;
color:red;
`
const Password = styled.input`
background-color:black;
padding:3px;
margin:3px;
color:red;
`