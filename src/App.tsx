import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import {Box} from '@chakra-ui/react';

/**
 * Root React component for website
 */
function App(): JSX.Element {
  return (
    <Box width="100%" minHeight="100%">
      <NavBar />
      <Main />
      <Footer />
    </Box>
  );
}

export default App;
