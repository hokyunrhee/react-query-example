import { instance } from './config';

import { Todo } from './types';

export type UpdateTodoParameters = Pick<Todo, 'id'> & Partial<Omit<Todo, 'id'>>;

export default {
  createtTodo: async (title: string): Promise<Todo> => {
    const { data } = await instance.post(`/api/todo`, {
      title,
    });
    return data;
  },
  updateTodo: async ({ id, title, completed }: UpdateTodoParameters): Promise<Todo> => {
    const data: Omit<UpdateTodoParameters, 'id'> = {};

    if (typeof title === 'string') data.title = title;
    if (typeof completed === 'boolean') data.completed = completed;

    const response = await instance.patch(`/api/todo/${id}`, data);
    return response.data;
  },
  deleteTodo: async (id: number): Promise<Todo> => {
    const { data } = await instance.delete(`/api/todo/${id}`);
    return data;
  },
};
