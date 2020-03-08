import React from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize';

function Nav() {
    return (
        <Navbar className="amber lighten-1"
            alignLinks="right"
            brand={<a className="brand-logo" href="#"><img src="./images/logo.png" /></a>}
            menuIcon={<Icon>menu</Icon>}
            centerChildren="1"
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}>
            <NavItem href="/">
                Login
            </NavItem>
            <NavItem href="/saved">
                Sign Up
            </NavItem>
        </Navbar>
    );
}

export default Nav;