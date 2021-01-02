import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ChakraProvider, extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      navy: '#002642',
      gold: '#e59500',
      white: '#e5dada',
      olive: '#4D7D4A',
      crimson: '#840032',
      black: '#02040F',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
