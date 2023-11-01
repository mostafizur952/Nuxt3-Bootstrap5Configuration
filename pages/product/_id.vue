<script>
import ProductDetails from '~/components/ProductDetails.vue';

export default {
  components: {
    ProductDetails
  },
  props: {
    product: Object
  },
  async asyncData({ params }) {
    // Assuming you have a method to fetch the product data by ID
    const product = await fetchProductById(params.id);
    return { product };
  }
}
</script>
