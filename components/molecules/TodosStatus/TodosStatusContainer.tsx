import { TodosStatus, TodosStatusProps } from './TodosStatus';

export type TodosStatusContainerProps = Pick<TodosStatusProps, 'filterTodos'>;

export const TodosStatusContainer = ({ filterTodos }: TodosStatusContainerProps) => {
  // DONE: refactor component structure. filterTodos is now passed from parent.
  return <TodosStatus filterTodos={filterTodos} />;
};
