import { instance } from './config';

import { Todo, Todos } from './types';

type GetFilteredTodosParameters = Partial<Omit<Todo, 'title'>>;

export default {
  getAllTodos: async (): Promise<Todos> => {
    const { data } = await instance.get(`/api/todo`);
    return data;
  },
  getFilteredTodos: async ({ id, completed }: GetFilteredTodosParameters): Promise<Todos> => {
    const params: GetFilteredTodosParameters = {};

    if (id) params.id = id;
    if (completed) params.completed = completed;

    const { data } = await instance.get(`/api/todo`, {
      params,
    });
    return data;
  },
  getTodo: async (id: number): Promise<Todo> => {
    const { data } = await instance.get(`/api/todo/${id}`);
    return data;
  },
};
