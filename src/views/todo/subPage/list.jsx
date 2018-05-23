import React, {Component} from 'react'

class List extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
           
        }
    }
    render(){
        return (
            <ul>
                {
                    this.props.data.map((item,index)=>{
                        return (
                            <li 
                            onClick={this.props.clearThis.bind(this,item.id)} 
                            key={item.id}
                            >
                                {item.index}
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default List