import React from 'react';
import {Box, Flex} from '@chakra-ui/react';
import Routes from '../Routes';

function Main(): JSX.Element {
  return (
    <Flex>
      <Box width="100%" bgGradient="linear(to-b, brand.navy, brand.black)">
        <Box margin="20px">
          <Routes />
        </Box>
      </Box>
    </Flex>
  );
}

export default Main;
