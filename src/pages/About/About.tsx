import React from 'react';
import {Box, Heading, Text, Center, Divider} from '@chakra-ui/react';
import * as resumeJSON from '../../content/resume.json';
import * as bioJSON from '../../content/biography.json';
import {ResumeSectionInterface} from './ResumeSection';
import Resume, {SkillInterface} from './Resume';

/**
 * Component for About page
 */
function About(): JSX.Element {
  const biography = bioJSON['biography'];

  const sections = resumeJSON['sections'];
  const sectionComponents: ResumeSectionInterface[] = new Array(
    sections.length
  );
  for (const sectionIndex in sections) {
    const section: ResumeSectionInterface = sections[
      sectionIndex
    ] as ResumeSectionInterface;
    sectionComponents[sectionIndex] = section;
  }

  const skills = resumeJSON['skills'];
  const skillComponents: SkillInterface[] = new Array(skills.length);
  for (const skillIndex in skills) {
    const skill: SkillInterface = skills[skillIndex] as SkillInterface;
    skillComponents[skillIndex] = skill;
  }

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
          {biography}
        </Text>
        <Divider></Divider>
        <Resume skills={skillComponents} sections={sectionComponents}></Resume>
      </Box>
    </Center>
  );
}

export default About;
