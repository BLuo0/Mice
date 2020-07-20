import React from 'react';
import { TreeSelect ,Checkbox} from 'antd';
import { SearchOutlined, DownOutlined, RightOutlined } from '@ant-design/icons';

import './index.less'

const Search = () => {
    return (
        <div className="panel">
            <div className="text">该分类下的新闻分类</div>
            <div className="ipt">
                <SearchOutlined className="icon" />
                <input placeholder={'请输入分类'} />
            </div>
            <div className="treebox">
                <div className='tree'>
                    <div className="check">
                        <Checkbox  />
                        <span>全部分类({333})</span>
                    </div>
                    <div>
                        {
                            true ? <RightOutlined /> : <DownOutlined />
                        }
                    </div>
                </div>
                <div style={{ height: 100, }}>

                </div>
            </div>
        </div>
    )
}

export default Search