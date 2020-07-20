import React from 'react';
import { Popover } from 'antd';
import './index.less'

class Selects extends React.Component {
    state = {
        visible: false,
        id: null,
    }
    hide = (id) => {
        console.log(id)
        this.setState({
            visible: false,
            id
        });
    };
    handleVisibleChange = visible => {
        this.setState({ visible });
    };

    render() {
        return (
            <Popover
                placement="bottom"
                visible={this.state.visible}
                onVisibleChange={this.handleVisibleChange}
                overlayClassName='ae'
                content={
                    <div className="template" style={{ width: this.props.width + 'px', height: this.props.height + 'px', }}>
                        {
                            this.props.data.map((item, index) => (
                                < div className="tablist" key={index} onClick={this.hide.bind(this, item.id)}>{item.name}</div>
                            ))
                        }
                    </div>
                }
                trigger="click"
            >
                {this.props.name}
            </Popover>
        )
    }

}
export default Selects