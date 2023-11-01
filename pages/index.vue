<template>
    <div>
      <h1>Home Page</h1>
      
      <!-- Dropdown to select a category -->
      <select v-model="selectedCategoryId">
        <option v-for="category in jsonData.categories" :value="category.id" :key="category.id">
          {{ category.name }}
        </option>
      </select>
      
      <!-- Display filtered data -->
      <div v-if="selectedCategory">
        <h2>{{ selectedCategory.name }}</h2>
        
        <!-- Loop through subcategories -->
        <div v-for="subcategory in selectedCategory.subcategories" :key="subcategory.id">
          <h3>{{ subcategory.name }}</h3>
          
          <!-- Loop through products -->
          <ul>
            <li v-for="product in subcategory.products" :key="product.id">
              {{ product.name }} - ${{ product.price }}
            </li>
          </ul>
        </div>
      </div>
      
      <div v-else>
        Please select a category from the dropdown.
      </div>
    </div>
  </template>
  
  <script>
  import jsonData from '~/assets/data/data.json';
  
  export default {
    data() {
      return {
        jsonData: jsonData,
        selectedCategoryId: null
      }
    },
    computed: {
      selectedCategory() {
        return this.jsonData.categories.find(category => category.id === this.selectedCategoryId);
      }
    }
  }
  </script>
  