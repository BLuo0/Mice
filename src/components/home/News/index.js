import React from 'react';
import { Checkbox, Pagination } from 'antd';
import './index.less'
import { RightOutlined, DownOutlined, InfoCircleOutlined, MoreOutlined, StarOutlined, IeOutlined, WechatOutlined, LineChartOutlined } from '@ant-design/icons';
export default class News extends React.Component {
    state = {
        hide: true,
        list: [{ checked: true }, {}],
        display: false
    }
    target = () => {
        const hide = this.state.hide
        console.log(hide)
        if (hide) {
            this.setState({
                hide: false
            })
        } else (
            this.setState({
                hide: true
            })
        )
    }
    show = () => {
        const display = this.state.display
        if (display) {
            this.setState({
                display: false
            })
        } else (
            this.setState({
                display: true
            })
        )
    }
    render() {
        return (
            <div className="news" >
                <div className="triangle"></div>
                <div className="head">
                    <div className="title" onClick={this.target}>
                        {
                            this.state.hide ? <DownOutlined /> : <RightOutlined />
                        }

                        <span className='txt'>新闻</span>
                    </div>
                    <label className="checkall">
                        <input type="checkbox" />
                        <span>全选</span>
                    </label>
                </div >
                <div className={this.state.hide ? 'show' : 'hide'}>
                    <div className="set">
                        <div className='txt'>新闻列表</div>
                        <div className="screen">
                            <div className='screen_con'>
                                <span >分类</span>
                                <DownOutlined />
                            </div>
                            <div className='screen_con'>
                                <span >来源媒体</span>
                                <DownOutlined />
                            </div>
                            <div className='screen_con'>
                                <span >筛选</span>
                                <DownOutlined />
                            </div>
                        </div>
                    </div>
                    {
                        this.state.list.map((item, index) => (
                            <div key={index}>
                                <div className="showview" >
                                    <div className="con" >
                                        <div className="con_txt">
                                            {
                                                item.checked ? <input type="checkbox" /> : <span>·</span>

                                            }
                                            <span className="icon">
                                                {
                                                    this.state.hide ? <IeOutlined /> : <WechatOutlined />
                                                }
                                            </span>
                                            <span className="unsensitive">
                                                {
                                                    this.state.hide ? <span>敏感</span> : <span ></span>
                                                }
                                            </span>
                                            <span className="text" >百年稻花源 万顷稻花香 ——扎赉特旗国家现代农业产业园发展纪实<span>{1}</span></span>
                                            <div className="hideview">
                                                {

                                                    !item.checked && <span className="check"><input type="radio" /></span>
                                                }
                                                <span className="newdetail"><InfoCircleOutlined /></span>
                                                <div className="more">
                                                    <LineChartOutlined />
                                                    <StarOutlined />
                                                    <MoreOutlined />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detail" >
                                            <input type="radio" /><span>共有<span style={{ color: 'orange ' }}>{1}</span>条相似新闻，其中<span style={{ color: 'red' }}>{1}</span>条敏感信息
                                        <span className="look" onClick={() => { this.show() }} >查看全部
                                              {
                                                        this.state.display ? <DownOutlined /> : <RightOutlined />
                                                    }
                                                </span><LineChartOutlined /></span>
                                        </div>
                                    </div>
                                    <div className="from">
                                        <span>外暖文职-文本</span>
                                        <span style={{ margin: '0 40px 0 20px' }}>[网络]和方位额</span>
                                        <span>4小时前</span>
                                    </div>

                                </div>
                                {this.state.display && <div className="newschilds" ref="childs">
                                    <div className="showview">
                                        <div className="con">
                                            <div className="con_txt">
                                                {
                                                    item.checked ? <input type="checkbox" /> : <span>{index + 1},</span>

                                                }
                                                <span className="icon">
                                                    {
                                                        this.state.hide ? <IeOutlined /> : <WechatOutlined />
                                                    }
                                                </span>
                                                <span className="unsensitive">
                                                    {
                                                        this.state.hide ? <span>敏感</span> : <span ></span>
                                                    }
                                                </span>
                                                <span className="text">百年稻花源 万顷稻花香 ——扎赉特旗国家现代农业产业园发展纪实</span>
                                                <div className="hideview">
                                                    {
                                                        !item.checked && <span className="check"><input type="checkbox" /></span>
                                                    }
                                                    <div className="more" style={{ right: '-193px' }}>
                                                        <LineChartOutlined />
                                                        <StarOutlined />
                                                        <MoreOutlined />
                                                    </div>
                                                    <div className="newdetail" style={{ right: '-438px', top: "15px" }}><InfoCircleOutlined /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="from" >
                                            <span>外暖文职-文本</span>
                                            <span style={{ margin: '0 40px 0 20px' }}>[网络]和方位额</span>
                                            <span>4小时前</span>
                                        </div>

                                    </div>
                                </div>}

                            </div>
                        ))
                    }
                    <div style={{ padding: "20px 0 0", textAlign: 'right' }}>
                        <Pagination total={100} itemRender={
                            function itemRender(current, type, originalElement) {
                                if (type === 'prev') {
                                    return <a>上一页</a>;
                                }
                                if (type === 'next') {
                                    return <a>下一页</a>;
                                }
                                return originalElement;
                            }
                        } />
                    </div>

                </div>


            </div >
        )
    }

}