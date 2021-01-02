import React from 'react';
import {Box, Text} from '@chakra-ui/react';
// Import './Footer.css';

/**
 * Footer component
 */
function Footer(): JSX.Element {
  return (
    <Box
      backgroundColor="brand.black"
      minHeight="30px"
      width="100%"
      textAlign="center"
    >
      <Text color="brand.white">&#169; Carson Herness 2021</Text>
    </Box>
  );
}

export default Footer;
