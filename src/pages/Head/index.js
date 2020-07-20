import React from 'react'
import { NavLink } from 'react-router-dom'
import { Path } from 'base/enums'
import Moreset from 'components/home/Moreset'
import Userinfo from 'components/home/Userinfo'
import Downloads from 'components/home/Downloads'
import { SearchOutlined } from '@ant-design/icons';


import './index.less'
const Head = () => {
    return (
        < div id="head" >
            <div className="logo">
                <a href="/" >
                    <img src="http://msppic.meihua.info/FtHhIfHnqDUPfQEUI6gHSgvWulD-" />
                </a>
            </div>
            <div className="tab">
                {
                    Path.map((item, index) => (
                        <NavLink to={item.pathTo} key={index} activeClassName="active">{item.title}</NavLink>
                    ))
                }
            </div>
            <div className="setinfo">
                <main>
                    <SearchOutlined style={{ fontSize: "20px", color: "#FFF" }} />
                </main>
                <Moreset />
                <Downloads />
                <Userinfo />
            </div>
        </div >
    )
}
export default Head