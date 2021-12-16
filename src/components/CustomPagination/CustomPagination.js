import React from 'react'
import Pagination from '@mui/material/Pagination';


    
    export default function CustomPagination({ setPage, numOfPages = 10 }) {
        // Scroll to top when page changes
        const handlePageChange = (page) => {
          setPage(page);
          window.scroll(0, 0);
        };
    
    return (
        <div>
            <Pagination 
             
            onChange={(e) => handlePageChange(e.target.textContent) } 
            count={numOfPages}
            />
        </div>
    );
    
};
