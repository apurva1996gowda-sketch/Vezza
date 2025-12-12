import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import { Rating } from "@mui/material";
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
    const [starrate, setStarrate] = useState(3)
    console.log(products)
    // if (Number(products.rating.rate) >= 4) {
    //     setStarrate(4)
    // }
    // else {
    //     setStarrate(3)
    // }
    return (
        <Box sx={{ marginTop: '90px', borderTop: '0.5px solid #000000', width: '100%' }}>
            <Grid container >
                <Grid size={4} >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', borderRight: '0.5px solid #000000', p: '40px 135px 60px 135px' }}>
                        <Link style={{ color: 'black', fontSize: '16px', textDecoration: 'none' }}>Woman’s Fashion</Link>
                        <Link style={{ color: 'black', fontSize: '16px', textDecoration: 'none' }}>Men’s Fashion</Link>
                        <Link style={{ color: 'black', fontSize: '16px', textDecoration: 'none' }}>Electronics</Link>
                        <Link style={{ color: 'black', fontSize: '16px', textDecoration: 'none' }}>Home & Lifestyle</Link>
                        <Link style={{ color: 'black', fontSize: '16px', textDecoration: 'none' }}>Medicine</Link>
                        <Link style={{ color: 'black', fontSize: '16px', textDecoration: 'none' }}>Sports & Outdoor</Link>
                        <Link style={{ color: 'black', fontSize: '16px', textDecoration: 'none' }}>Baby’s & Toys</Link>
                        <Link style={{ color: 'black', fontSize: '16px', textDecoration: 'none' }}>Groceries & Pets</Link>
                        <Link style={{ color: 'black', fontSize: '16px', textDecoration: 'none' }}>Health & Beauty</Link>
                    </Box>
                </Grid>
                <Grid size={8} sx={{ p: '40px 60px' }}>
                    <img src="/Homepage.png" alt="homepage" style={{ maxWidth: '892px', maxHeight: '344px' }} />
                </Grid>
            </Grid>

            <Box sx={{ m: '135px', mt: '70px' }}>
                <Typography sx={{ fontSize: '36px', fontWeight: '600', textAlign: 'center', mb: '25px' }}>Explore Our Products</Typography>
                <Grid container spacing={4}>
                    {visibleprod?.map((product) => {
                        return (
                            <Grid size={3} key={product.id}>
                                <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <Box sx={{ height: '230px', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#F5F5F5' }}>
                                        <img src={product.image} alt={product.title} style={{ width: '150px', height: '180px' }} />
                                    </Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '16px', height: '50px', overflow: 'hidden' }}>{product.title} </Typography>
                                    <Box sx={{ display: 'flex', gap: '5px' }}>
                                        <Typography sx={{ fontSize: '14px' }}>{product.rating.rate} </Typography>

                                        <Rating value={starrate} readOnly size="small" />

                                        <Typography sx={{ fontSize: '14px', color: 'blueviolet' }}>{`(${product.rating.count})`} </Typography>
                                    </Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '16px', height: '30px', color: 'red' }}>${product.price} </Typography>
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
