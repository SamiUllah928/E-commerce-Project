import React from 'react'
import { Avatar, Button, createTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SubjectOutlined } from '@mui/icons-material'
// 
export const Header = () => {
    const auth = useSelector(state => state.Auth.isAuthenticated)
    console.log(auth)

    const navigate = useNavigate()
    let handleSignUp = () => {
        navigate('/Signup')
    }
    let handleLogIn = () => {
        navigate('/Login')
    }
    // let handleHome = () => {
    //     navigate('/Home')
    // }
    let handleDashboard = () => {
        navigate('/Dashboard')
    }
    let handleAddShop = () => {
        navigate('/AddShop')
    }
    const theme = createTheme()
    return (
        <>
            <div className='Header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%', height: '100px', backgroundColor: 'chocolate', boxShadow: theme.shadows[5] }}>
                <div className="logo" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <h1>LOGO</h1>
                </div>
                <div className="links">
                    <ul style={{ display: 'flex', gap: '10%', alignItems: 'center', listStyle: 'none', padding: 0 }}>
                        {/* <li style={{ cursor: 'pointer', color: 'white', fontSize: '18px' }} onClick={handleHome}>Home</li> */}
                        <li style={{ cursor: 'pointer', color: 'white', fontSize: '18px' }} onClick={handleAddShop}>Shop </li>
                        <li style={{ cursor: 'pointer', color: 'white', fontSize: '18px' }} onClick={()=> navigate('/addcategory')}>Category</li>
                        <li style={{ cursor: 'pointer', color: 'white', fontSize: '18px' }} onClick={()=> navigate('/add')}>Product</li>
                        <li style={{ cursor: 'pointer', color: 'white', fontSize: '18px' }}>AboutUs</li>
                    </ul>
                </div>
                <div className="btn" style={{ display: auth ? 'none' : 'flex', gap: '10%' }}>
                    <Button variant='contained' size='small' onClick={handleSignUp}>Signup</Button>
                    <Button variant='contained' size='small' onClick={handleLogIn}>Login</Button>
                </div>

                <div className="btn" style={{ display: !auth ? 'none' : 'flex', display:'flex', gap:'20px' }}>
                    <Button variant='contained' size='medium' color='success' onClick={handleDashboard}>Dashboard</Button>
                    <Avatar alt="Travis Howard" src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg"></Avatar>
                </div>
            </div>
            <SubjectOutlined className='linkss_bar' sx={{ position: 'fixed', top: '90%', left: '90%', fontSize: '35px', boxShadow: theme.shadows[10], cursor: 'pointer' }} />

            <div className="linkss">

                <ul>
                    {/* <li style={{ cursor: 'pointer', color: 'white', fontSize: '18px' }} onClick={handleHome}>Home</li> */}
                    <li style={{ cursor: 'pointer', color: 'white', fontSize: '18px' }}>Content</li>
                    <li style={{ cursor: 'pointer', color: 'white', fontSize: '18px' }}>Profile</li>
                    <li style={{ cursor: 'pointer', color: 'white', fontSize: '18px' }}>Links</li>
                </ul>
            </div>
            {/* <div style={{marginTop:'20px', width:'100%'}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA2_CaJ7t_ulr1svUwXbDw-isa6gk9wo5YDBC1mEbB&s" alt="No internet" style={{width:'97%', height:'auto'}} />
            </div> */}

        </>
    )
}
