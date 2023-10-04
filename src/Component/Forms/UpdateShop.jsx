import { Box, Button, Paper, TextField, Typography, createTheme } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function UpdateShop() {
    const navigate = useNavigate()
    const theme = createTheme()

    const getallshp = useSelector(state => state.Shop.usershoplist)
    console.log(getallshp)

    return (
        <div className='UpdateShop'>
            <Box sx={{margin:'5px', padding:'15px'}}>
                <Paper sx={{display:'flex', flexDirection:'column', alignItems:'center', rowGap:'15px', padding:'20px'}}>
                    <Typography sx={{ textAlign: 'center' }} variant='h3' color={theme.palette.primary.main}>Update Shop:</Typography>
                    <TextField 
                    placeholder='Shop Name'
                    
                    />
                    <Button variant='contained'>Update</Button>
                    <Button variant='contained' onClick={()=>navigate(-1)}>Cancel</Button>
                </Paper>
            </Box>


        </div>
    )
}
