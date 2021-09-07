import { VStack } from '@chakra-ui/react';
import Todo, { TodoProps } from 'components/molecules/Todo';

export type TodosProps = {
  todos: TodoProps[];
};

export const Todos = ({ todos }: TodosProps) => {
  return (
    <VStack spacing="12px">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </VStack>
  );
};
