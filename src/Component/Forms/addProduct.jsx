import { Autocomplete, Box, Button, Paper, TextField, Typography, createTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { getallcategory } from '../../Redux/Action/categoryAction';
import { addproduct } from '../../Redux/Action/ProductAction';
export default function AddProduct() {
    const theme = createTheme()
    const catlist = useSelector(state => state.Category.categorylist)

    const dispatch = useDispatch()

    //States
    const [productTitle, setproductTitle] = useState()
    const [productDescription, setproductDescription] = useState()
    const [catagery, setcatagery] = useState()
    const [images, setimages] = useState()
    const [price, setprice] = useState()
    const [instock, setinstock] = useState()
    const [shop, setshop] = useState()
    const [brand, setbrand] = useState()
    const [discount, setdiscount] = useState()


    const handleSubmit = () => {
        const option = {
            productTitle,
            productDescription,
            images, price, instock,
            shop,
            brand,
            discount
        }
        dispatch(addproduct(option))
    }



    useEffect(() => { dispatch(getallcategory()) }, [dispatch])
    console.log(catagery)
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Paper elevation={2} sx={{ display: 'flex', flexDirection: 'column', width: '50%', p: 2, boxSizing: 'border-box', rowGap: 1 }}>
                <Typography variant='h4' sx={{ textAlign: 'center', color: theme.palette.primary.dark, fontWeight: 600, cursor: 'context-menu' }}>Add Product Form</Typography>
                <TextField type='text' placeholder='Shop Name' onChange={(e) => setshop(e.target.value)} />
                <TextField type='text' placeholder='Product Name' onChange={(e) => setproductTitle(e.target.value)} />
                <TextField type='text' placeholder='Product Description' onChange={(e) => setproductDescription(e.target.value)} />
                <TextField type='number' placeholder='Product Price' onChange={(e) => setprice(e.target.value)} />
                <TextField type='text' placeholder='Product Brand' onChange={(e) => setbrand(e.target.value)} />
                <Autocomplete disablePortal options={catlist?.map((p) => p.name)} renderInput={(cat) => <TextField {...cat} label="Category" />} onChange={(e, val) => setcatagery(val)} />
                <TextField type='url' placeholder='Product Image' onChange={(e) => setimages(e.target.value)} />
                <TextField type='number' placeholder='Product Stock' onChange={(e) => setinstock(e.target.value)} />
                <TextField type='number' placeholder='Product Discount' onChange={(e) => setdiscount(e.target.value)} />
                <Button endIcon={<AddIcon />} variant='contained' onClick={handleSubmit}>Create</Button>
            </Paper>
        </Box>
    )
}
