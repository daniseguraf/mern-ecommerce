import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { userLogout } from './../../actions/userActions';

import { Menu } from 'antd';
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { SubMenu, Item } = Menu;

const Nav = () => {
  const [current, setCurrent] = useState('home');

  const history = useHistory();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const handleLogout = () => {
    dispatch(userLogout());
    history.push('/login');
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      className="ec-nav"
    >
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>

      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
        <Item key="setting:1">{user?.email?.split('@')[0]}</Item>
        <Item key="setting:2">Option 2</Item>
        <Item key="setting:3" icon={<LogoutOutlined />} onClick={handleLogout}>
          Logout
        </Item>
      </SubMenu>

      <Item key="login" icon={<UserOutlined />}>
        <Link to="/login">Login</Link>
      </Item>

      <Item key="register" icon={<UserAddOutlined />}>
        <Link to="/register">Register</Link>
      </Item>
    </Menu>
  );
};

export default Nav;
