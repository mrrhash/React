import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

export default function RightBar() {
  return (
    <Box
     p={2}
     flex={2}
     sx={{display:{xs:"none" , sm: "block"}}}
     >
      <Box position="fixed" width="300px">

        <Typography variant='h6' fontWeight="100"  mb={2}>Online Friends</Typography>
        <AvatarGroup max={5}>
          <Avatar alt="Remy Sharp" src="images/img1.jpg" />
          <Avatar alt="Travis Howard" src="images/img2.jpg" />
          <Avatar alt="Cindy Baker" src="images/img3.jpg" />
          <Avatar alt="Agnes Walker" src="images/img4.jpg" />
          <Avatar alt="Trevor Henderson" src="images/img5.webp" />
        </AvatarGroup>

        <Typography variant='h6' fontWeight="100" mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} gap={5}>
          <ImageListItem >
            <img src='images/img6.jpg' />
          </ImageListItem>
          <ImageListItem>
            <img src='images/img7.jpg' />
          </ImageListItem>
          <ImageListItem>
            <img src='images/img8.jpg' />
          </ImageListItem>
        </ImageList>

        <Typography variant='h6' fontWeight="100" mt={2}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="images/img1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="images/img3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
     
    </List>
      </Box>
    </Box >
  )
}
