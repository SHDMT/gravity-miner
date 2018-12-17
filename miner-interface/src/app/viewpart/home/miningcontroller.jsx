import React, { Component } from "react";
import { Button, Row, Col, message } from 'antd';

import request from '../../request';
import { Line } from 'react-chartjs-2';

const REFRESH_INTERVAL = 1000;
const DATACAP = 10;

let dataset = {
    labels: [],
    datasets: [
        {
            label: '挖矿速度',
            fill: "start",
            lineTension: 0.1,
            backgroundColor: 'rgba(64,169,255,0.4)',
            borderColor: 'rgba(64,169,255,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(64,169,255,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(64,169,255,1)',
            pointHoverBorderColor: 'rgba(64,169,255,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        }
    ]
};

let options = {
    animation: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

class MiningController extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ismining: false,
            data: dataset
        }
    }

    handleStartMining() {
        let action = this.state.ismining ? "停止" : "启动"
        request("getminingaddr", {}, (res) => {
            let address = res.data;
            console.log(address)
            if(res.status == 200){
                request("startmining", {ncore:4, address: address}, (res) => {
                    if (res.status === 200) {
                        this.setState({
                            ismining: !this.state.ismining
                        });
                        console.log(res);
                        message.success(action + "挖矿成功!");
                        if (this.state.ismining) {
                            this.startRecord();
                        } else {
                            this.stopRecord();
                        }
                    } else {
                        console.log(res.data);
                        message.error(action + "挖矿失败!");
                    }
                });
            }else{
                message.error("获取挖矿地址错误！请重新设置挖矿地址");
            }
        })

    }

    timeFormat(time) {
        let timeFmt = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate() + " ";
        timeFmt = timeFmt + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        return timeFmt;
    }
    onInterval() {
        //2018-11-29 14:47:49
        let endTime = this.timeFormat(new Date());
        request("getcurrentspeed", {}, (res) => {
            if(this.state.data.datasets[0].data.length >= DATACAP){
                this.state.data.datasets[0].data.splice(0, 1);
                this.state.data.labels.splice(0, 1);
            }
            this.state.data.datasets[0].data.push(res.data);
            this.state.data.labels.push(endTime);
            this.setState({
                data:this.state.data
            });
        })
    }

    componentDidMount() {
        request("ismining", {}, (res) => {
            if (res.status == 200 && res.data) {
                this.setState({
                    ismining: res.data
                });
                this.startRecord();
            }
        })
    }

    startRecord() {
        this.intervalObj = setInterval(() => this.onInterval(), REFRESH_INTERVAL);
        this.onInterval();
    }

    stopRecord() {
        clearInterval(this.intervalObj);
    }

    render() {
        let btn = <Button onClick={() => this.handleStartMining()} type="primary">启动挖矿</Button>
        if (this.state.ismining) {
            btn = <Button onClick={() => this.handleStartMining()}>停止挖矿</Button>;
        }
        return (
            <div className="homepage-panel mining-controller">
                <h2 className="panel-title">挖矿控制</h2>
                <Row gutter={16}>
                    <Col span={1}>
                    </Col>
                    <Col span={7}>
                        {btn}
                    </Col>
                    <Col span={1}>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={1}>
                    </Col>
                    <Col span={24}>
                        <Line data={this.state.data} options={options} height="90" redraw/>
                    </Col>
                    <Col span={1}>
                    </Col>
                </Row>
            </div>

        );
    }
}
export default MiningController;
