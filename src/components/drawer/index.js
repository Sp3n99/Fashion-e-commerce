import { Divider, Drawer, List, ListItemButton, ListItemText, styled } from '@mui/material'
import React from 'react'
import { useUIContext } from '../../context/ui';
import { DrawerCloseButton } from '../../styles/appbar';
import CloseIcon from "@mui/icons-material/Close";
import { lighten } from 'polished';
import { Colors } from '../../styles/theme';

const MiddleDivider = styled((props)=> (
  <Divider variant="middle" {...props} />
))``;

const AppDrawer = () => {

  const {drawerOpen, setDrawerOpen } = useUIContext();

  return (
    <>
    {drawerOpen && (
      <DrawerCloseButton onClick={()=> setDrawerOpen(false)}>
          <CloseIcon 
            sx={{
              fontSize: '2.5rem',
              color: lighten(0.09, Colors.secondary),
            }}
          /> 
      </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  )
}

export default AppDrawer