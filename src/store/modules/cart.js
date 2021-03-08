export default {
    namespaced: true,
    state: {
        cart: [] // {product:{id,name,price},quantity}; second variant: {id, quantity}
    },
    getters: {
        getCartItems: state => {
            return state.cart; //TODO Maybe you need another output?
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
            let cartPos = state.cart.indexOf(item => item.id === product.id);
            state.cart.splice(cartPos, 1);
        },
        incrementQuantity(state, product) {
            let cartItem = state.cart.find(item => item.id === product.id);
            cartItem.quantity++;
        },
        decrementQuantity(state, product) {
            let cartItem = state.cart.find(item => item.id === product.id);
            cartItem.quantity--;
        },
    },
    actions: {
        addToCart({commit, state}, product) {
            let cartItem = state.cart.find(item => item.id === product.id);
            if (cartItem) {
                commit('incrementQuantity');
            } else {
                commit('pushProductToCart', product);
            }
        },
        removeFromCart({commit, state}, product) {

        }
    }
}