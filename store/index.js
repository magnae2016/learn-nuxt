import { fetchCartItems } from '~/api'

export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
    }
    state.cartItems.push(newCartItem)
  },
  setCartItems(state, cartItems) {
    state.cartItems = cartItems.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }))
  },
}

export const actions = {
  async fetchCartItems({ commit }) {
    const { data } = await fetchCartItems()
    commit('setCartItems', data)
  },
  async nuxtServerInit(storeContext, nuxtContext) {
    const { dispatch } = storeContext
    await dispatch('fetchCartItems')
    // const { data } = await fetchCartItems()
    // commit('setCartItems', data)
  },
}
