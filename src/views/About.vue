<template>
    <div class="about">
        <AnimatedNavbar></AnimatedNavbar>
        <div>THIS IS ABOUT</div>
  
      <div class="content">
        <h1>Welcome to the About Page</h1>
        <p>
          This is the content of the About page. You can add your specific content here.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import AnimatedNavbar from '@/components/AnimatedNavbar.vue';

  export default {
    name: 'AboutComponent',
  };
  </script>
  
  <style scoped>
  /* Add specific styles for the Home page */
  .about {
    background-color: violet;
    height: 100px;
  }
  
  .content {
    padding: 20px;
  }
  </style>
  