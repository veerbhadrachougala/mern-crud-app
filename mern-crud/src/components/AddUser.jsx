import {FormControl,FormGroup,Input,InputLabel,Typography,styled,Button} from "@mui/material";
import React from "react";
import {useNavigate} from 'react-router-dom'
import { useState } from "react";
import { addUser } from "../service/api";
const Container = styled(FormGroup)`
    width : 50%;
    margin : 5% auto 0 auto;
    & > div {
        margin-top : 20px;
    }
`
const defaultValue ={
    fullname : '',
    username : '',
    email : '',
    phonenumber : ''
}

function AddUser() {

    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const OnValueChange = (e)=>{
        setUser({ ...user,[e.target.name]: e.target.value});
    }

    const addUserDetail = async ()=>{
        await addUser(user);
        navigate('/AllUser')
    }

  return (
      <Container>
        <Typography varient='h4'>Add User</Typography>
        <FormControl>
          <InputLabel>Full Name</InputLabel>
          <Input onChange={(e)=> OnValueChange(e)} name="fullname"/>
        </FormControl>
        <FormControl>
          <InputLabel>User Name</InputLabel>
          <Input onChange={(e)=> OnValueChange(e)} name="username" />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e)=> OnValueChange(e)} name="email"/>
        </FormControl>
        <FormControl>
          <InputLabel>Phone Number</InputLabel>
          <Input onChange={(e)=> OnValueChange(e)} name="phonenumber" />
        </FormControl>
        <FormControl>
            <Button variant='contained' onClick={()=> addUserDetail()}>Add User</Button>
        </FormControl>
        
      </Container>
  );
}

export default AddUser;
