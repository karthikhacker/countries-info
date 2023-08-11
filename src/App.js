import React from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import Loading from './components/Loading';
import { ErrorBoundary } from 'react-error-boundary';

const Navbar = React.lazy(() => import('./components/Navbar'))
const Home = React.lazy(() => import('./pages/Home'));
const CountryInfo = React.lazy(() => import('./pages/CountryInfo'));
const SearchResult = React.lazy(() => import('./pages/SearchResult'));
function App() {
  const { darkMode } = useSelector(state => state.themes);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light'
    }
  })
  return (
    <ErrorBoundary
      fallbackRender={ErrorBoundary}
    // onReset={(details) => {

    // }}
    >
      <Suspense fallback={<Loading />}>
        <ThemeProvider theme={theme}>
          <Box sx={{ mt: 5, p: 2 }}>
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
      </Suspense>
    </ErrorBoundary>

  );
}

export default App;
