<template>
  <div>
    <p>메인 페이지입니다.</p>
    <div>
      {{ products }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      products: [],
    }
  },
  async created() {
    const response = await axios.get('http://localhost:3000/products')
    this.products = response.data
  },
}
</script>

<style>
</style>