import { Box, Button, Grid, Paper, Snackbar, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearcart } from '../redux/cartSlice'

const CheckoutPage = () => {
    const [opensnackbar, setOpensnackbar] = useState(false)
    const cart = useSelector((state) => state.cart.cart)
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.count), 0)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleplaceorder = () => {
        setOpensnackbar(true)
        dispatch(clearcart())

    }
    return (
        <Box sx={{ marginTop: 2, px:2,py:5, borderTop: '0.5px solid #000000', width: '100%', bgcolor: '#f6f7faff' }}>
            <Typography variant='h4' sx={{ mb: 5 }}>Billing Details</Typography>
            <Grid container>
                <Grid size={{ md: 6 ,sx:12,sm:12}} sx={{}}>
                    <Stack spacing={3}>
                        <Stack spacing={1}>
                            <label htmlFor="">First Name*</label>
                            <TextField sx={{ width: '100%',maxWidth:'400px', backgroundColor: '#ebe4e4ff' }} />
                        </Stack>
                        <Stack spacing={1}>
                            <label htmlFor="">Address*</label>
                            <TextField sx={{ width: '100%',maxWidth:'400px', backgroundColor: '#ebe4e4ff' }} />
                        </Stack>
                        <Stack spacing={1}>
                            <label htmlFor="">Apartment, floor, etc. {`(optional)`}</label>
                            <TextField sx={{ width: '100%',maxWidth:'400px', backgroundColor: '#ebe4e4ff' }} />
                        </Stack>
                        <Stack spacing={1}>
                            <label htmlFor="">Town/City*</label>
                            <TextField sx={{ width: '100%',maxWidth:'400px', backgroundColor: '#ebe4e4ff' }} />
                        </Stack>
                        <Stack spacing={1}>
                            <label htmlFor="">Phone Number*</label>
                            <TextField sx={{ width: '100%',maxWidth:'400px', backgroundColor: '#ebe4e4ff' }} />
                        </Stack>
                        <Stack spacing={1}>
                            <label htmlFor="">Email Address*</label>
                            <TextField sx={{ width: '100%',maxWidth:'400px', backgroundColor: '#ebe4e4ff' }} />
                        </Stack>
                    </Stack>
                </Grid>
                <Grid size={{ md: 6, sx: 12, sm: 12 }} sx={{ pl: 2, pt: 2 }}>
                    <Stack spacing={3}>
                        {cart?.map((item) => {
                            return (
                                <Stack key={item.id} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 2, sm: 2, md: 6 }} sx={{ alignItems: 'center' }}>
                                    <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} sx={{ alignItems: 'center' }}>
                                        <img src={item.image} alt="" style={{ width: '50px', height: '50px' }} />
                                        <Typography sx={{ width: '200px', height: '26px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</Typography>
                                    </Stack>
                                    <Stack direction='row' sx={{ alignItems: 'center' }}>
                                        <Typography>${item.price * item.count}</Typography>
                                        {item.count > 1 && <Typography>{`(${item.count}items)`}</Typography>}
                                    </Stack>
                                </Stack>
                            )
                        })}
                    </Stack>
                    <Stack sx={{ width:'100%',maxWidth: '400px', height: '250px', bgcolor: 'white', padding: 2, mt: 5 }} spacing={2}>

                        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                            <Typography variant='h6'>Subtotal: </Typography>
                            <Typography variant='h6'>${Math.ceil(subtotal)}</Typography>
                        </Stack>
                        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                            <Typography variant='h6'>Shipping Fee: </Typography>
                            <Typography variant='h6' color='success'>FREE</Typography>
                        </Stack>
                        <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                            <Typography variant='h6'>Total: </Typography>
                            <Typography variant='h6'>${Math.ceil(subtotal)}</Typography>
                        </Stack>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                            <Button onClick={handleplaceorder} variant='contained' sx={{ backgroundColor: '#ee790cff', borderRadius: '15px' }}>Place Order</Button>
                        </Box>
                    </Stack>

                </Grid>
            </Grid>
            <Snackbar
                open={opensnackbar}
                message='Order placed successfully'
                autoHideDuration={3000}
                onClose={() => {
                    setOpensnackbar(false)
                    navigate('/dashboard')
                }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }} />

        </Box>
    )
}

export default CheckoutPage
