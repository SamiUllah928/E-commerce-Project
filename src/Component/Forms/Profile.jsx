import { Avatar, Box, Button, TextField, Tooltip, Typography, createTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Edit} from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { Storage } from '../../firebase'
import { useNavigate } from 'react-router-dom';
import { addcategory } from '../../Redux/Action/categoryAction';

export default function Profile() {
    const theme = createTheme()
    let dispatch = useDispatch()
    let  user= useSelector(state => state.Auth)
    console.log(user)
    const [load, setload] = useState()
    const [Image, setImage] = useState()
    const [username, setusername] = useState()
    const [balance, setbalance] = useState()
    const [nameEdit, setnameEdit] = useState(true)
    const [balanceEdit, setbalanceEdit] = useState(true)
    const [select, setselect] = useState()
    const [process, setprocess] = useState()


    let hadleUse = () => {
        let option = {
            catagery_name: select,
            categoryImage: process
        }
        dispatch(addcategory(option))
    }

    let handleUpload = (files) => {
        setload(true)
        const file = files
        const location = ref(Storage, `Category/${user.user?.username}/${file.name}`)
        const upload = uploadBytesResumable(location, file)
        upload.on(
            "state_changed",
            (snapshot) => {
                let progress = snapshot.bytesTransferred / snapshot.totalBytes * 100
                    console.log(Math.round(progress))
            },
            (error) => {
                console.log(error)
            },

            async () => {
                const DownloadUrl = await getDownloadURL(location)
                setImage(DownloadUrl)
                console.log(DownloadUrl)
                setload(false)
            }

        )

    }
    const navigate = useNavigate()
    useEffect(()=>{
   setusername(user.user?.username)
   setbalance(user.user?.balance)
    },[user])
    return (
        <div className='Profile'>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: '10px', marginTop: '20px' }}>
                <Typography sx={{ fontSize: '22px' }}> <i class="fa-solid fa-user" style={{ color: 'red', fontSize: '22px' }}></i> Edit Profile</Typography>
                <Button variant='outlined' color='error' onClick={()=>navigate('/')}>Back to Home</Button>
            </Box>

            <Box sx={{ boxShadow: theme.shadows[5], padding: '60px', margin: "10px 60px " }}>
                {/* <input type="text" placeholder='Name' onChange={(e)=> setselect(e.target.value)} /> */}
                <label htmlFor='upload' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} onChange={(e) => setselect(e.target.value)} onClick={hadleUse}>
                    <Tooltip title='Click to Change Profile'>
                    <Avatar src={Image ? Image : ''} sx={{ width: '150px', height: '150px',cursor:'pointer' }} />

                    </Tooltip>
                    </label>
                <input type="file" name="" id="upload" hidden onChange={(e) => handleUpload(e.target.files[0])} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', marginTop: "10px" }}>
                    <Box sx={{position:'relative'}}>
                    <TextField type="text" varient="filled" placeholder='Username' color='error' sx={{ width: '500px' }} value={username ? username :''} />
                    <Edit sx={{position:'absolute', left:'93%', top:'25%',cursor:'pointer'}} onClick={()=>setnameEdit(!nameEdit)}/>
                    </Box>
                    <TextField type="text" varient="filled" placeholder='Role' color='error' sx={{ width: '500px' }} value={user?.user?.role}/>
                    <Box sx={{position:'relative'}}>
                    <TextField type="text" varient="filled" placeholder='Balance' color='error' sx={{ width: '500px' }} value={balance === 0 || balance ? balance : ''}/>
                    <Edit sx={{position:'absolute', left:'93%', top:'25%',cursor:'pointer'}} onClick={()=>setbalanceEdit(!balanceEdit)}/>

                    </Box>
                </Box>
                <Button variant='contained' color='error' size='small' sx={{ float: 'right', marginTop: '10px' }}>Save</Button>
            </Box>

            <Box sx={{ boxShadow: theme.shadows[13], padding: '60px', margin: "50px 60px " }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', gap: '20px' }}>
                    <Typography variant='h5' sx={{ fontSize: '28px', fontWeight: '700' }}>Change Password</Typography>

                    <TextField type="text" varient="filled" placeholder='Old Password' color='error' sx={{ width: '500px' }} />
                    <TextField type="text" varient="filled" placeholder='New Password' color='error' sx={{ width: '500px' }} />
                </Box>
                <Button variant='contained' color='error' size='small' sx={{ float: 'right', marginTop: '10px' }}>Save</Button>
            </Box>

        </div>
    )
}
