import React, { FC, useMemo, useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { NavbarItem } from './components';
import logo from '../../images/logo.png';
import { NavBarItemsList } from './mock';
import s from './Navbar.module.scss';

const Navbar: FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const showNavbarItems = useMemo(() => {
    return NavBarItemsList.map(({ title, key, classProps }) => (
      <NavbarItem key={key} title={title} classProps={classProps} />
    ));
  }, []);

  const showMenu = useMemo(() => (
    <>
      {!toggleMenu && (
        <HiMenuAlt4 fontSize={28} onClick={() => setToggleMenu(true)} />
      )}
      {toggleMenu && (
        <AiOutlineClose fontSize={28} onClick={() => setToggleMenu(false)} />
      )}
      {toggleMenu && (
        <ul>
          <li><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
          {showNavbarItems}
        </ul>
      )}
    </>
  ), [toggleMenu]);

  return (
    <nav className={s.navigation}>
      <div className={s.navigation__logo}>
        <img src={logo} alt="logo" />
      </div>
      <ul className={s.navigation__items}>
        {showNavbarItems}
          <li className={s.navigation__connect}>
              Connect Wallet
          </li>
          <div className={s.navigation__mobile}>
              {showMenu}
          </div>
      </ul>
    </nav>
  );
};

export default Navbar;
