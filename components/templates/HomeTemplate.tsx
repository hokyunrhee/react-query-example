import AppLayout from './AppLayout';
import { Box } from '@chakra-ui/react';

interface HomeTemplateProps {
  header: JSX.Element;
  todoInput: JSX.Element;
  todosStatus: JSX.Element;
  todos: JSX.Element;
}

const HomeTemplate = ({ header, todoInput, todosStatus, todos }: HomeTemplateProps) => {
  return (
    <AppLayout>
      {header}
      <Box m="36px">
        <Box>{todoInput}</Box>
        <Box my="36px">{todosStatus}</Box>
        <Box>{todos}</Box>
      </Box>
    </AppLayout>
  );
};

export default HomeTemplate;
