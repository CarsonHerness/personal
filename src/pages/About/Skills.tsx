import React from 'react';
import {Box, Center, SimpleGrid, Text} from '@chakra-ui/react';

interface SkillInterface {
  type: string;
  items: string[];
}

/**
 * Component for a skill section
 */
const SkillSection: ({type, items}: SkillInterface) => JSX.Element = ({
  type,
  items,
}: SkillInterface) => {
  interface SkillBoxInterface {
    item: string;
  }

  const SkillBox: ({item}: SkillBoxInterface) => JSX.Element = ({
    item,
  }: SkillBoxInterface) => {
    return (
      <Center
        margin={5}
        fontWeight="semibold"
        boxShadow="md"
        backgroundColor="brand.crimson"
        height="100px"
        width="100px"
        borderRadius="md"
        color="brand.white"
      >
        {item}
      </Center>
    );
  };

  const itemBoxes = [];
  for (const [item, itemIndex] of items.entries()) {
    itemBoxes.push(<SkillBox key={itemIndex} item={items[item]} />);
  }
  return (
    <Box>
      <Text color="brand.gold" fontSize="lg">
        {type}
      </Text>
      <SimpleGrid minChildWidth="100px" spacing="20px">
        {itemBoxes}
      </SimpleGrid>
    </Box>
  );
};

export type {SkillInterface};
export default SkillSection;
