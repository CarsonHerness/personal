import React from 'react';
import {Box, Heading, Text, Center, Divider} from '@chakra-ui/react';
import ResumeSubsection from './ResumeSubsection';

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
        <Text color="brand.white" marginBottom="1em">
          I&apos;m Carson Herness, and I&apos;m a Wisconsin transplant living in
          California. I graduate from Harvey Mudd College with a degree in
          computer science in May 2021, and then I&apos;ll be starting as a
          software engineer at Google on the YouTube team. I enjoy creating
          projects with React and Firebase in my personal time. Outside of
          programming, I like to cook, read, crochet, and waste time on the
          internet.
        </Text>
        <Divider></Divider>
        <Heading marginTop="5px" fontWeight="normal" color="brand.gold">
          Experience
        </Heading>
        <ResumeSubsection
          title="Google, Software Engineering Intern"
          date="May 2020 to August 2020"
          descriptionList={[
            'Contributed to migration of email quarantine tool used by thousands of GSuite Gmail customers',
            'Utilized internal microservices platform to add to backend service for Gmail tool (Java)',
            'Committed 3000+ lines of Java code to Gmail codebase and read 6000+ lines of legacy Java code',
            'Collaborated across three teams to determine optimal, modern design decisions in migration project',
          ]}
        ></ResumeSubsection>
        <Heading color="brand.gold" fontWeight="normal">Education</Heading>
        <ResumeSubsection
          title="Harvey Mudd College"
          date="May 2021"
          descriptionList={[
            'Coursework: Natural Language Processing, Artificial Intelligence, Operations Research, Linguistics, Programming Languages, Software Development, Algorithms, Computer Systems, Data Structures and Program Development, Computational Biology, Communicating Science, Human Data Science Ethics',
          ]}
        />
      </Box>
    </Center>
  );
}

export default About;
