import React from 'react'
import {List, ListItem, ListItemIcon, ListItemText, Divider} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import InboxIcon from '@mui/icons-material/Inbox';

export default function FeedList() {
  return (
    <List>
         <ListItem  button key="MarketPlace">
            <ListItemIcon>
              <StorefrontIcon></StorefrontIcon>
            </ListItemIcon>
            <ListItemText primary="Market Place" />
          </ListItem>
          <ListItem button key="Feed">
            <ListItemIcon>
              <DynamicFeedIcon></DynamicFeedIcon>
            </ListItemIcon>
            <ListItemText primary="Feed Social" />
          </ListItem>
          <ListItem  button key="Inbox">
            <ListItemIcon>
              <InboxIcon></InboxIcon>
            </ListItemIcon>
            <ListItemText primary="Inbox" />
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
