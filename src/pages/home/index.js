import React, { useEffect } from 'react';
import { observer } from 'mobx-react'
import { } from 'react-router-dom'
import { HomeSortType, Tab, Charts } from 'base/enums'
import { useStores } from 'stores'
import { UserOutlined } from '@ant-design/icons';
import Selects from 'components/Selects'
import News from 'components/home/News'
import Swiper from 'components/home/Swiper'
import Search from 'containers/search'
import DragLayout from 'components/DragLayout'
import './index.less'
import { Select } from 'antd';
const { Option } = Select;
const Home = observer((props) => {
  const stores = useStores()
  const { homeStore } = stores
  const { listData = {} } = homeStore

  useEffect(() => {
    requestList()
  }, [])

  const requestList = async () => {
    await homeStore.fetchList({
      page: 1,
      size: 10,
      order_type: HomeSortType.NEWEST,
    })
  }

  return (
    <div className="main">
      <div className="chart">
        <div className="ansy">
          <div className="txt">图表分析</div>
          <Select defaultValue="公共看板" bordered={false} style={{ color: "#000" }} onChange={homeStore.chartChange}>
            <Option value="0">公共看板</Option>
            <Option value="1">个人看板</Option>
          </Select>
        </div>
        <div className="tab">
          <div>
            <UserOutlined />
            <Select defaultValue="实时新闻" bordered={false} style={{ color: "#000", fontSize: "13" }} onChange={homeStore.chartChange}>
              <Option value="0">实时新闻</Option>
              <Option value="1">精选新闻</Option>
            </Select>
          </div>
          <div><UserOutlined /> &nbsp;最近七天</div>
          <div>|</div>
          <div>+ &nbsp;
          <Selects name={"添加图表"} data={Charts} width={100} height={90} />
          </div>
          <div><UserOutlined /> &nbsp;
            <Selects name={"创建分享报告"} data={Tab} width={127} height={90} />
          </div>
          <div> &nbsp;
          <Selects name={"⋮"} data={Charts} width={100} height={90} />
          </div>
        </div>
      </div>

      <DragLayout />

      <News />
      <Swiper state={false} />
      <Swiper />

      {/*  <nav>
        <Link to={{ pathname: '/about' }}>about</Link>
      </nav>
      <h1>This is home page! {homeStore.counter}</h1>
      <button type="primary" onClick={homeStore.increase}>increase</button>
      <h2>以下是远程数据</h2>
      <div className="list-wrapper">
        {listData.loading ?
          <div>加载中...</div> :
          <List list={listData.list} />
        }
      </div> */}
        <Search />

    </div >
  )
})

export default Home