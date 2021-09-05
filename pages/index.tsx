import HomeTemplate from 'components/templates/HomeTemplate';
import Header from 'components/organisms/Header';
import TodoInput from 'components/molecules/TodoInput';

export default function HomePage() {
  return <HomeTemplate header={<Header />} todoInput={<TodoInput />} />;
}
