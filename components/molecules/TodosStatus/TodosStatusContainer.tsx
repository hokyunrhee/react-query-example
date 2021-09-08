import { TodosStatus } from './TodosStatus';

import debounce from 'lodash.debounce';

import query from 'api/query';

export const TodosStatusContainer = () => {
  // TODO: add mutation.updateTodo
  const filterTodos = debounce(console.log, 100);

  return <TodosStatus filterTodos={filterTodos} />;
};
