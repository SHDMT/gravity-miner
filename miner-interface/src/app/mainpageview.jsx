import React, { Component } from "react";
import { Layout } from "antd";
import PageContainer from './pagecontainer';
import NavPage from './viewpart/nav/navpageview';
import HomePage from './viewpart/home/homepage';
import MiningPage from './viewpart/mining/miningpage';
import RewardPage from './viewpart/reward/rewardpage';
import SettingPage from './viewpart/setting/settingpage';
import HeaderView from './viewpart/header/headerview';
import FooterView from './viewpart/footer/footerview';

const { Header, Content, Sider, Footer } = Layout;

class MainPageView extends Component {
    constructor(props){
        super(props);
        this.currentID = 0;
        this.state = {
            pages: new Map(),
            selectedPage: 0
        }
        this.setupPages();
        window.addEventListener("selectpage", (e) => this.selectPage(e));
    }
    setupPages() {
        this.addPage("Home", "主页", <HomePage />, "home");
        // this.addPage("Mining", "挖矿记录", <MiningPage />, "file-search");
        // this.addPage("Reward", "奖励记录", <RewardPage />, "dollar");
        this.addPage("Setting", "设置", <SettingPage />, "setting");
    }

    selectPage(e) {
        let id = e.detail;
        if (this.state.selected != id) {
            this.setState({
                selected: id
            });
        }
        this.setState({selectedPage: id});
        sessionStorage.setItem("selectedPage", id);
    }

    addPage(name, title, obj, icon, refresh = false) {
        this.state.pages.set(this.currentID, {
            id: this.currentID,
            name: name,
            title: title,
            obj: obj,
            icon: icon,
            refresh: refresh,
        });
        return this.currentID++;
    }
    render() {
        let selectedPage = sessionStorage.getItem("selectedPage");
        if(selectedPage == null){
            selectedPage = 0;
        }
        return (
            <Layout className="app-content">
                <Layout>
                    <Sider className="sider"><NavPage customIcon={false} pages={this.state.pages} selected={selectedPage} showLogo={true} title="Gravity" /></Sider>
                    <Layout>
                        <Header className="header"><HeaderView /></Header>
                        <Content className="content"><PageContainer  pages={this.state.pages} selected={selectedPage}/></Content>
                   
                        <Footer className="footer"><FooterView /></Footer>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
export default MainPageView;
