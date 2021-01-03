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
      <Box height="100vh" width="100%" backgroundColor="brand.gold ">
        <Box position="relative" minHeight="100vh">
          <Box
            width="100%"
            top="0"
            position="fixed"
            overflow="hidden"
            backgroundColor="brand.navy"
            height="40px"
          >
            <NavBar />
          </Box>
          <Box
            bgGradient="linear(to-b, brand.navy, brand.black)"
            minHeight="calc(100vh - 30px)"
            width="100%"
            paddingTop="40px"
          >
            <Main />
          </Box>
          <Box
            position="absolute"
            width="100%"
            bottom="0"
            overflow="hidden"
            height="30px"
            backgroundColor="brand.black"
          >
            <Footer />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
