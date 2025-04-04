import React from 'react';
import { Box } from "@mui/material";
import Layout from './components/Layout';
import Card from './components/Card';
import { data } from "./productsData/Data"

function App() {
  return (
    // <Box
    //   display="flex"
    //   justifyContent="center"
    //   alignItems="center"
    //   gap={1}
    //   height="100vh"
    //   bgcolor="lightblue"
    // >
    //   <Box bgcolor="#ddd" color="#fff" p={2} borderRadius={2}>
    //     I am centered!
    //   </Box>

    //   <Box bgcolor="#ddd" p={2} borderRadius={2}>
    //     I am centered!
    //   </Box>
    // </Box>

    <Layout>
      {data.map((element) => (
        <Card
          key={element.id}
          img={element.image}
          title={element.title}
          description={element.description}
        />
      ))}
    </Layout>
  )


}

export default App