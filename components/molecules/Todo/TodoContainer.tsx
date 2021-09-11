import { Todo, TodoProps } from './Todo';

import debounce from 'lodash.debounce';

import useUpdateTodo from './useUpdateTodo';
import useDeleteTodo from './useDeleteTodo';

export type TodoContainerProps = Pick<TodoProps, 'id' | 'title' | 'completed'>;

export const TodoContainer = (props: TodoContainerProps) => {
  // DONE: add mutation.updateTodo
  const { mutate } = useUpdateTodo();
  const updateTodo = debounce(mutate, 100);

  // DONE: add mutation.deleteTodo
  const { mutate: mutate_ } = useDeleteTodo();
  const deleteTodo = debounce(mutate_, 100);

  return <Todo {...props} updateTodo={updateTodo} deleteTodo={deleteTodo} />;
};
