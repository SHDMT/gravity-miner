import React, { Component } from "react";
import {Button, Row, Col} from 'antd';
import BlockChainInfoPanel from "./blockchaininfopanel";
import MiningController from './miningcontroller';

import './layout.css';
class HomePage extends Component {
  
    render() {
        return (
            <div className="homepage">
                <BlockChainInfoPanel />
                <MiningController />
            </div>
        );
    }
}
export default HomePage;
