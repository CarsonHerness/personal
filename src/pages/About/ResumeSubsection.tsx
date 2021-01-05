import React from 'react';
import {Box, Heading, Text, UnorderedList, ListItem} from '@chakra-ui/react';

interface ResumeSubsectionProps {
  title: string;
  date: string;
  location?: string;
  descriptionList: string[];
}

/**
 * Component for a resume section
 */
const ResumeSubsection: ({
  title,
  date,
  descriptionList,
}: ResumeSubsectionProps) => JSX.Element = ({
  title,
  date,
  descriptionList,
}: ResumeSubsectionProps) => {
  return (
    <Box marginY="1em">
      <Heading color="brand.white" fontSize="lg">
        {title}
      </Heading>
      <Text color="brand.white">{date}</Text>
      <UnorderedList>
        {descriptionList.map((description, index) => (
          <ListItem color="brand.white" key={index}>
            {description}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default ResumeSubsection;
