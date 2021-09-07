import { Todos } from './Todos';

import query from 'api/query';

export const TodosContainer = () => {
  // TODO: query.getAllTodos

  return <>{data ? <Todos todos={data} /> : <div>loding...</div>}</>;
};

const data = [
  {
    id: 1,
    title: '선형대수학',
    completed: true,
  },
  {
    id: 2,
    title: '데이터베이스',
    completed: false,
  },
  {
    id: 3,
    title: '계량경제학',
    completed: true,
  },
  {
    id: 4,
    title: '통계방법론',
    completed: true,
  },
  {
    id: 5,
    title: '조직행동론',
    completed: false,
  },
  {
    id: 6,
    title: '고전수사학',
    completed: true,
  },
  {
    id: 7,
    title: '일본어 독해',
    completed: false,
  },
  {
    id: 8,
    title: '중급회계',
    completed: false,
  },
  {
    id: 9,
    title: '알고리즘',
    completed: false,
  },
  {
    id: 10,
    title: '스페인어 회화',
    completed: false,
  },
];
