import React, { useState } from 'react'
import { AppBar, Badge, Box, Drawer, IconButton, InputBase, List, ListItem, ListItemText, Paper, TextField, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { loggedOut, notregistered } from '../redux/authSlice';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const login = useSelector((state) => state.auth.login)
    const cart = useSelector((state) => state.cart.cart)
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handlesignup = (e) => {
        e.preventDefault()
        dispatch(notregistered())
        dispatch(loggedOut())
        localStorage.removeItem('login')
        localStorage.removeItem('register')
        navigate('/register')

    }
    const handlehomeclick = () => {
        setOpen(true)
        if (login) {
            navigate('/dashboard')
        }
        else {
            alert("login to your account to continue")
        }
    }
    return (
        <Box>
            {/* Top header */}
            <Box sx={{ width: '100%', px:2,height: '48px', backgroundColor: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Typography sx={{ color: '#FAFAFA', fontSize: '14px', fontFamily: 'Poppins' }}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</Typography>
                    < Link style={{ color: '#FAFAFA', fontSize: '14px', fontFamily: 'Poppins', fontWeight: '600', textDecorationColor: '#FAFAFA' }}>ShopNow</Link >
                </Box>
            </Box>

            {/* Topbar */}
            <AppBar sx={{ position: 'static', backgroundColor: '#fff' }} elevation={0}>
                <Toolbar sx={{ height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',ml:{md:12} }}>
                    {/* App title */}
                    <Typography sx={{ fontWeight: '700', fontSize: '24px', color: '#000000', fontFamily: 'cursive' }}>vezza</Typography>
                    {/* Navigations */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '48px' }}>
                        <Link onClick={handlehomeclick} style={{ color: '#000', fontFamily: 'Poppins', fontSize: '16px', textDecoration: 'none' }}>Home</Link>
                        <Link style={{ color: '#000', fontFamily: 'Poppins', fontSize: '16px', textDecoration: 'none' }}>Contact</Link>
                        <Link style={{ color: '#000', fontFamily: 'Poppins', fontSize: '16px', textDecoration: 'none' }}>About</Link>
                        <Link onClick={handlesignup} style={{ color: '#000', fontFamily: 'Poppins', fontSize: '16px', textDecoration: 'none' }}>Sign Up</Link>
                    </Box>
                    {/* Search field*/}
                    {login &&
                        <Paper sx={{ border: '0.5px solid gray', backgroundColor: '#f5f5f5', p: '7px 0px 7px 12px', height: '38px', display: { xs: 'none', md: 'flex' }, alignItems: 'center' }} elevation={0}>
                            <InputBase placeholder='what are you looking for?' sx={{ fontSize: '14px' }} />
                            <IconButton sx={{ p: 0, m: 0 }}>
                                <SearchIcon sx={{ p: 0, m: 0 }} />
                            </IconButton>
                        </Paper>
                    }
                    {login &&
                        <Link to={'/cart'}>
                            <IconButton>
                                <Badge badgeContent={cart.length} color="primary">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </Link>
                    }
                    {/* Mobile Menu Icon */}
                    <IconButton
                        sx={{ display: { xs: 'block', md: 'none' } }}
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {/* Mobile Drawer */}
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <List sx={{ width: 250 }}>
                    <ListItem
                        button
                        component={Link}
                        onClick={handlehomeclick}
                    >
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem
                        button
                        component={Link} 
                    >
                        <ListItemText primary="Contact" />
                    </ListItem>
                    <ListItem
                        button
                        component={Link} 
                    >
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        onClick={handlesignup}
                    >
                        <ListItemText primary="Sign Up" />
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    )
}

export default Header
