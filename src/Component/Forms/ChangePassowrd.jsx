import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Button, TextField, Typography, createTheme} from '@mui/material'
import { changepassword } from '../../Redux/Action/authAction'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function ChangePassword() {
  const theme = createTheme()
    let [olld,setolld]=useState()
    let [neew,setneew]=useState()
    let dispatch=useDispatch()
    let navigate=useNavigate()
   
    let data=useSelector(state=>state.Auth)
    console.log(data)


let handleChangepass=()=>{
    let option={
        oldpassword:olld,
        newpassword:neew
    }
   dispatch(changepassword(option))
}
  return (
    <div className='changepassword' style={{display:'flex',flexDirection:'column', alignItems:'center',
    justifyContent:'space-around', gap:"14px", marginTop:'50px'}}>
      <Typography variant='h4' color={theme.palette.primary.dark} sx={{padding:'3px'}}>Change Password:</Typography>
      <TextField id="standard-basic" label="Old Password" variant="standard"  placeholder='Old Password' onChange={(e)=> setolld(e.target.value)}/>
      <TextField id="standard-basic" label="New Password" variant="standard" placeholder='New Password' onChange={(e)=> setneew(e.target.value)} />
        <Button variant='contained' onClick={handleChangepass}>Change</Button>
        <Button variant="contained" onClick={()=>navigate(-1)}><ArrowBackIcon/> Cancel</Button>
    </div>
  )
}
