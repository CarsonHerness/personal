import React from 'react';
import {Box, Heading} from '@chakra-ui/react';

/**
 * Component for Projects page
 */
function Projects(): JSX.Element {
  return (
    <Box>
      <Heading
        color="brand.gold"
        letterSpacing="3px"
        fontSize="50px"
        fontWeight="normal"
        fontFamily="sans-serif"
      >
        Projects Page
      </Heading>
    </Box>
  );
}

export default Projects;
