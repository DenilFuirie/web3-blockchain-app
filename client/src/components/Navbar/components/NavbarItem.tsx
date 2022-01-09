import React, { FC, memo } from 'react';

interface NavbarItemProps {
  title: string;
  key: string;
  classProps?: string;
}

const NavbarItem: FC<NavbarItemProps> = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  );
};

export default memo(NavbarItem);
