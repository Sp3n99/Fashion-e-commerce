import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Slide, styled, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import theme, { Colors } from '../../styles/theme'
import CloseIcon from "@mui/icons-material/Close"
import { Product, ProductImage } from '../../styles/products'
import IncDec from '../ui'
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram"
import FavoriteIcon from '@mui/icons-material/Favorite'

function SlideTransition(props){
    return <Slide direction="down" {...props} />
}

const ProductDetailWrapper = styled(Box)(({ them })=>({
    display: 'flex',
    padding: theme.spacing(4)
}));

const ProductDetailInfoWrapper = styled(Box)(()=>({
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    lineHeight: 1.5
}));

const ProductDetail = ({ open, onClose, product}) => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Dialog
        fullscreen
        TransitionComponent={SlideTransition}
        variant="permanat"
        open={open}
        >
        <DialogTitle 
            sx={{
                background: Colors.secondary
            }}
        >
            <Box display={'flex'} alignItems="center" justifyContent="space-between" 
                sx={{
                    width: {xs: '300px', sm: '400px', md: '500px'},
                }}
            >
                {product.name}
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
            <ProductDetailWrapper flexDirection={matches? 'column': 'row'}>
                <Product sx={{mr: 4}}>
                    <ProductImage src={product.image} />
                </Product>
                <ProductDetailInfoWrapper>
                    <Typography variant="subtitle1">SKU 123</Typography>
                    <Typography variant="subtitle1">Availability: 5</Typography>
                    <Typography sx={{lineHeight: 2}} variant="h4">{product.name}</Typography>
                    <Typography variant="body">{product.description}</Typography>
                    <Typography variant="body">{product.description}</Typography>
                    <Typography variant="body">{product.description}</Typography>
                    <Box
                        sx={{mt: 4}}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <IncDec />
                        <Button variant="contained">Add to cart</Button>
                    </Box>
                    <Box display="flex" alignItems="center" sx={{mt: 4, color: Colors.light}}>
                        <FavoriteIcon sx={{mr: 2}} />
                        Add to Wishlist
                    </Box>
                    <Box sx={{mt: 4, color: Colors.light}}>
                        <FacebookIcon />
                        <TwitterIcon sx={{pl: theme.spacing(4)}}/>
                        <InstagramIcon sx={{pl: theme.spacing(4)}}/>
                    </Box>
                </ProductDetailInfoWrapper>
            </ProductDetailWrapper>
        </DialogContent>
    </Dialog>
  )
}

export default ProductDetail