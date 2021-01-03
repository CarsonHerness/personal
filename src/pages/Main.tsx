import React from 'react';
import {Box, Flex} from '@chakra-ui/react';
import Routes from '../Routes';

function Main(): JSX.Element {
  return (
    <Flex>
      <Box width="100%">
        <Box margin="20px">
          <Routes />
        </Box>
      </Box>
    </Flex>
  );
}

export default Main;
