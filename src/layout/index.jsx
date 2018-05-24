import React from 'react'
import './index.less'
import Top from './../components/top/top.jsx'

class Homer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div style={{paddingTop:50}}>
               <Top />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Homer