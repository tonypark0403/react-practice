import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { SettingFilled } from '@ant-design/icons';

/**
 *
 * @param {object} param
 * @param {() => void} param.logout
 */
export default function Settings({ logout }) {
  const menu = (
    <Menu>
      <Menu.Item onClick={logout}>Logout</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={['click']} placement='bottomRight'>
      <Button shape='circle' icon={<SettingFilled />} />
    </Dropdown>
  );
}
