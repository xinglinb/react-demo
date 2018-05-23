import React from 'react'
import './../index.less'
class Input extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            value: ''
        }
    }
    render(){
        return(
            <input 
            className='input'
            type="text" 
            value={this.state.value}
            onChange = {this.changeValue.bind(this)}
            onKeyUp={this.keyUpHandler.bind(this)}
            />
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
export default Input