import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteshop, getallshops } from '../../Redux/Action/shopAction'
import { Box, Button, Typography, createTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function GetallShops() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const theme = createTheme()
    
const getallshp = useSelector(state=> state.Shop.usershoplist)
console.log(getallshp)


useEffect(()=>{
    dispatch(getallshops())
},[dispatch])
   
  return (
    <div className='GetallShops'>
      <Typography variant='h2' sx={{textAlign:'center'}} color={theme.palette.primary.main}>Total Shops: {getallshp.length}</Typography>
  <ul >

        {
          getallshp?.map((stor)=><Box sx={{display:'flex', flexDirection:'column'}}>
             <Typography><b style={{fontSize:'20px', padding:'5px'}}>Shop Name:</b>{stor.shopname}</Typography>
             <Typography><b style={{fontSize:'20px', padding:'5px'}}>Shop Type:</b>{stor.Shoptype}</Typography>
             <Typography><b style={{fontSize:'20px', padding:'5px'}}>About Shop:</b>{stor.aboutShop}</Typography>
             <Typography><b style={{fontSize:'20px', padding:'5px'}}>Shop Category:</b>{stor.catagery}</Typography>
             <Typography><b style={{fontSize:'20px', padding:'5px'}}>Shop Country:</b>{stor.country}</Typography>
             <Typography><b style={{fontSize:'20px', padding:'5px'}}>Shop City:</b>{stor.city}</Typography>
             <Typography><b style={{fontSize:'20px', padding:'5px'}}>Shop Phone Number:</b>{stor.shopphone}</Typography>
             <Typography><b style={{fontSize:'20px', padding:'5px'}}>Shop Banner:</b>{stor.shopbanner}</Typography>
            <Box sx={{display:'flex', gap:2, pt:1,pb:1}}>
            <Button variant='contained' onClick={()=> dispatch(deleteshop(stor._id))}>DELETE</Button>
             <Button variant='contained' onClick={()=> navigate('/UpdateShop')}>Edit</Button>
            </Box>

          </Box>)

              // getallshp.map((stor)=> <li>{stor.Shoptype}</li>)
        }
    </ul>
    </div>
  )
}
