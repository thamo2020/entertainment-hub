import React from 'react'
import Pagination from '@mui/material/Pagination';
//import { createMuiTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@material-ui/core';

const darkTheme = createTheme ({
    palette: {
        type:"dark",
    },
});
    
    export default function CustomPagination({ setPage, numOfPages = 10 }) {
        // Scroll to top when page changes
        const handlePageChange = (page) => {
          setPage(page);
          window.scroll(0, 0);
        };
    
    return (
        <div
            style={{
                width: "100%",
                display:"flex",
                justifyContent:"center",
                marginTop:10,

            }}
        >

            <ThemeProvider theme={darkTheme}>
                <Pagination 
                onChange={(e) => handlePageChange(e.target.textContent) } 
                count={numOfPages}
                hideNextButton
                hidePrevButton

                color='primary'

                />
            </ThemeProvider>

            
        </div>
    );
    
};
