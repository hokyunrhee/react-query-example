import React from 'react';

import { Box } from '@chakra-ui/react';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box flexGrow={1} width="100%" maxW="640px" mx="auto" boxShadow="0px 4px 14px 6px rgba(0, 0, 0, 0.05)">
      {children}
    </Box>
  );
};

export default AppLayout;
