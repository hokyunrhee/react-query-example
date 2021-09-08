import { HStack, Button } from '@chakra-ui/react';

import debounce from 'lodash.debounce';

type DebouncedFunc = ReturnType<typeof debounce>;

export interface TodosStatusProps {
  filterTodos: DebouncedFunc;
}

export const TodosStatus = ({ filterTodos }: TodosStatusProps) => {
  return (
    <HStack>
      <Button width="100%" onClick={filterTodos}>
        all
      </Button>
      <Button width="100%" onClick={() => filterTodos({ completed: false })}>
        active
      </Button>
      <Button width="100%" onClick={() => filterTodos({ completed: true })}>
        completed
      </Button>
    </HStack>
  );
};
