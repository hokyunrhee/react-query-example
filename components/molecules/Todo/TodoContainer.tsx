import { Todo, TodoProps } from './Todo';

import debounce from 'lodash.debounce';

import mutation from 'api/mutation';

export type TodoContainerProps = Pick<TodoProps, 'id' | 'title' | 'completed'>;

export const TodoContainer = (props: TodoContainerProps) => {
  // TODO: add mutation.updateTodo
  const updateTodo = debounce(console.log, 100);

  // TODO: add mutation.deleteTodo
  const deleteTodo = debounce(console.log, 100);

  return <Todo {...props} updateTodo={updateTodo} deleteTodo={deleteTodo} />;
};
