import '@fontsource/nunito/300.css';

import { Box, ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { type FC } from 'react';

import './styles/styles.css';
import Homepage from './pages/Homepage';
import TedxUW from './pages/TedxUW';
import { customTheme } from './theme';

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
          </Routes>
        </Box>
        </ColorModeProvider>
      </ChakraProvider>
    </BrowserRouter>
  );

export default App;
