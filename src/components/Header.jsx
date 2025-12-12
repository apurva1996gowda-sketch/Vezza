import React from 'react'
import { AppBar, Box, IconButton, InputBase, List, Paper, TextField, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Box>
            {/* Top header */}
            <Box sx={{ width: '1440px', height: '48px', backgroundColor: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Typography sx={{ color: '#FAFAFA', fontSize: '14px', fontFamily: 'Poppins' }}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</Typography>
                    < Link style={{ color: '#FAFAFA', fontSize: '14px', fontFamily: 'Poppins', fontWeight: '600', textDecorationColor: '#FAFAFA' }}>ShopNow</Link >
                </Box>
            </Box>

            {/* Topbar */}
            <AppBar sx={{ position: 'absolute', top: '60px', left: '135px', width: '1170px', backgroundColor: '#fff' }} elevation={0}>
                <Toolbar sx={{ height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* App title */}
                    <Typography sx={{ fontWeight: '700', fontSize: '24px', color: '#000000',fontFamily:'cursive' }}>vezza</Typography>
                    {/* Navigations */}
                    <Box sx={{ display: 'flex', gap: '48px' }}>
                        <Link to={'/dashboard'} style={{ color: '#000', fontFamily: 'Poppins', fontSize: '16px', textDecoration: 'none' }}>Home</Link>
                        <Link style={{ color: '#000', fontFamily: 'Poppins', fontSize: '16px', textDecoration: 'none' }}>Contact</Link>
                        <Link style={{ color: '#000', fontFamily: 'Poppins', fontSize: '16px', textDecoration: 'none' }}>About</Link>
                        <Link to={'/register'} style={{ color: '#000', fontFamily: 'Poppins', fontSize: '16px', textDecoration: 'none' }}>Sign Up</Link>
                    </Box>
                    {/* Search field*/}
                    <Paper sx={{ border: '0.5px solid gray', backgroundColor: '#f5f5f5', p: '7px 0px 7px 12px', height: '38px', display: 'flex', alignItems: 'center' }} elevation={0}>
                        <InputBase placeholder='what are you looking for?' sx={{ fontSize: '14px' }} />
                        <IconButton sx={{ p: 0, m: 0 }}>
                            <SearchIcon sx={{ p: 0, m: 0 }} />
                        </IconButton>
                    </Paper>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
