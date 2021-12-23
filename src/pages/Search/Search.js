import { Button, createTheme, TextField, ThemeProvider } from '@material-ui/core';
import React, { useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";

const darkTheme = createTheme ({
    palette: {
        type:"dark",
        primary:{
            main:"#fff",
        },
    },
});

const Search = () => {

    const [type,setType] = useState(0);

    return (
        <div>
            <div style={{display:"flex", margin:"15px,0"}}>
            <ThemeProvider theme={darkTheme}>
            <TextField 
             style={{flex:1}}
             className = "searchBox"
             id="standard-basic" 
             label="Search" 
             variant="standard" 

            // onChange={(e)=> setSearchBox(e.target.value)}
             />
             <Button variant ="contained" style = {{marginLeft:10}} >
                 <SearchIcon />
             </Button>
            </ThemeProvider>
            </div>
        </div>
    );
};

export default Search
