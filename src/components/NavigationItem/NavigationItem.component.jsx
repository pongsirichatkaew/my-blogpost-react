import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Line } from './NavigationItem.styled';
import { useLocation } from 'react-router-dom';

const NavigationItem = ({ path, name }) => {
  const { pathname } = useLocation();

  return (
    <Fragment>
      <Link to={path}>{name}</Link>
      <Line
        transition={{ duration: 0.75 }}
        initial={{ width: '0%' }}
        animate={{ width: pathname === path ? '100%' : '0%' }}
      />
    </Fragment>
  );
};
export default NavigationItem;
