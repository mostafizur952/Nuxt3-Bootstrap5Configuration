<template>
    <div>
      <h1>About Page</h1>
      
      <!-- Loop through categories -->
      <div v-for="category in jsonData.categories" :key="category.id">
        <h2>{{ category.name }}</h2>
        
        <!-- Loop through subcategories -->
        <div v-for="subcategory in category.subcategories" :key="subcategory.id">
          <h3>{{ subcategory.name }}</h3>
          
          <!-- Loop through products -->
          <ul>
            <li v-for="product in subcategory.products" :key="product.id">
              {{ product.name }} - ${{ product.price }}
            </li>
          </ul>
        </div>
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
    }
  }
  </script>
  