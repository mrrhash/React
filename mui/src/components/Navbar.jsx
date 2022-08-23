import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';

const StyledToolBar = styled(Toolbar)`
    display: flex;
    justifyContent: space-between;
`;

const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
    padding: "0 10px",
    borderRadius : theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({theme})=>({
   display:"none",
   gap:"20px",
   alignItems:"center",
   [theme.breakpoints.up("sm")]:{
       display:"flex"
   }
}))

const UserBox = styled(Box)(({theme})=>({
    display:"flex",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
    
 }))
 
export default function Navbar() {

const [open , setOpen] = useState(false)

  return (
    <AppBar position='sticky'>
        <StyledToolBar>

           <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>
                Facebook
            </Typography>
            <FacebookIcon sx={{display:{xs:"block", sm:"none"}}} />

            <Search><InputBase placeholder='search...' /></Search>

            <Icons>
            <Badge badgeContent={4} color="error">
                <MailIcon />
            </Badge>
            <Badge badgeContent={2} color="error">
                <NotificationsIcon />
            </Badge>
            <Avatar alt="Remy Sharp" src="avatar.jpg" onClick={e=>setOpen(true)} />
            </Icons>
            
            <UserBox onClick={e=>setOpen(true)}>
            <Avatar alt="Remy Sharp" src="avatar.jpg" />
            <Typography>Hassan</Typography>
            </UserBox>

            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </StyledToolBar>
    </AppBar>
    
  )
}
