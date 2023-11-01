<template>
    <div>
      <h1>About Page</h1>
      
      <!-- Loop through subcategories -->
      <div v-for="subcategory in allSubcategories" :key="subcategory.id">
        <h2>{{ subcategory.name }}</h2>
        
        <!-- Loop through products -->
        <ul>
          <li v-for="product in subcategory.products" :key="product.id">
            {{ product.name }} - ${{ product.price }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import jsonData from '~/assets/data/data.json';
  
  export default {
    data() {
      return {
        jsonData: jsonData
      }
    },
    computed: {
      allSubcategories() {
        return this.jsonData.categories.flatMap(category => category.subcategories);
      }
    }
  }
  </script>
  