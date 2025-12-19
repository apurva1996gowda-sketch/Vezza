import { Box, Button, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { addtocart, handledecrement, handleincrement, removefromcart } from '../redux/cartSlice';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import { loggedIn } from '../redux/authSlice';

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()
  const cartitem = (id) => cart.some((item) => item.id == id)
  const navigate = useNavigate()
  const login = useSelector((state) => state.auth.login)
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.count), 0)
  const totalitems = cart.reduce((sum, item) => sum + item.count, 0)


  return (
    <>
      {cart.length == 0 ?
        <Stack sx={{ alignItems: 'center', justifyContent: 'center', gap: '30px', height: '70vh', px: 2 }}>
          <Typography variant='h4'>Your vezza cart is empty</Typography>
          <Button onClick={() => navigate('/dashboard')} variant='contained' sx={{ bgcolor: '#f87c08ff', borderRadius: '15px' }}>Back to Shop</Button>
        </Stack>
        :

        <Box sx={{
          mt: 2,
          p: { xs: 2, md: 5 },
          width: '100%',
          bgcolor: '#e5ecfaff',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          borderTop: '0.5px solid #000000',
        }}>
          <Box sx={{ width: '100%', maxWidth: { md: 900 }, bgcolor: 'white', padding: 2 }}>
            <Typography variant='h4'>Shopping Cart</Typography>
            <Typography sx={{ width: 830, textAlign: 'right' }}>Price</Typography>
            <TableContainer >
              <Table sx={{ borderCollapse: 'separate', borderSpacing: '0px 25px' }} aria-label="simple table" >
                <TableBody >
                  {cart?.map((cartitem) => (

                    <TableRow key={cartitem.id} component={Paper}
                      sx={{
                        display: { xs: 'flex', sm: 'flex', md: 'table-row' },
                        flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                        alignItems: { xs: 'center', sm: 'center', md: 'normal' },
                        justifyContent: 'space-between',
                        mb: 3,
                        p: { xs: 2, md: 0 }
                      }}>
                      <TableCell >
                        <img src={cartitem.image} alt={cartitem.title} style={{ width: '100%', maxWidth: '150px', height: 'auto' }} />
                      </TableCell>
                      <TableCell align="left" sx={{}}>
                        <Typography variant='h6' gutterBottom>{cartitem.title}</Typography>
                        <Typography sx={{ fontSize: '14px', color: 'gray', fontWeight: '500' }} >Eligible for FREE Shipping</Typography>
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                          <Box sx={{ width: '130px', height: '30px', mt: '20px', border: '2px solid #f87b06ff', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            {cartitem.count == 1 ?
                              <IconButton onClick={() => dispatch(removefromcart(cartitem.id))}><DeleteIcon /></IconButton>
                              :
                              <IconButton onClick={() => dispatch(handledecrement(cartitem.id))}><RemoveIcon /></IconButton>
                            }
                            <Typography>{cartitem.count} </Typography>
                            <IconButton onClick={() => dispatch(handleincrement(cartitem.id))}><AddIcon /></IconButton>
                          </Box>
                          <Button sx={{ mt: 2, textTransform: 'capitalize', fontSize: '18px' }}
                            onClick={() => dispatch(removefromcart(cartitem.id))}>Remove from Cart</Button>
                        </Box>
                      </TableCell>
                      <TableCell align="right" sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                        <Typography variant='h5'>${cartitem.price * cartitem.count} </Typography>
                        {cartitem.count > 1 &&
                          <Typography> For {cartitem.count} items</Typography>
                        }
                      </TableCell>
                    </TableRow>

                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button onClick={() => {
                navigate('/dashboard')
                dispatch(loggedIn())
              }
              }
                sx={{ bgcolor: '#f87c08ff', borderRadius: '15px' }} variant='contained'>Back to Shop</Button>
            </Box>
          </Box>

          <Box sx={{
            width: '100%',
            maxWidth: { md: 400 },
            bgcolor: 'white',
            p: 3
          }}>
            <Typography sx={{ color: '#08350eff', display: 'flex' }} gutterBottom>
              <CheckCircleIcon />
              Your order is eligible for free shipping</Typography>
            <Stack direction='row' sx={{ mt: 5, justifyContent: 'space-between' }}>
              <Typography variant='h6'>Subtotal{`(${totalitems} items)`}: </Typography>
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
              <Button onClick={() => navigate('/checkout')} variant='contained' sx={{ backgroundColor: '#ee790cff', borderRadius: '15px' }}>Proceed to checkout</Button>
            </Box>
          </Box>

        </Box>
      }
    </>
  )
}

export default CartPage
