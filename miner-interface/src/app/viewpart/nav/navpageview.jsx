import React, { Component } from 'react';
import NavLogo from './navlogo';
import PageTool from '../tools/pagetool';
import {Menu, Icon} from 'antd';

import './layout.css';

class NavPageView extends Component {

    constructor(props) {
        super(props);
        this.pages = props.pages;
        this.invokeSelectPage = props.selectPage;
        this.itemList = [];
        this.setupPage();
    }

    setupPage() {
        this.pages.forEach((page, id) => {
            let name = page.name;
            let src = "../../../../imgs/" + page.name.toLowerCase() + "_icon.png";
            let title = page.title;
            let icon = page.icon;

            this.itemList.push({
                id: id,
                name: name,
                title: title,
                img: src,
                icon: icon
            });
        });
    }

    handleClick(id){
        PageTool.selectPage(id);
    }

    buildIcon(customIcon, img, icon){
        if(customIcon){
            return <img className="navpage-item-icon" src={img}/>
        }else{
            return <Icon type={icon} />    
        }
    }

    render() {
        let logo = this.props.showLogo?<NavLogo title={this.props.title}/>:"";
        return (
            <div className="navpage-area">
                {logo}
                <Menu
                    defaultSelectedKeys={[this.props.selected + '']}
                    defaultOpenKeys={[this.props.selected + '']}
                    mode="inline"
                >
                    {this.itemList.map(item => 
                    <Menu.Item onClick={()=>this.handleClick(item.id)} key={item.id} title={item.title}>
                        {this.buildIcon(this.props.customIcon, item.img, item.icon)}
                        <p className="navpage-item-name">{item.title}</p>
                    </Menu.Item>
                    )}
                </Menu>
            </div>
        );
    }
}
export default NavPageView