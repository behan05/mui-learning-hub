
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Card({ image, title, description }) {
    return (
        <Grid item xs={12} sm={6} md={3} >
            <Box
                p={2}
                border="2px solid #ddd"
                borderRadius={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                textAlign="center"
            >
                <img
                    src={image}
                    alt={title}
                    title={description}
                    style={{
                        minHeight: "auto",
                        maxHeight: "250px",
                        borderRadius: "8px",
                        objectFit: "cover"
                    }}
                />
                <Typography variant="h5" component="h2" mt={1}>
                    {title}
                </Typography>

                <Typography variant='body2' color='textSecondary'>
                    {description}
                </Typography>

                <Button
                    variant='contained'
                    color='secondary'
                    sx={{ mt: 2 }}
                    startIcon={<ShoppingCartIcon />}
                >
                    Buy Now
                </Button>
            </Box>
        </Grid>
    )
}

export default Card;