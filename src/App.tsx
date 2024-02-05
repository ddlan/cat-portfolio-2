import '@fontsource/nunito';

import { Box, ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { type FC } from 'react';

import './styles/styles.css';
import Homepage from './pages/Homepage';
import TedxUW from './pages/TedxUW';
import { customTheme } from './theme';
import Adobe from './pages/Adobe';
import Challenge from './pages/Challenge';

const App: FC = () =>
  (
    <BrowserRouter>
      <ChakraProvider theme={customTheme}>
      <ColorModeProvider>
        <Box className="App">
          <Routes>
            <Route path="/" element={<Homepage/> } />
            <Route path="/about" element={<Homepage/> } />
            <Route path="/tedxuw" element={<TedxUW/> } />
            <Route path="/adobe" element={<Adobe/> } />
            <Route path="/challenge" element={<Challenge/> } />
          </Routes>
        </Box>
        </ColorModeProvider>
      </ChakraProvider>
    </BrowserRouter>
  );

export default App;
