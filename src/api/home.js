import { config, http } from 'utils'

const api = config.API_DOMAIN

export default {

  queryList(params) {
    return http.get(`${api}/composition/feature`, params)
  },

}