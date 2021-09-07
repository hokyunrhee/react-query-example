import HomeTemplate from 'components/templates/HomeTemplate';
import Header from 'components/organisms/Header';
import TodoInput from 'components/molecules/TodoInput';
import Todos from 'components/organisms/Todos';

export default function HomePage() {
  return <HomeTemplate header={<Header />} todoInput={<TodoInput />} todos={<Todos />} />;
}
