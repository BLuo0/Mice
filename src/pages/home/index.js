import React, { useEffect } from 'react';
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import List from 'components/List'
import Head from 'pages/Head'

import { HomeSortType } from 'base/enums'

import { useStores } from 'stores'

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
    <div>
      <Head />
      <nav>
        <Link to={{ pathname: '/about' }}>about</Link>
      </nav>
      <h1>This is home page! {homeStore.counter}</h1>
      <button type="primary" onClick={homeStore.increase}>increase</button>
    {/*   <h2>以下是远程数据</h2>
      <div className="list-wrapper">
        {listData.loading ?
          <div>加载中...</div> :
          <List list={listData.list} />
        }
      </div> */}
    </div>
  )
})

export default Home