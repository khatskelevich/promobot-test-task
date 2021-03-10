// Mocking server

// Product's element example:
//     {
//         "id": "1781b7bd5ef",
//         "name": "name1",
//         "cover": "1.jpg",
//         "price": 300,
//         "description": "green"
//     },

export default {
    generateProducts() {
        const products = [];
        const description = ["blue", "green", "brown"];

        let productsCount = ~~(Math.random() * 30 + 1); // 1 <= productCount <= 30

        for (let i = 0; i < productsCount; i++) {
            let randIndex = ~~(Math.random() * description.length);  //returns random array index

            products.push({
                id: this.generateIds(),
                name: 'name' + i,
                cover: (i + 1) + '.jpg',
                price: ~~(Math.random() * 10 + 1) * 100, // 100, 200, 300... , 1000
                description: description[randIndex]
            });
        }

        return products;
    },
    generateIds() {
        return (~~(Math.random()*1e8)).toString(16);
    },
    loadProducts() {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.generateProducts()), 1000)
        });
    }
}