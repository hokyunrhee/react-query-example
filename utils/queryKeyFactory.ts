import { GetFilteredTodosParameter } from 'api/query';

export const todoKeys = {
  all: ['todos'] as const,
  lists: () => [...todoKeys.all, 'list'] as const,
  list: (filter: GetFilteredTodosParameter) => [...todoKeys.lists(), filter] as const,
};
