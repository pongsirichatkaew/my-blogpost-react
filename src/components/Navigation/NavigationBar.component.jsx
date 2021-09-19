import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useScrollUpDown } from '../../hooks/useScrollUpDown';
import NavigationItem from '../NavigationItem/NavigationItem.component';
import { StyledNav, StyledLogo } from './NavigationBar.styled';
import Burger from '../Burger/Burger.js';
import Menu from '../Menu/Menu.js';
import { useWindowWidth } from '../../hooks/useWindowWidth';
const NavigationBar = () => {
  const [show] = useScrollUpDown();
  const [screenWidth] = useWindowWidth();
  const [open, setOpen] = useState(false);

  const isMobile = screenWidth < 700;
  return (
    <Fragment>
      <StyledNav show={show} isMobile={isMobile}>
        <Link to='/'>
          <StyledLogo />
        </Link>

        {isMobile ? (
          <Burger open={open} setOpen={setOpen} />
        ) : (
          <ul>
            <li>
              <NavigationItem path={'/about'} name={'About Me'} />
            </li>
            <li>
              <NavigationItem path={'/works'} name={'Works'} />
            </li>
            <li>
              <NavigationItem path={'/blog'} name={'Blogs'} />
            </li>
          </ul>
        )}
      </StyledNav>
      <Menu open={open} setOpen={setOpen} />
    </Fragment>
  );
};

export default NavigationBar;
