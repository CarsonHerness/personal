import React from 'react';
import ResumeSection, {ResumeSectionInterface} from './ResumeSection';
import {Box, Text} from '@chakra-ui/react';
import SkillSection, {SkillInterface} from './Skills';

interface ResumeInterface {
  sections: ResumeSectionInterface[];
  skills: SkillInterface[];
}

/**
 * Contains sections with subsections and a skills section
 * @param params - sections, skills
 */
const Resume: ({sections, skills}: ResumeInterface) => JSX.Element = ({
  sections,
  skills,
}: ResumeInterface) => {
  const resumeSections = [];
  for (const [sectionIndex, section] of sections.entries()) {
    resumeSections.push(
      <ResumeSection
        key={sectionIndex}
        title={section['title']}
        subsections={section['subsections']}
      />
    );
  }

  const skillSections = [];
  for (const [skillIndex, skill] of skills.entries()) {
    skillSections.push(
      <SkillSection
        key={skillIndex}
        type={skill['type']}
        items={skill['items']}
      />
    );
  }

  return (
    <Box>
      <Text color="brand.gold" fontSize="3xl" fontWeight="semibold">
        Skills
      </Text>
      <Box>{skillSections}</Box>
      <Box>{resumeSections}</Box>
    </Box>
  );
};

export type {ResumeInterface, SkillInterface};
export default Resume;
