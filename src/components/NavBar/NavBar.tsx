import React from 'react';
import {Flex, Box, Heading, Spacer, Link} from '@chakra-ui/react';

/**
 * Navigation Bar component
 */
function NavBar(): JSX.Element {
  interface NavBarLinkProps {
    name: string;
    link: string;
  }

  const NavBarLink: ({name, link}: NavBarLinkProps) => JSX.Element = ({
    name,
    link,
  }: NavBarLinkProps) => {
    return (
      <Link
        color="brand.white"
        px="5"
        href={link}
        _hover={{
          textDecoration: 'none',
        }}
      >
        {name}
      </Link>
    );
  };

  return (
    <Flex>
      <Box px="6" py="2" width="100%">
        <Heading color="brand.gold" size="md" fontWeight="normal">
          <Link
            href="/"
            _hover={{
              textDecoration: 'none',
            }}
          >
            Carson Herness
          </Link>
        </Heading>
      </Box>
      <Spacer />
      <Box py="2">
        <NavBarLink name="Blog" link="/blog"></NavBarLink>
        <NavBarLink name="About" link="/about"></NavBarLink>
        <NavBarLink name="Projects" link="/projects"></NavBarLink>
      </Box>
    </Flex>
  );
}

export default NavBar;
