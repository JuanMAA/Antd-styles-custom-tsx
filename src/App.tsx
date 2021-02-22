import React from 'react';
import { cambiarColor } from './functions.js'
import { Button, Switch, Space, Menu } from "antd"; 
import styles from './App.module.less';
const { SubMenu } = Menu;


const App = () => {

  const handleSwitchChange = (checked: any) => {
    cambiarColor(checked)
  };

  return (
    <main className={styles.app}>
      <Menu mode="horizontal">
        <Menu.Item key="mail" >
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled >
          Navigation Two
        </Menu.Item>
        <SubMenu key="SubMenu" title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
      <div style={{ textAlign: "center" }}>
        <Space>
          Change Color
            <Switch onChange={handleSwitchChange} />
        </Space>
      </div>
      <Button type="primary">Hello, Ant Design!</Button>
      <a href="foo.bar">I'm a link. Click me, please!</a>
    </main>
  );
};

export default App;