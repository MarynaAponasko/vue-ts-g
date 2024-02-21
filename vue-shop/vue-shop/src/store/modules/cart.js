export default {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0
    }
  },
  getters: {
    cartItems(state) {
      return state.items
    },
    cartTotal(state) {
      return state.total
    },
    cartQty(state) {
      return state.qty
    }
  },
  mutations: {
    addProductToCart(state, payload) {
      const productData = payload
      const productInCartIndex = state.items.findIndex((ci) => ci.productId === productData.id)

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty += 1
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1
        }
        state.items.push(newItem)
      }
      state.qty += 1
      state.total += productData.price
    },

    removeProductFromCart(state, payload) {
      const prodId = payload
      const productInCartIndex = state.items.findIndex((cartItem) => cartItem.productId === prodId)

      const productData = state.items[productInCartIndex]
      if (productData.qty > 1) {
        productData.qty -= 1
      } else {
        state.items.splice(productInCartIndex, 1)
      }
      state.qty -= 1
      state.total -= productData.price
    }
  },
  actions: {
    addToCart(context, payload) {
      const prodId = payload.id
      const products = context.rootGetters['prods/products']
      const product = products.find((prod) => prod.id === prodId)
      context.commit('addProductToCart', product)
    },
    removeFromCart(context, payload) {
      context.commit('removeProductFromCart', payload)
    }
  }
}
