import React, { useEffect, useState } from "react";
import { Box } from '@chakra-ui/react'
import Simplegrid from './components/Simplegrid'
import api from './api/index'

export default function App() {
  
  const [git, setGit] = useState();

  useEffect(() => {
    api
      .get("/users/brunogalvao")
      .then((response) => setGit(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  
  return (


    <Box
      w={{
        base: '100%',
        md: '720px',
        lg: '960px'
      }}
      mx='auto'
    >

      <Simplegrid
        titulo="Template Simples em ChakraUI + Axios"
        autor={ git?.name }
        content={ git?.bio }
        img={ git?.avatar_url }
      />

    </Box>

  )
}