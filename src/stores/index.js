import { createContext, useContext } from 'react'
import { useStaticRendering } from 'mobx-react'

import { HomeStore } from './homeStore'


const isServer = typeof window === 'undefined'
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer)
const StoreContext = createContext()
let store = {
    homeStore: new HomeStore(),
  }

// const getStore = (initialData={}) => ({
//   homeStore: new HomeStore(initialData.homeStore),
// })

// function initializeData(initialData = {}) {

//   if (isServer) {
//     return getStore(initialData)
//   }

//   if (!store) {
//     store = getStore(initialData)
//   }

//   return store
// }

// function StoreProvider({ children, initialData }) {
//   store = initializeData(initialData)

//   return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
// }

const useStores = () => (useContext(StoreContext) || {})

export { StoreContext, useStores, store }