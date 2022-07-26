import React from "react";
import { ActiveLink, CurrentCity, Link, Menu, Nav, NavButton, P, Hr } from "./style";

const Navigation = () => {
  return (
    <>
    <Nav>
      <CurrentCity>
        <P>My Cities (1/5)</P>
      </CurrentCity>
      <Menu>
        <ActiveLink class="active" href="#">
          Celsius
        </ActiveLink>
        <Link href="#">Fahrenheit</Link>
        <NavButton>Translate</NavButton>
      </Menu>
    </Nav>
    <Hr/>
    </>
    
  );
};

export default Navigation;
