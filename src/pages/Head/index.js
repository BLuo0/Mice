import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Path } from 'base/enums'
import './index.less'
export default class Head extends Component {
    state = {
        path: Path,
        selIndex: 0
    }
    sel = (index) => {
        const path = this.state.path
        path.forEach(item => {
            item.checked = false
        });
        path[index].checked = true
        this.setState({
            path
        })
    }
    render() {
        return (
            < div id="head" >
                <div className="logo">
                    <a href="/" >
                        <img src="http://msppic.meihua.info/FtHhIfHnqDUPfQEUI6gHSgvWulD-" />
                    </a>
                </div>
                <div className="tab">
                    {
                        this.state.path.map((item, index) => (
                            <Link to={{ pathname: item.pathname }} key={index} style={item.checked ? { color: '#fff', borderBottom: ' 2px solid orange' } : {}} onClick={this.sel.bind(this, index)}>{item.title}</Link>
                        ))
                    }
                </div>
                <div className="setinfo">
                    <div><i></i></div>
                    <div><i></i></div>
                    <div><i></i></div>
                    <div className="userinfo">
                        <span>UserName</span>
                        <img />
                    </div>
                </div>

            </div >
        )
    }
}
