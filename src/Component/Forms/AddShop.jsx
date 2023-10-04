import React, { useState } from 'react'
import { Autocomplete, Box, Button, Paper, TextField, Typography, createTheme } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { addshop, getusershop } from '../../Redux/Action/shopAction';
import { useNavigate } from 'react-router-dom';
export default function AddShop() {
    const addshops = (state=> state.Shop.usershoplist)
    console.log(addshops)
    const navigate = useNavigate()
    const theme = createTheme()
    const dispatch = useDispatch()

        dispatch(getusershop())
    

    const [shopname, setshopname] = useState()
    const [aboutShop, setaboutShop] = useState()
    const [catagery, setcatagery] = useState()
    const [shopavatar, setshopavatar] = useState("https://cdn3.vectorstock.com/i/1000x1000/54/32/avatar-man-with-shopping-store-vector-10805432.jpg")
    const [shopphone, setshopphone] = useState()
    const [country, setcountry] = useState()
    const [city, setcity] = useState()
    const [streetaddress, setstreetaddress] = useState()
    const [shopbanner, setshopbanner] = useState("https://cdn3.vectorstock.com/i/1000x1000/54/32/avatar-man-with-shopping-store-vector-10805432.jpg")
    const [Shoptype, setShoptype] = useState()
    const [Brands, setBrands] = useState()



      return (
        <div className='AddShop'>
            <Box sx={{p:2}}>
            <Typography variant='h3' color={theme.palette.primary.dark} sx={{textAlign:'center'}}>Add Shop</Typography>

                <Paper sx={{display:'flex', flexDirection:'column', alignItems:'center', rowGap:3, p:2}}>
                    <TextField type='text' placeholder='Shop name' onChange={(e)=>setshopname(e.target.value)}/>
                    <TextField type='text' placeholder='About Shop' onChange={(e)=> setaboutShop(e.target.value)}/>
                    <TextField type='text' placeholder=' Shop Category' onChange={(e)=> setcatagery(e.target.value)}/>
                    <TextField type='text' placeholder='Shop Avatar' onChange={(e)=> setshopavatar(e.target.value)}/>
                    <TextField type='number' placeholder='Shop Phone Number' onChange={(e)=> setshopphone(e.target.value)}/>
                    <TextField type='text' placeholder='Shop Country' onChange={(e)=> setcountry(e.target.value)}/>
                    <TextField type='text' placeholder='Shop City' onChange={(e)=> setcity(e.target.value)}/>
                    <TextField type='text' placeholder='Shop Street Address' onChange={(e)=> setstreetaddress(e.target.value)}/>
                    <TextField type='text' label='Shop Banner' onChange={(e)=> setshopbanner(e.target.value)}/>
                    <Autocomplete 
                    sx={{width:'228px'}}
                    options={["Service", "Retail", "Whole Sale"]}
                    renderInput={(p)=> <TextField type='text' {...p} label='Shop Type'/>}
                    onChange={(e,val)=> setShoptype(val)}
                    />
                    <TextField type='text' placeholder='Shop Brand' onChange={(e)=> setBrands(e.target.value)}/>
                    <Button variant='contained'  onClick={()=> dispatch(addshop({
                            shopname,
                            aboutShop,
                            catagery,
                            shopavatar,
                            shopphone,
                            country,
                            city,
                            streetaddress,
                            shopbanner,
                            Shoptype,
                            Brands,
                    }))} >Create <AddIcon/></Button>
                    <Button variant='outlined' onClick={()=> navigate('/allshops')}>Total Shops <ChevronRightIcon/></Button>
                </Paper>
            </Box>

        
        </div>
    )
}
