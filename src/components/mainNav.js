import * as React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';


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
      style={{backgroundColor:"#2d313a"}}
      showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}

        showLabels

        className={classes.root}
      >
        <BottomNavigationAction
            style={{color:"white"}} 
            label="Trending" 
            icon={<WhatshotIcon />} 
        />

       <BottomNavigationAction
            style={{color:"white"}} 
            label="Movies" 
            icon={<MovieCreationIcon />} 
        />

<BottomNavigationAction
            style={{color:"white"}} 
            label="TV Series" 
            icon={<TvIcon />} 
        />

<BottomNavigationAction
            style={{color:"white"}} 
            label="Search" 
            icon={<SearchIcon />} 
        />
        
      </BottomNavigation>
   
  );
}