import { mapGetters } from 'vuex'

export default {
    computed: {
        products() {
            return this.$store.state.products
        },
        ...mapGetters([
            'saleProducts'
        ])
    },
}