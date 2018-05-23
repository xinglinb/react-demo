import React, {Component} from  'react'
import './index.less'

import List from './subPage/list'
import Input from './subPage/input'
class Todo extends Component {
	constructor(props, context){
		super(props,context);
		this.state = {
			data: []
		}
	}
	render(){
		return (
			<div>
				<Input 
					submit={this.addData.bind(this)}
				/>
				<List 
					data={this.state.data} 
					clearThis={this.clearThis.bind(this)}
				/>
			</div>
		);
	}
	clearThis(id){
		let data = this.state.data
		this.setState({
			data: data.filter(index=>index.id!==id)
		});
	}
	addData(value){
		let data = this.state.data
		data.unshift({
			id: (data.length > 0 ? data[0].id : -1)+ 1,
			index: value
		})
		this.setState({
			data: data
		})
	}
}
export default Todo