export default {
    namespaced: true,
    state: {
        cart: [] // { product:{id,name,price}, quantity:Number }
    },
    getters: {
        getCartItems: state => {
            return state.cart; //TODO Maybe you need another output?
        },
        getCartItemsCount: state => {
            return state.cart.reduce((acc, item) => {
               return acc + item.quantity
            }, 0);
        }
    },
    mutations: {
        pushProductToCart(state, product) {
            state.cart.push({
                product,
                quantity: 1
            })
        },
        removeFromCart(state, product) {
            let cartPos = state.cart.indexOf(item => item.product.id === product.id);
            state.cart.splice(cartPos, 1);
        },
        incrementQuantity(state, product) {
            let cartItem = state.cart.find(item => item.product.id === product.id);
            cartItem.quantity++;
        },
        decrementQuantity(state, product) {
            let cartItem = state.cart.find(item => item.product.id === product.id);
            cartItem.quantity--;
        },
    },
    actions: {
        addToCart({commit, state}, product) {
            let cartItem = state.cart.find(item => item.product.id === product.id);
            if (cartItem) {
                commit('incrementQuantity', cartItem.product);
            } else {
                commit('pushProductToCart', product);
            }
        },
        decrementQuantity({commit, state}, product) {
            let cartItem = state.cart.find(item => item.product.id === product.id);
            if (cartItem.quantity === 1) {
                commit('removeFromCart', product);
            } else {
                commit('decrementQuantity', cartItem.product)
            }
        },
        incrementQuantity({commit, state}, product) {
            commit('incrementQuantity', product);
        },
        removeFromCart({commit, state}, product) {
            commit('removeFromCart', product);
        }
    }
}