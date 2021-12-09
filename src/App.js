
import { Container } from '@material-ui/core';
import Search from '@mui/icons-material/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/mainNav';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Trending from './pages/Trending/Trending';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="app">
    <Container>
      <Routes>
        <Route path = '/' element={<Trending/>} exact/>
        <Route path = '/movies' element={<Movies/>}/>
        <Route path = '/series' element={<Series/>}/>
        <Route path = '/search' element={<Search/>}/>
      </Routes>

    </Container>
    </div>
    <SimpleBottomNavigation />
    </BrowserRouter>
  );

}

export default App;
