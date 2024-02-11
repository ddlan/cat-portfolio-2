import '@fontsource/nunito';

import { Box, ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import React, { useEffect, type FC } from 'react';

import './styles/styles.css';
import Homepage from './pages/Homepage';
import TedxUW from './pages/TedxUW';
import { customTheme } from './theme';
import Adobe from './pages/Adobe';
import Challenge from './pages/Challenge';
import TechNova from './pages/TechNova';
import About from './pages/About';

const ScrollToTop: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: FC = () =>
  (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <ChakraProvider theme={customTheme}>
      <ColorModeProvider>
        <Box className="App">
          <Routes>
            <Route path="/" element={<Homepage/> } />
            <Route path="/about" element={<About/> } />
            <Route path="/tedxuw" element={<TedxUW/> } />
            <Route path="/adobe" element={<Adobe/> } />
            <Route path="/challenge" element={<Challenge/> } />
            <Route path="/technova" element={<TechNova/> } />
          </Routes>
        </Box>
        </ColorModeProvider>
      </ChakraProvider>
    </BrowserRouter>
  );

export default App;
