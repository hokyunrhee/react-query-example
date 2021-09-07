import { Todo, TodoProps } from './Todo';

import debounce from 'lodash.debounce';

import mutation from 'api/mutation';

export type TodoContainerProps = Omit<TodoProps, 'updateTodo'>;

export const TodoContainer = (props: TodoContainerProps) => {
  // TODO: add mutation.updateTodo
  const updateTodo = debounce(console.log, 100);

  return <Todo {...props} updateTodo={updateTodo} />;
};
