import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import { Rating } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, removefromcart } from '../redux/cartSlice';
const HomePage = () => {
    const [products, setProducts] = useState([])
    const [viewall, setViewall] = useState(false)

    const fetchproducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        setProducts(response.data)
    }
    useEffect(() => {
        fetchproducts()
    }, [])
    const visibleprod = viewall ? products : products.slice(0, 4)
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cart)
    const cartitem = (id) => cart.some((item) => item.id == id)

    const handlewomenfashion = () => {
        const womenfashion = products.filter((women) => women.category == "jewelery" || women.category == "women's clothing")
        setProducts(womenfashion)
    }
    const handlemensfashion = () => {
        const mensfashion = products.filter((mens) => mens.category == "men's clothing")
        setProducts(mensfashion)
    }
    const handleelectronics = () => {
        const electronics = products.filter((electronics) => electronics.category == "electronics")
        setProducts(electronics)
    }
    console.log(products)

    return (
        <Box sx={{ marginTop: 2, borderTop: '0.5px solid #000000', width: '100%' }}>
            <Grid container spacing={2} sx={{ px: { xs: 2, sm: 4, md: 0 } }}>
                <Grid item xs={12} md={4} >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2.5,
                        borderRight: { md: '0.5px solid #000' },
                        pr: { md: 10 },
                        pl: { md: 10 },
                        py: { xs: 2, md: 5 }
                    }}>
                        <Link onClick={handlewomenfashion} style={{ color: 'black', fontSize: '16px', textDecoration: 'none' }}>Woman’s Fashion</Link>
                        <Link onClick={handlemensfashion} style={{ color: 'black', fontSize: '16px', textDecoration: 'none' }}>Men’s Fashion</Link>
                        <Link onClick={handleelectronics} style={{ color: 'black', fontSize: '16px', textDecoration: 'none' }}>Electronics</Link>
                        <Link style={{ color: 'black', fontSize: '16px', textDecoration: 'none' }}>Home & Lifestyle</Link>
                        <Link style={{ color: 'black', fontSize: '16px', textDecoration: 'none' }}>Medicine</Link>
                        <Link style={{ color: 'black', fontSize: '16px', textDecoration: 'none' }}>Sports & Outdoor</Link>
                        <Link style={{ color: 'black', fontSize: '16px', textDecoration: 'none' }}>Baby’s & Toys</Link>
                        <Link style={{ color: 'black', fontSize: '16px', textDecoration: 'none' }}>Groceries & Pets</Link>
                        <Link style={{ color: 'black', fontSize: '16px', textDecoration: 'none' }}>Health & Beauty</Link>
                    </Box>
                </Grid>
                <Grid size={8} sx={{ p: '40px 60px', display: { xs: 'none', md: 'flex' } }}>
                    <img src="/Homepage.png" alt="homepage" style={{ maxWidth: '892px', maxHeight: '344px' }} />
                </Grid>
            </Grid>

            <Box sx={{ px: { xs: 2, sm: 4, md: 10 }, my: { xs: 5, md: 10 } }}>
                <Typography sx={{ fontSize: { xs: '24px', md: '36px' }, fontWeight: 600, textAlign: 'center', mb: 3 }}>
                    Our Top Selling Products
                </Typography>
                <Grid container spacing={4}>
                    {visibleprod?.map((product) => {
                        return (
                            <Grid size={{xs:6,sm:4,md:3}} key={product.id}>
                                <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <Box sx={{ height: '230px', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#F5F5F5' }}>
                                        <img src={product.image} alt={product.title} style={{ width: '150px', height: '180px' }} />
                                    </Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '16px', height: '50px', overflow: 'hidden' }}>{product.title} </Typography>
                                    <Box sx={{ display: 'flex', gap: '5px' }}>
                                        <Typography sx={{ fontSize: '14px' }}>{product.rating.rate} </Typography>

                                        <Rating value={(product.rating.rate)} precision={0.5} readOnly size="small" />

                                        <Typography sx={{ fontSize: '14px', color: 'blueviolet' }}>{`(${product.rating.count})`} </Typography>
                                    </Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '16px', height: '30px', color: 'red' }}>${product.price} </Typography>
                                    {cartitem(product.id) ?
                                        <Button variant='contained' onClick={() => dispatch(removefromcart(product.id))} sx={{ bgcolor: '#fa1d0dff' }}>Remove from cart</Button>
                                        :
                                        <Button variant='contained' onClick={() => dispatch(addtocart(product))}>Add to Cart</Button>
                                    }
                                </Paper>
                            </Grid>
                        )
                    })}
                    {products.length > 4 && (
                        <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant='contained' onClick={() => setViewall(!viewall)}>{viewall ? "back" : "Viewall"} </Button>
                        </Grid>
                    )}
                </Grid>
            </Box>

        </Box>
    )
}

export default HomePage
