import React from 'react';
import {Box, Heading} from '@chakra-ui/react';
import ResumeSubsection, {ResumeSubsectionInterface} from './ResumeSubsection';

interface ResumeSectionInterface {
  title: string;
  subsections: ResumeSubsectionInterface[];
}

/**
 * Component for a resume section
 */
const ResumeSection: ({
  title,
  subsections,
}: ResumeSectionInterface) => JSX.Element = ({
  title,
  subsections,
}: ResumeSectionInterface) => {
  const subsectionsComponents = new Array(subsections.length);
  for (const subsectionIndex in subsections) {
    const subsection = subsections[subsectionIndex];
    subsectionsComponents[subsectionIndex] = (
      <ResumeSubsection
        key={subsectionIndex}
        title={subsection['title']}
        date={subsection['date']}
        description={subsection['description']}
        subtitle={subsection['subtitle']}
        location={subsection['location']}
      />
    );
  }
  return (
    <Box marginTop="1em">
      <Heading color="brand.gold" fontWeight="normal" fontSize="2xl">
        {title}
      </Heading>
      {subsectionsComponents}
    </Box>
  );
};

export type {ResumeSectionInterface};
export default ResumeSection;
