export default {
    namespaced: true,
    state: {
        products: [] //{id,name,description,img,price}
    },
    getters: {
        getProducts: state => {
            return state.products;
        }
    },
    mutations: {
        setProducts(state, products) {
            return state.products = products;
        }
    },
    actions: {}
}