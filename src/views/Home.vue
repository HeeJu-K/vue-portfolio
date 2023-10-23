<template>
  <div class="home">
    
    <div>THIS IS HOME</div>

    <AnimatedNavbar></AnimatedNavbar>
    <p>
      This is the content of the Home page. You can add your specific content here.
    </p>
  </div>
</template>
  
<script>
import AnimatedNavbar from '../components/AnimatedNavbar.vue';

// vue-portfolio/src/components/AnimatedNavbar.vue
// vue-portfolio/src/views/Home.vue
export default {
  name: 'HomeComponent',
};
</script>
  
<style scoped>
/* Add specific styles for the Home page */
.home {
  background-color: red;
  height: 100px;
}

.content {
  padding: 20px;
}
</style>
  