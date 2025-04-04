import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Card({ img, title, description }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box
        p={2}
        bgcolor="lightblue"
        color="#000"
        borderRadius={2}
        textAlign="center"
        height="auto"
        maxWidth="400px"
        minWidth="250px"
      >
        <img
          src={img}
          alt={title}
          title={description}
          width="auto"
          height="150px"
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
        <Typography variant='h6' mt={2}>{title}</Typography>
        <Typography variant='body2' color='textSecondary'>{description}</Typography>
        <Button
          variant='outlined'
          color='primary'
          startIcon={<ShoppingBasketIcon />}
          sx={{ mt: 2 }}
        >
          Buy Now
        </Button>
      </Box>
    </Grid>
  );
}

export default Card;
