import * as React from 'react';
import {makeStyles} from "@material-ui/core/styles";

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const useStyles = makeStyles({
    root:{
        width: '100%'  ,
        position: "fixed" , 
        bottom:0,
        backgroundColor:"#2d313a",
        zIndex:100

    },
});


export default function SimpleBottomNavigation() {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);

 
  return (
    
      <BottomNavigation
      showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
        showLabels

        className={classes.root}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
   
  );
}