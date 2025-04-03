import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import AddCallIcon from '@mui/icons-material/AddCall';
import Card from "./components/Card";
import { data } from "./productsData/Data";

const App = () => {

  return (
    // <Grid container spacing={1} >

    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <Button variant="outlined" color="primary" startIcon={<AddCallIcon />} >
    //       Call me!
    //     </Button>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <Button variant="outlined" color="primary" startIcon={<AddCallIcon />} >
    //       Call me!
    //     </Button>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <Button variant="outlined" color="primary" startIcon={<AddCallIcon />} >
    //       Call me!
    //     </Button>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <Button variant="outlined" color="primary" startIcon={<AddCallIcon />} >
    //       Call me!
    //     </Button>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <Button variant="outlined" color="primary" startIcon={<AddCallIcon />} >
    //       Call me!
    //     </Button>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <Button variant="outlined" color="primary" startIcon={<AddCallIcon />} >
    //       Call me!
    //     </Button>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <Button variant="outlined" color="primary" startIcon={<AddCallIcon />} >
    //       Call me!
    //     </Button>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <Button variant="outlined" color="primary" startIcon={<AddCallIcon />} >
    //       Call me!
    //     </Button>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <Button variant="outlined" color="primary" startIcon={<AddCallIcon />} >
    //       Call me!
    //     </Button>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <Button variant="outlined" color="primary" startIcon={<AddCallIcon />} >
    //       Call me!
    //     </Button>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <Button variant="outlined" color="primary" startIcon={<AddCallIcon />} >
    //       Call me!
    //     </Button>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <Button variant="outlined" color="primary" startIcon={<AddCallIcon />} >
    //       Call me!
    //     </Button>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <Button variant="outlined" color="primary" startIcon={<AddCallIcon />} >
    //       Call me!
    //     </Button>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <Button variant="outlined" color="primary" startIcon={<AddCallIcon />} >
    //       Call me!
    //     </Button>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <Button variant="outlined" color="primary" startIcon={<AddCallIcon />} >
    //       Call me!
    //     </Button>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <Button variant="outlined" color="primary" startIcon={<AddCallIcon />} >
    //       Call me!
    //     </Button>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <Button variant="outlined" color="primary" startIcon={<AddCallIcon />} >
    //       Call me!
    //     </Button>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <Button variant="outlined" color="primary" startIcon={<AddCallIcon />} >
    //       Call me!
    //     </Button>
    //   </Grid>

    // </Grid>

    <Grid container spacing={2}>

      {data.map((element) => {
        return <Card key={element.id} image={element.image} title={element.title} description={element.description} />
      })}

    </Grid>
  )

}

export default App;