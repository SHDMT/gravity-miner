import React, { Component } from "react";
import { Card, Col, Row } from 'antd';
import request from '../../request';

const REFRESH_INTERVAL = 5000;
class BlockChainInfoPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            mci: 0,
            isCommittee: false,
        }
    }

    onInterval(){
        request("getinfo", {}, (res)=>{
            if(res.status === 200){
                this.setState({
                    height: res.data.info.currentHeight,
                    mci: res.data.info.currentMCI,
                    isCommittee: res.data.isCommittee
                });
            }
        })
    }
    componentDidMount() {
        this.intervalObj = setInterval(() => this.onInterval(), REFRESH_INTERVAL);
        this.onInterval();
    }

    componentWillUnmount() {
        clearInterval(this.intervalObj);
    }
    render() {
        return (
            <div className="homepage-panel blockchaininfo-panel">
                <h2 className="panel-title">区块链信息</h2>
                <Row gutter={16}>
                    <Col className="gutter-row" span={1}></Col>
                    <Col className="gutter-row" span={7}>
                        <Card className="blockchaininfo-card" title="区块高度" bordered={false} style={{ width: 300 }}>
                            <h3>{this.state.height}</h3>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={7}>
                        <Card className="blockchaininfo-card" title="主链索引" bordered={false} style={{ width: 300 }}>
                            <h3>{this.state.mci}</h3>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={7}>
                        <Card className="blockchaininfo-card" title="委员会" bordered={false} style={{ width: 300 }}>
                            <h3>{this.state.isCommittee?"是":"否"}</h3>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={1}></Col>
                </Row>
            </div>
        );
    }
}
export default BlockChainInfoPanel;
