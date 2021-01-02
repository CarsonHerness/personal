import React from 'react';
import {Box, Heading} from '@chakra-ui/react';

/**
 * Component for About page
 */
function About(): JSX.Element {
  return (
    <Box>
      <Heading
        color="brand.gold"
        letterSpacing="3px"
        fontSize="50px"
        fontWeight="normal"
        fontFamily="sans-serif"
      >
        About Page
      </Heading>
    </Box>
  );
}

export default About;
