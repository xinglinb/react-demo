import React from 'react'
import { Menu, Icon, Button } from 'antd';
import { Link } from 'react-router'
import './top.less'
// const SubMenu = Menu.SubMenu;
import { browserHistory } from 'react-router';
const nowHash = browserHistory.getCurrentLocation().pathname

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed:false,
            act:['react']
        }
    }
    headHander(){
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    componentWillMount(){
        this.setState({
            act: nowHash === '/'
            ? ['react']
            : [nowHash.split('/')[1]]
        })
    }
    render() {
        return (
            <div className='header'>
                <Button 
                    type="primary" 
                    onClick={this.headHander.bind(this)} 
                    style={{ marginBottom: 16 ,margin: 15}}
                >
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <span>
                    { browserHistory.getCurrentLocation().pathname === '/' ? 'react' : browserHistory.getCurrentLocation().pathname.split('/')[browserHistory.getCurrentLocation().pathname.split('/').length-1]}
                </span>
                <div 
                    className='menu'
                    style={this.state.collapsed ? {left:0} : {}}
                >
                    <Menu
                        defaultSelectedKeys={this.state.act}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={false}
                    >
                        <Menu.Item key="react">
                            <Link to="/" onClick={this.headHander.bind(this)} >
                                <Icon type="pie-chart" />
                                <span>React</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="todo">
                            <Link to="/todo" onClick={this.headHander.bind(this)} >
                                <Icon type="desktop" />
                                <span>Todo List</span>
                            </Link>
                        </Menu.Item>
                        {/* <Menu.Item key="3">
                            <Icon type="inbox" />
                            <span>Option 3</span>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </SubMenu> */}
                    </Menu>
                </div>
            </div>
        )
    }
}
export default Index