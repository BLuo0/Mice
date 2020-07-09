import React from 'react'
import { NavLink } from 'react-router-dom'
import { Path } from 'base/enums'
import Moreset from 'components/Moreset'
import Userinfo from 'components/Userinfo'
import Downloads from 'components/Downloads'

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
                    <i></i>
                </main>
                <Moreset />
                <Downloads />
                <Userinfo />
            </div>
        </div >
    )
}
export default Head