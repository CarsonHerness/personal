import React from 'react';
import {
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import {ChevronRightIcon} from '@chakra-ui/icons';

interface ResumeSubsectionInterface {
  title: string;
  date: string;
  description: string[];
  subtitle?: string;
  location?: string;
  tags?: string[];
}

/**
 * Component for a resume subsection
 */
const ResumeSubsection: ({
  title,
  subtitle,
  date,
  description,
  location,
  tags,
}: ResumeSubsectionInterface) => JSX.Element = ({
  title,
  subtitle,
  date,
  description,
  location,
  tags,
}: ResumeSubsectionInterface) => {
  return (
    <Box marginY="1em">
      <Flex>
        <Text as="span" color="brand.white" fontSize="lg" fontWeight="bold">
          {title}
          <Text display="inline" fontWeight="normal">
            {subtitle ? `, ${subtitle}` : ''}
          </Text>
        </Text>
        <Spacer></Spacer>
        <Text color="brand.white" textAlign="right">
          {date}
        </Text>
      </Flex>
      <List>
        {description.map((item, index) => (
          <ListItem color="brand.white" key={index}>
            <ListIcon as={ChevronRightIcon} color="brand.olive" />
            {item}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export type {ResumeSubsectionInterface};
export default ResumeSubsection;
