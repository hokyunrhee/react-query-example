import AppLayout from './AppLayout';

interface HomeTemplateProps {
  header: JSX.Element;
}

const HomeTemplate = ({ header }: HomeTemplateProps) => {
  return <AppLayout>{header}</AppLayout>;
};

export default HomeTemplate;
