import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatecategory } from '../../Redux/Action/categoryAction'
import { useNavigate } from 'react-router-dom'

export default function UpdateCategory() {
    const category = useSelector((state)=>state.Category.category)
    console.log(category)
    const [catagery_name ,setcatagery_name] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        setcatagery_name(category.catagery_name)
    },[category])
  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Paper elevation={2} sx={{p:2,width:'500px',display:'flex',flexDirection:'column',rowGap:2}}>
        <Typography variant='h5'>Update Category</Typography>
        <TextField
        value={catagery_name ? catagery_name : ''}
        placeholder='Category name'
        onChange={(e)=>setcatagery_name(e.target.value)}
        />
        <Button variant='contained' onClick={()=>dispatch(updatecategory(category._id,{catagery_name:catagery_name}))}>Update</Button>
        <Button onClick={()=>navigate(-1)}>Back</Button>
        </Paper>
    </Box>
  )
}
