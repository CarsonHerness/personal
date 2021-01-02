import React from 'react';
import {Box, Heading} from '@chakra-ui/react';
import Hexagon from '../../components/Hexagon/Hexagon';

/**
 * Component for Home page
 */
function Home(): JSX.Element {
  return (
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
      <Hexagon></Hexagon>
    </Box>
  );
}

export default Home;
