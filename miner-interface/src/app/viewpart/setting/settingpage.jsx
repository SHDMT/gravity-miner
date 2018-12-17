import React, { Component } from "react";
import {Input, Form, Button, message} from "antd";
import request from '../../request';

const FormItem = Form.Item;
class SettingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            miningAddress: ""
        };
    }

    componentDidMount(){
        request("getminingaddr", {}, (res)=>{
            if(res.status == 200){
                this.setState({
                    miningAddress:res.data
                });
            }
        });
    }

    handleMiningAddress(e){
        this.setState({
            miningAddress: e.target.value
        });
    }
    handleSubmit(){
        let addr = this.state.miningAddress;
        request("updateminingaddr", {address: addr}, (res)=>{
            if(res.status == 200){
                message.success("挖矿地址修改成功!");
            }else{
                message.error("挖矿地址修改失败!");
            }
        });
    }
    
    render() {
        return (
            <div>
                <div className="setting-item">
                    <p>挖矿地址：</p>
                    <FormItem
                        hasFeedback
                        validateStatus=""
                        help=""
                    >
                        <Input style={{ width: 400 }} placeholder="请输入挖矿地址" onChange={(e) => this.handleMiningAddress(e)} value={this.state.miningAddress} />
                    </FormItem>
                </div>

                <Button type="primary" onClick={()=>this.handleSubmit()}>更改</Button>
            </div>
        );
    }
}
export default SettingPage;
