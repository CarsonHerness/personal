import React from 'react';
import {Box, Heading} from '@chakra-ui/react';

/**
 * Component for Blog page
 */
function Blog(): JSX.Element {
  return (
    <Box>
      <Heading
        color="brand.gold"
        letterSpacing="3px"
        fontSize="50px"
        fontWeight="normal"
        fontFamily="sans-serif"
      >
        Blog Page
      </Heading>
    </Box>
  );
}

export default Blog;
