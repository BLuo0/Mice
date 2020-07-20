import React, { PureComponent } from 'react';
import { Tooltip } from 'antd';
import { WidthProvider, Responsive } from "react-grid-layout";
import ReactEcharts from 'echarts-for-react';
import { DeleteOutlined, ExpandAltOutlined, SettingFilled } from '@ant-design/icons';
import { getBarChart, getLineChart } from "./chart";
import 'components/DragLayout/index.less'
import 'echarts-wordcloud'
import 'echarts/map/js/china';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class DragLayout extends PureComponent {
    static defaultProps = {
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
        rowHeight: 100,
    };

    constructor(props) {
        super(props);

        this.state = {
            layouts: this.getFromLS("layouts") || {},
            widgets: [
                { h: 2, i: "1594777444660", type: "bar", w: 3, x: 0, y: 0 },
                { h: 2, i: "1594777645178", type: "line", w: 3, x: 3, y: 0 }
            ]
        }
    }

    getFromLS(key) {
        let ls = {};
        if (global.localStorage) {
            try {
                ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
            } catch (e) {
                /*Ignore*/
            }
        }
        return ls[key];
    }

    saveToLS(key, value) {
        if (global.localStorage) {
            global.localStorage.setItem(
                "rgl-8",
                JSON.stringify({
                    [key]: value
                })
            );
        }
    }
    generateDOM = () => {
        return this.state.widgets.map((l, i) => {
            let option;
            if (l.type === 'bar') {
                option = getBarChart();
            } else if (l.type === 'line') {
                option = getLineChart();
            }
            console.log(1)
            let component = (
                <ReactEcharts
                    option={option}
                    notMerge={true}
                    lazyUpdate={true}
                    style={{ width: '100%', height: '100%' }}
                />
            )
            return (
                <div key={l.i} data-grid={l}>
                    <div className='remove' >
                        <Tooltip placement="top" title={'图表设置'}>
                            <SettingFilled />
                        </Tooltip>
                        <Tooltip placement="top" title={'进入详情'}>
                            <ExpandAltOutlined className="child" />
                        </Tooltip>
                        <Tooltip placement="top" title={'移除表格'}>
                            <DeleteOutlined onClick={this.onRemoveItem.bind(this, i)} />
                        </Tooltip>
                    </div>
                    {component}
                </div>
            );
        });
    };

    addChart(type) {
        const addItem = {
            x: (this.state.widgets.length * 3) % (this.state.cols || 12),
            y: Infinity, // puts it at the bottom
            w: 3,
            h: 2,
            i: new Date().getTime().toString(),
        };
        this.setState(
            {
                widgets: this.state.widgets.concat({
                    ...addItem,
                    type,
                }),
            },
        );
    };

    onRemoveItem(i) {
        console.log(this.state.widgets)
        this.setState({
            widgets: this.state.widgets.filter((item, index) => index != i)
        });

    }

    onLayoutChange(layout, layouts) {
        this.saveToLS("layouts", layouts);
        this.setState({ layouts });
    }

    render() {
        return (
            <>
                <div onClick={this.addChart.bind(this, 'bar')}>添加柱状图</div >
                <div>
                    <ResponsiveReactGridLayout
                        className="layout"
                        {...this.props}
                        layouts={this.state.layouts}
                        onLayoutChange={(layout, layouts) =>
                            this.onLayoutChange(layout, layouts)
                        }
                    >
                        {this.generateDOM()}
                    </ResponsiveReactGridLayout>
                </div>
            </>
        )
    }
}
