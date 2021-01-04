import React from 'react';
import {Box, Heading, Text, Center} from '@chakra-ui/react';

/**
 * Component for About page
 */
function About(): JSX.Element {
  return (
    <Center>
      <Box
        padding="5"
        maxWidth="800px"
        boxShadow="sm"
        backgroundColor="brand.navy"
        borderRadius="md"
      >
        <Heading
          color="brand.gold"
          letterSpacing="3px"
          fontSize="50px"
          fontWeight="normal"
          fontFamily="sans-serif"
        >
          About Me
        </Heading>
        <Text color="brand.white">
          I&apos;m Carson Herness, and I&apos;m a Wisconsin transplant living in
          California. I graduate from Harvey Mudd College with a degree in
          computer science in May 2021, and then I&apos;ll be starting as a
          software engineer at Google on the YouTube team. I enjoy creating
          projects with React and Firebase in my personal time. Outside of
          programming, I like to cook, read, crochet, and waste time on the
          internet.
        </Text>
      </Box>
    </Center>
  );
}

export default About;
