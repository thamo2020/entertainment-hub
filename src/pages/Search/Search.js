import { Button, createTheme, Tab, Tabs, TextField, ThemeProvider } from '@material-ui/core';
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
    const [page, setPage] = useState(0)
    return (
        <div>
            
            <ThemeProvider theme={darkTheme}>
            <div style={{display:"flex", margin:"15px,0"}}>
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
            
             </div>

            <Tabs
                value={type}
                textColor="primary"
                indicatorColor="primary"
                onChange={(event,newValue) => {
                    setType(newValue);
                    setPage(1);
                }}
                style={{paddingBottom:"5"}}
                >
                <Tab style = {{width:"50%"}}  label="Search Movies" />
                <Tab style = {{width:"50%"}}  label="Search TV Series" />

            </Tabs>
            </ThemeProvider>
            
        </div>
    );
};

export default Search
