import React, { Component } from 'react';
import { Input, Form, Button, Icon, Row, Col } from 'antd';

import request from './request';

const FormItem = Form.Item;
class LoginPageView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: "",
            password: "",
            passwordHelp: { status: "", help: "" },
        }
    }
    handleUserName(e) {
        this.setState({
            uname: e.target.value
        });
    }
    handlePasswordName(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin() {
        let params = {
            uname: this.state.uname,
            password: this.state.password
        }
        request('login', params, (res) => {
            if (res.status === 200 && res.data === "success") {
                this.setPasswordFormStatus("", "");
                var evt = new CustomEvent('login', { detail: true });
                window.dispatchEvent(evt);
            } else {
                this.setPasswordFormStatus("error", "密码输入错误！");
            }
        });
    }

    setPasswordFormStatus(status, help) {
        this.setState({
            passwordHelp: { status: status, help: help }
        });
    }

    render() {
        return (
            <div className="login-page">
                <div className="login-form" style={{margin:"0 auto", width:"405px"}}>
                    <Row gutter={16}>
                        <Col span={24}>
                            <div className="login-logo">
                                <img className="login-logo-icon" src="../imgs/logo.png" /><div className="login-logo-title">Gravity挖矿程序</div>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={7}>
                            <div className="login-item">
                                <FormItem
                                    hasFeedback
                                    validateStatus=""
                                    help=""
                                >
                                    <Input prefix={
                                        <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                                    }
                                        style={{ width: 400 }}
                                        placeholder="请输入用户名"
                                        onChange={(e) => this.handleUserName(e)}
                                        value={this.state.uname} />
                                </FormItem>
                            </div>
                            <div className="login-item">
                                <FormItem
                                    hasFeedback
                                    validateStatus={this.state.passwordHelp.status}
                                    help={this.state.passwordHelp.help}
                                >
                                    <Input prefix={
                                        <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                                    }
                                        style={{ width: 400 }}
                                        placeholder="请输入密码"
                                        type="password"
                                        onChange={(e) => this.handlePasswordName(e)}
                                        value={this.state.password} />
                                </FormItem>
                            </div>
                        </Col>
                    </Row>
                            <Button style={{float:"right"}} type="primary" onClick={() => this.handleLogin()}>登陆</Button>
                </div>
            </div>
        );
    }
}

export default LoginPageView;