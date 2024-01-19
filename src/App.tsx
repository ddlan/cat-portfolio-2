import { Box, ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles.css';
import Homepage from './pages/Homepage';

const App = () => 
  (
    <BrowserRouter>
      <ChakraProvider>
        <Box className="App">
          <Routes> 
            <Route path="/" element={<Homepage/> } /> 
            <Route path="/about" element={<Homepage/> } /> 
          </Routes> 
        </Box>
      </ChakraProvider>
    </BrowserRouter>
  );


export default App;
