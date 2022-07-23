import { Fab, Modal, Tooltip,Box , Typography, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import EmojiEmotionsSharpIcon from '@mui/icons-material/EmojiEmotionsSharp';
import ImageSharpIcon from '@mui/icons-material/ImageSharp';
import VideoCameraBackSharpIcon from '@mui/icons-material/VideoCameraBackSharp';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import DateRangeSharpIcon from '@mui/icons-material/DateRangeSharp';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"

})

const Add = () => {

    const [open , setOpen] = useState(false);
  return (
    <>
    <Tooltip title="Add Post" onClick={e=>setOpen(true)} sx={{position:"fixed" , bottom:20 ,left:{xs:"calc(50% - 25px)" , sm:30}}}>
    <Fab color="primary" aria-label="add" >
         <AddIcon />
    </Fab>
    </Tooltip>

    <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
 >
  <Box width={400} height={300} borderRadius={5} bgcolor={"background.default"} color={"text.primary"} p={3} >
    <Typography  variant="h6" color="gray" textAlign="center" component="h2">
     Create a post
    </Typography>
    <UserBox>
        <Avatar
        src='avatar.jpg' height="30px" width="30px"/>
        <Typography variant='span' fontWeight={500}>Hassan</Typography>
    </UserBox>

    <TextField sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholder="What's on your mind?"
          variant="standard"
        />

    <Stack gap={1} direction="row" mt={2} mb={3}>
        <EmojiEmotionsSharpIcon color="warning"/>
        <ImageSharpIcon color='primary'/>
        <VideoCameraBackSharpIcon color='success'/>
        <PersonAddAltSharpIcon color='error'/>
        </Stack> 

        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width:"100px"}}>
                <DateRangeSharpIcon/>
            </Button>
  
        </ButtonGroup>   
  </Box>
</StyledModal>
    </>
  )
}

export default Add
