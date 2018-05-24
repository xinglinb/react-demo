import React, {Component} from 'react'
import { List } from 'antd';
class ListX extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
           
        }
    }
    render(){
        return (
            <div>
                <List
                    bordered
                    dataSource={this.props.data}
                    renderItem={item => (
                        <List.Item 
                            key={item.id}
                            onClick={this.props.clearThis.bind(this,item.id)}
                        >
                            {item.id}、{item.index}
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default ListX