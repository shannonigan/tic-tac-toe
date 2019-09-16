import React from 'react';
import {NavLink, } from 'react-router-dom';
import { Menu, Segment, } from 'semantic-ui-react';


const Navbar = () => (
  <>
  <Segment>
  <Menu style={{fontSize: '18px',}}>
    <Menu.Item>
      <NavLink
        exact
        to='/'
        activeStyle={styles.active}
        >
          Home
      </NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink
        exact
        to='/game'
        activeStyle={styles.active}
        style={{color: 'purple'}}
        >
          Play Game
      </NavLink>
    </Menu.Item>
  </Menu>
  </Segment>
</>
)

const styles = {
  active: {
    color: 'teal',
    fontWeight: 'bold',
    fontSize: '20px',
  }
}

export default Navbar;