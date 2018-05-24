import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'

import Homer from './../layout/index.jsx'
import App from './../views/app/App.jsx'
import Todo from './../views/todo/index'

class RouteMap extends React.Component{
    render(){
        return(
            <Router history={this.props.history} onUpdata={this.updataHander.bind(this)}>
                <Route path='/' component={Homer}>
                    <IndexRoute component={App}/>
                    <Route path='todo' component={Todo}/>
                    
                </Route>
            </Router>
        )
    }
    updataHander(){
        console.log('跳转')
    }
}

export default RouteMap