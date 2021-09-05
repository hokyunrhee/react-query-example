import AppLayout from './AppLayout';
import { Box } from '@chakra-ui/react';

interface HomeTemplateProps {
  header: JSX.Element;
  todoInput: JSX.Element;
}

const HomeTemplate = ({ header, todoInput }: HomeTemplateProps) => {
  return (
    <AppLayout>
      {header}
      <Box m="36px">{todoInput}</Box>
    </AppLayout>
  );
};

export default HomeTemplate;
