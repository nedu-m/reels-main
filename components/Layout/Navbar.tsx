import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { BiMenu, BiX } from "react-icons/bi";

type MenuT = {
  toggle: boolean;
};

const NavLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Movies",
    href: "/movies",
  },
  {
    name: "Sitcoms",
    href: "/404",
  },
  {
    name: "TV Shows",
    href: "/404",
  },
];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <Link href="/">Reels</Link>
          </NavLogo>
          <MenuIcon toggle={toggle} onClick={handleToggle}>
            {toggle ? <BiX /> : <BiMenu />}
          </MenuIcon>
          <Menu toggle={toggle}>
            {NavLinks.map((link, index) => (
              <MenuItem key={index} onClick={handleToggle}>
                <MenuLink>
                  <Link href={link.href}>{link.name}</Link>
                </MenuLink>
              </MenuItem>
            ))}
          </Menu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-content: center;
  background: ${(props) => props.theme.colors.black};
  position: fixed;
  width: 100%;
  top: 0;
  height: 70px;
  z-index: 999;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: calc(100% - 5rem);
  margin: 0 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0 0.8rem;
    width: 100%;
  }
`;

const NavLogo = styled.div`
  display: flex;
  justify-self: flex-start;
  align-self: center;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  font-size: 1.3em;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  margin: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: absolute;
    font-size: 1.49em;
  }
`;

const MenuIcon = styled.div<MenuT>`
  display: none;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    cursor: pointer;
    position: absolute;
    right: 0;
    transform: translate(-60%, 20%);
    font-size: 2.02rem;
    overflow-x: hidden;
    margin-top: -0.8rem;
  }
`;

const Menu = styled.ul<MenuT>`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 -2rem 0 0;
  height: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    position: absolute;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    top: 69px;
    right: 10px;
    left: ${({ toggle }: any) => (toggle ? "0" : "-100%")};
    transition: all 0.7s ease;
    overflow-x: hidden;
    background: #1b1b1f;
    opacity: 1;
    padding: 0.1rem 0;
  }
`;

const MenuItem = styled.li`
  list-style: none;
  height: 66px;
  margin-left: 15px;
  margin-right: 15px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: fit-content;
    margin: 0;
    padding-top: 1.5rem;
  }
`;

const MenuLink = styled.div`
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    font-size: 1rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: block;
    text-align: center;
    margin: 0;
    height: 0;
    overflow: hidden;
    padding: 0 0 1rem;
  }
`;
