import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80}
        ]
    },
    getters: {
        saleProducts: state => {
            let saleProducts = state.products.map(item => {
                return {
                    name: '**' + item.name + '**',
                    price: item.price / 2
                }
            })
            return saleProducts
        }
    },
    mutations: {
        reducePrice: (state, payload) => {
            state.products.forEach(product => {
                product.price -= payload;
            });
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(() => {
                context.commit('reducePrice', payload);
            }, 2000)
        }
    }
})