import React from 'react';
import { Popover, TreeSelect } from 'antd';
import './index.less'

const { SHOW_PARENT } = TreeSelect;

const treeData = [
    {
        title: 'Node1',
        value: '0-0',
        key: '0-0',
        children: [
            {
                title: 'Child Node1',
                value: '0-0-0',
                key: '0-0-0',
            },
        ],
    },
    {
        title: 'Node2',
        value: '0-1',
        key: '0-1',
        children: [
            {
                title: 'Child Node3',
                value: '0-1-0',
                key: '0-1-0',
            },
            {
                title: 'Child Node4',
                value: '0-1-1',
                key: '0-1-1',
            },
            {
                title: 'Child Node5',
                value: '0-1-2',
                key: '0-1-2',
            },
        ],
    },
];

export default class Tags extends React.Component {
    state = {
        value: ['0-0-0'],
        visible: true
    };

    onChange = value => {
        console.log('onChange ', value);
        this.setState({ value });
    };
    handleVisibleChange = visible => {
        this.setState({ visible });
    };
    render() {
        const tProps = {
            treeData,
            value: this.state.value,
            onChange: this.onChange,
            treeCheckable: true,
            showCheckedStrategy: SHOW_PARENT,
            treeDefaultExpandAll: true,
            placeholder: 'Please select',
            style: {
                width: '100%',
            },
        };
        return (
            <Popover
                placement="bottom"
                visible={this.state.visible}
                onVisibleChange={this.handleVisibleChange}
                content={
                    <div className="templates" >
                        该分类下面的新闻分类
                        <TreeSelect {...tProps} />

                    </div>

                }
                trigger="click"
            >
                <div>
                    <span>分类</span>
                </div>
            </Popover>
        )
    }
}

