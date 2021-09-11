import { TodoInput, TodoInputProps } from './TodoInput';

import debounce from 'lodash.debounce';

import useCreateTodo from './useCreateTodo';

export const TodoInputContainer = () => {
  // DONE: add mutation.createtTodo
  const { mutate } = useCreateTodo();
  const createtTodo = debounce(mutate, 100);

  const onSubmit: TodoInputProps['onSubmit'] = (event) => {
    event.preventDefault();

    const { elements } = event.currentTarget;
    const todo = elements.namedItem('todo') as HTMLInputElement;
    const title = todo.value;

    createtTodo(title);

    todo.value = '';
  };

  return <TodoInput onSubmit={onSubmit} />;
};
