import React from 'react';
import { StyledMenu } from './Menu.styled';
import NavigationItem from '../NavigationItem/NavigationItem.component';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <NavigationItem path={'/about'} name={'About Me'} />
      <NavigationItem path={'/works'} name={'Works'} />
      <NavigationItem path={'/blog'} name={'Blogs'} />
    </StyledMenu>
  );
};
export default Menu;
