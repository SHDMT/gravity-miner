import React, { Component } from "react";
import {Icon, Menu, Dropdown} from 'antd';

import './layout.css';

class HeaderView extends Component {
    constructor(props){
        super(props);
        this.menu = (
            <div className="account-panel-menu-area">
              <Menu selectedKeys={[]}>
                <Menu.Item key="0" onClick={() => this.handleLogout()}>
                  <Icon type="lock" theme="outlined" />
                  退出登陆
                </Menu.Item>
              </Menu>
            </div>
          );
    }
    handleLogout(){
        var evt = new CustomEvent('login', { detail: false });
        window.dispatchEvent(evt);
    }
    render() {
        return (
            <div>
                <Dropdown overlay={this.menu} trigger={["click"]}>
                <div className="user-panel">
                    <Icon style={{fontSize:20}} type="user" />
                    <span className="user-panel-name">Admin</span>
                </div>
                </Dropdown>
            </div>
        );
    }
}
export default HeaderView;
