 <template>
  <div>
    <!-- Assuming 'products' is an array of products -->
    <div v-for="product in products" :key="product.id">
      <h3>{{ product.name }}</h3>
      <button @click="viewProductDetails(product)">View Details</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    viewProductDetails(product) {
      this.$router.push({ name: 'product-details', params: { product } });
    }
  }
}
</script>
