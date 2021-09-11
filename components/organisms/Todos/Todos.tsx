import { Box, VStack } from '@chakra-ui/react';
import Todo, { TodoProps } from 'components/molecules/Todo';
import TodosStatus from 'components/molecules/TodosStatus';

import debounce from 'lodash.debounce';

type DebouncedFunc = ReturnType<typeof debounce>;

export type TodosProps = {
  todos: TodoProps[];
  filterTodos: DebouncedFunc;
};

export const Todos = ({ todos, filterTodos }: TodosProps) => {
  return (
    <Box>
      <Box my="36px">
        <TodosStatus filterTodos={filterTodos} />
      </Box>
      <VStack spacing="12px">
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </VStack>
    </Box>
  );
};
