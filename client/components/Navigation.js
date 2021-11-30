import { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import {useState, useMemo, useCallback} from 'react'
import 'antd/dist/antd.css'
import './index.css'

const { SubMenu } = Menu

export default function(){
  
  [item, setItem] = useState(null)
  
  handleClick = e => {
    // Link to?
  };
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 311 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="Nav">
          <Menu.ItemGroup key="g1" title="Chapter one">
            <Menu.Item key="1">Introdution to blockhain</Menu.Item>
            <Menu.Item key="2">Installation</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu> 
      </Menu>
    );
  }
