import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {  Box, Button, TextField, Typography, createTheme } from '@mui/material'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { Storage } from '../../firebase'
import { addcategory, deletecategory, singlecategory } from '../../Redux/Action/categoryAction'
export default function AddCategory() {
    const dispatch = useDispatch()

    let catlist = useSelector(state => state.Category.categorylist)
    console.log(catlist)
    let data = useSelector(state => state.Auth)
    console.log(data)

    const [addcata, setaddcata] = useState()
    const [uploade, setupload] = useState()
    const [load, setload] = useState(false)
    const [prog, setprog] = useState()

    let handleAddcate = () => {
        let option = {
            catagery_name: addcata,
            categoryImage: uploade
        }
        dispatch(addcategory(option))
    }

    let handleUpload = (files) => {
        setload(true)
        const file = files
        const location = ref(Storage, `Category/${data.user?.username}/${file.name}`)
        const upload = uploadBytesResumable(location, file)
        upload.on(
            "state_changed",
            (snapshot) => {
                const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100
                setprog(Math.floor(progress))
            },
            (error) => {
                console.log(error)
            },
            async () => {
                const DownloadUrl = await getDownloadURL(location)
                setupload(DownloadUrl)
                setload(false)
            }

        )
    }
    console.log(addcata && addcata.length)
    const theme = createTheme()
    const navigate = useNavigate()

    const handleEdit = (id)=>{
        console.log(id)
        dispatch(singlecategory(id))
        navigate('/update-category-page')
    }

    return (
        <>

        <div className='AddCategory'>
            <input type='file' id='upload' hidden onChange={(e) => handleUpload(e.target.files[0])} />

            <Box sx={{ m: '20px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                <Typography variant='h5'>Added Category By this Process  </Typography>
                <Box sx={{ width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px auto' }}>
                    {
                        uploade ? <img src={uploade} alt='' style={{ width: '100%', display: 'block', height: '30vh', objectFit: 'contain' }} /> : <Typography fontWeight={600} color={theme.palette.primary.main} >Image Preview</Typography>
                    }
                </Box>
                <TextField type='text' label="Category Name" variant="outlined" onChange={(e) => setaddcata(e.target.value)} />
                <label htmlFor='upload'>
                    <Box variant='outlined' sx={{ bgcolor: theme.palette.primary.dark, textTransform: 'uppercase', borderRadius: '6px', padding: '6px', color: '#fff', cursor: 'pointer', boxShadow: theme.shadows[3], '&:hover': { bgcolor: theme.palette.primary.main, boxShadow: theme.shadows[7] } }} >
                        <Typography sx={{ userSelect: 'none' }}>Upload Image</Typography>
                    </Box>
                </label>
                <Button variant='outlined' color='success' onClick={handleAddcate} disabled={(!uploade || !addcata || addcata.length < 4) ? true : false} >{load ? `Progress: ${prog}%` : "Add Category"}</Button>
            </Box>
        </div>

<Box>
    <Typography variant='h4' sx={{textAlign:'center'}}>{catlist.length}</Typography>
        <ul>

            {
                catlist?.map((cat)=><Box>
                    <Typography>{cat.catagery_name ? cat.catagery_name : cat.name }</Typography>
                    <Typography>{cat._id}</Typography>
                    <Button variant='outlined' size='medium' onClick={()=>dispatch(deletecategory(cat._id))}>Delete</Button>
                    <Button variant='outlined' size='small' onClick={()=>handleEdit(cat._id)}>Edit</Button>

                </Box>)
            }

        </ul>
    
</Box>
    
        </>
    )
}
