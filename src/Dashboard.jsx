import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from './Redux/Action/authAction'
import { Button, Box, createTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
// import Groups2Icon from '@mui/icons-material/Groups2';

export default function Dashboard() {
  // 
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  // 



const theme = createTheme()
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let data = useSelector(state => state.Auth)
  console.log(data)

  let handleChangePassword = () => {
    navigate('/changepassword')
  }


  let handleLogoutbtn = () => {
    dispatch(logout())
    navigate('/Login')
  }

  useEffect(() => {
    if (!data.isAuthenticated) {
      navigate('/Login')
    }
  }, [])
  return (
    <div className='Dashboard'>
      <div className="decd" style={{ display: 'flex',justifyContent:'space-evenly',alignItems:'center' }}>
      <Typography variant='h4' color={theme.palette.primary.dark}>User Data:</Typography>
        <Button aria-describedby={id} variant="contained" color='success' onClick={handleClick} sx={{height:'auto'}}>
          For more Info
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 3, width:'600px'}}>
            <b>Loram Ipsum</b> sit amet consectetur adipisicing elit. Quidem possimus sequi esse ullam ratione beatae quasi aliquam totam rerum eveniet neque sint ex ea repudiandae, in reiciendis tempore officiis et?

          </Typography>
        </Popover>
      </div>
      <Box sx={{ bgcolor: 'gray', color: 'white', p: '20px', display: 'flex',flexDirection:'column', alignItems:'justify', gap:'10px' }}>

        <b>Username:</b> {data?.user?.username}
        <b>Email:</b> {data?.user?.email}
        <b>Createdate:</b> {data?.user?.createdat}
        <b>Role:</b> {data?.user?.role}
        <b>Balance:</b> {data?.user?.balance}
      </Box>
      
      <div className="btn1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
        <Button onClick={handleLogoutbtn} variant='contained' >Logout</Button>
        <Button onClick={handleChangePassword} variant='contained' endIcon={<ArrowForwardIcon />}>Change Password</Button>
      </div>
     
    </div>
  )
}
