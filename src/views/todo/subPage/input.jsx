import React from 'react'
import { Input } from 'antd';
class InputX extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            value: ''
        }
    }
    render(){
        return(
            <div>
                <Input.Search 
                size="large"
                type="text" 
                value={this.state.value}
                onChange = {this.changeValue.bind(this)}
                onKeyUp={this.keyUpHandler.bind(this)}
                placeholder="输入"
                />
            </div>
        )
    }
    changeValue(e){
        this.setState({
            value: e.target.value
        })
    }
    keyUpHandler(e){
        let value = this.state.value
        if(e.keyCode === 13 && value.trim()){
            this.props.submit(value);
            this.setState({
                value: ''
            })
        }
    }
}
export default InputX