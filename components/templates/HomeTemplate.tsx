import AppLayout from './AppLayout';
import { Box } from '@chakra-ui/react';

interface HomeTemplateProps {
  header: JSX.Element;
  todoInput: JSX.Element;
  todos: JSX.Element;
}

const HomeTemplate = ({ header, todoInput, todos }: HomeTemplateProps) => {
  return (
    <AppLayout>
      {header}
      <Box m="36px">
        <Box>{todoInput}</Box>
        <Box>{todos}</Box>
      </Box>
    </AppLayout>
  );
};

export default HomeTemplate;
