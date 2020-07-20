import { observable, action } from 'mobx'

import { homeApi } from 'api'

export class HomeStore {
  @observable counter = 0
  @observable listData = {
    list: [],
    total: 0,
    terms: {},
    loading: false,
  }

  @action.bound
  chartChange = (e) =>{
    console.log(e)
  }

  @action.bound
  increase = () => {
    this.counter += 1
  }
  @action.bound
  async fetchList(params) {
    try {
      this.listData.loading = true
      const response = await homeApi.queryList(params)
      this.listData.loading = false
      if (response.success) {
        const data = response.data || {}
        this.listData = {
          list: data.data || [],
          total: data.total_count,
          terms: params,
        }
      }
      if (response)
        return response
    } catch (error) {
      return { success: false, data: {} }
    }
  }

}

