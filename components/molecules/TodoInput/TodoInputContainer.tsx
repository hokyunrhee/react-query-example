import { TodoInput, TodoInputProps } from './TodoInput';

import debounce from 'lodash.debounce';

import mutation from 'api/mutation';

export const TodoInputContainer = () => {
  const createtTodo = debounce((title: string) => {
    // TODO: add mutation.createtTodo
    console.log(title);
  }, 100);

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
