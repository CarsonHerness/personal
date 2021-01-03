import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import {Box, Flex} from '@chakra-ui/react';

/**
 * Root React component for website
 */
function App(): JSX.Element {
  return (
    <Flex>
      <Box
        height="100vh"
        width="100%"
        bgGradient="linear(to-b, brand.navy, brand.black)"
      >
        <Box
          width="100%"
          height="72px"
          top="0"
          position="fixed"
          overflow="hidden"
        >
          <NavBar />
        </Box>
        <Box paddingTop="72px" height="calc(100vh - 102px)" width="100%">
          <Main />
        </Box>
        <Box
          position="fixed"
          width="100%"
          left="0"
          bottom="0"
          overflow="hidden"
          height="30px"
        >
          <Footer />
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
