import { Chip } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';

const Genres = ( {
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,
}) => {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);  // genres tika wen krl selected ekata dgnnw
        setGenres(genres.filter((g) => g.id!== genre.id)); //e tika pradana array eken remove krnw
        setPage(1);
    };

    const handleRemove = (genre) => {

        

        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id) 
        );
        
        setGenres([...genres, genre]); 
        setPage(1);
    };

    const fetchGenres = async () => {
        const {data} = await axios.get (
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );

        setGenres(data.genres);
       
    };

   
    useEffect(() => {
        fetchGenres();
    
        return () => {
            setGenres({}); // unmounting
          };
          // eslint-disable-next-line
        }, []);
      
    return (
        <div style={{ padding: "6px 0" }}>
            
            {
            selectedGenres.map((genre) => (
           <Chip 
           label = {genre.name} 
           style={{ margin:2  }}  
           size="small" 
           color="primary"
           key={genre.id} 
           clickable 
           onDelete={() => handleRemove(genre)}
           
                />
                ))} 

           {genres && genres.map((genre) => (
           <Chip 
           label = {genre.name} 
           style={{background:"white", margin:2 }}  
           size="small" 
           key={genre.id} 
           clickable 
           onClick={() =>handleAdd(genre)}
           />
           ))} 
        </div>
    );
};
//map it from the genres component
export default Genres;
