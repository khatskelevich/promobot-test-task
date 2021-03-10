export default {
    namespaced: true,
    state: {
        products: [], //Product structure: {id, name, description, img, price}
    },
    getters: {
        getProducts: state => {
            return state.products;
        },
        isLoaded: state => {
            return state.products.length > 0;
        }
    },
    mutations: {
        setProducts(state, products) {
            return state.products = products;
        }
    },
    actions: {}
}