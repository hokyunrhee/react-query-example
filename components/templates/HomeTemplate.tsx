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
      <Box m="36px">{todoInput}</Box>
      <Box mx="36px">{todos}</Box>
    </AppLayout>
  );
};

export default HomeTemplate;
