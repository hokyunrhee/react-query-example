import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex as="header" bg="primary">
      <Flex flexGrow={1} height="58px" justifyContent="center" alignItems="center">
        <Text as="h1" fontSize="24px" fontWeight="black" color="white">
          TODOLIST
        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;
