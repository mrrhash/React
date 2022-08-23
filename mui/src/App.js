import React from "react";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import { Box,  createTheme,  Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";



function App() {

  const [mode , setMode] = useState("light")

  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
   <Box bgcolor={"background.default"} color={"text.primary"} >
     <Navbar/>
     <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar setMode={setMode} mode={mode}/>
        <Feed/>
        <RightBar/>
     </Stack>
     <Add/>
   </Box>
   </ThemeProvider>
  );
}

export default App;
