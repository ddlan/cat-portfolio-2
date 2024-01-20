import '@fontsource/nunito/300.css';

import { Box, ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles.css';
import Homepage from './pages/Homepage';
import { customTheme } from './theme';

const App = () => 
  (
    <BrowserRouter>
      <ChakraProvider theme={customTheme}>
      <ColorModeProvider>
        <Box className="App">
          <Routes> 
            <Route path="/" element={<Homepage/> } /> 
            <Route path="/about" element={<Homepage/> } /> 
          </Routes> 
        </Box>
        </ColorModeProvider>
      </ChakraProvider>
    </BrowserRouter>
  );


export default App;
