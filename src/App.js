import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CountryInfo from './pages/CountryInfo';
import SearchResult from './pages/SearchResult';
import { useSelector } from 'react-redux';

function App() {
  const { darkMode } = useSelector(state => state.themes);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light'
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mt: 10, p: 2 }}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:code" element={<CountryInfo />} />
            <Route path="/search/result" element={<SearchResult />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>

  );
}

export default App;
