import React from 'react';
import {Flex, Box, Heading} from '@chakra-ui/react';

/**
 * Component for Home page
 */
function Home(): JSX.Element {
  return (
    <Flex>
      <Box padding="100px" paddingTop="150px">
        <Heading
          color="brand.gold"
          letterSpacing="3px"
          fontSize="50px"
          fontWeight="normal"
          fontFamily="sans-serif"
        >
          Hi, I&apos;m Carson.
        </Heading>
      </Box>
    </Flex>
  );
}

export default Home;
