import React from 'react'
import {List, ListItem, ListItemIcon, ListItemText, Divider} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

export default function FeedList() {
  return (
    <List>
         <ListItem onClick={()=>{signOut(getAuth())}} button key="Logout">
            <ListItemIcon>
              <StorefrontIcon></StorefrontIcon>
            </ListItemIcon>
            <ListItemText primary="Market Place" />
          </ListItem>
          <ListItem onClick={()=>{signOut(getAuth())}} button key="Logout">
            <ListItemIcon>
              <DynamicFeedIcon></DynamicFeedIcon>
            </ListItemIcon>
            <ListItemText primary="Feed Social" />
          </ListItem>
          <Divider />
          <ListItem onClick={()=>{signOut(getAuth())}} button key="Cerrar Session">
            <ListItemIcon>
              <LogoutIcon/>
            </ListItemIcon>
            <ListItemText primary="Cerrar Session" />
          </ListItem>
      </List>

  
  )
}
