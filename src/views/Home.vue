<template>
  <div class="home">

    <AnimatedNavbar></AnimatedNavbar>
    <div class="defaultpage">
      <div class="intro">
        Hello, this is
        <p class="name">HeeJu Kim,</p>
        <p>a full stack developer.</p>
        <p>
          I freeze moments of life with camera clicks, while constructing digital worlds with keyboard clicks.
        </p>
      </div>
    </div>
    <div class="timeline">
      <div v-for="item in timelineItems" :key="item.id" class="tl-item"
        :class="{ 'tl-item-hidden': scrollPosition < 0.7 * this.windowHeight, 'tl-item-show': scrollPosition > 0.7 * this.windowHeight }">
        <div v-html="item.text"></div>
      </div>
    </div>
    <div class="wordcloud">
      #fullstackdev
      #third culture kid
      #trilingual
      #Women in tech
      #first generation University
      #photographer
      #dancer
    </div>
    <div class="experience">
      experience
    </div>
    <div class="projects">
      projects
    </div>
    <div class="contact">
      contact
    </div>
    <div class="about">
      about
    </div>
  </div>
</template>
  
<script>
import AnimatedNavbar from '../components/AnimatedNavbar.vue';

export default {
  name: 'HomeComponent',
  data() {
    return {
      scrollPosition: 0,
      windowHeight: window.innerHeight,
      timelineItems: [
        { id: 0, text: 'Mar. 2024' },
        { id: 1, text: 'Expected Graduation' },
        { id: 2, text: 'Sep. 2022 - Mar. 2024' },
        { id: 3, text: 'Seattle, USA' },
        { id: 4, text: '' },
        { id: 5, text: '<span style="font-size:30px; margin-left: 3%"> University of Washington, Computer Science</span>' },
        { id: 6, text: '' },
        { id: 7, text: '<span style="margin-left: 3%">GPA 3.88/4.0' },
        { id: 8, text: 'Mar. 2005 - Jul.2022' },
        { id: 9, text: 'Beijing, China' },
        { id: 10, text: 'Sep. 2018 - Jul. 2022' },
        { id: 11, text: '<span style="font-size:30px; margin-left: 3%">Tsinghua University, EECS</span>' },
        { id: 12, text: '' },
        { id: 13, text: '<span style="margin-left: 3%">Ranked #1 in Asia, USNews' },
        { id: 14, text: '' },
        { id: 15, text: '<span style="margin-left: 3%">Beijing Government Scholarship Recipient' },
        { id: 16, text: 'Dec.1999 - Mar. 2005' },
        { id: 17, text: 'GyeongJu, Korea' },
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&display=swap');

.home {
  background-color: white;
}

.defaultpage {
  /* height: this.windowHeight + 'px'; */
  height: 100vh;
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  vertical-align: center;
  text-align: left;
  display: flex;
}

.intro {
  margin-right: 10%;
  margin-bottom: 20%;
  margin-left: auto;
  margin-top: auto;
}

.name {
  font-size: 10rem;
  font-style: italic;
}

.background {
  height: 100vh;
}

.timeline {
  font-family: 'DM Serif Display', serif;
  /* height: 60vh; */
  display: grid;
  grid-template-columns: 30% 70%;
  /* grid-template-rows: 10vh 5vh 15vh 5vh 15vh; */
}

.tl-item {
  border-right: 2px solid black;
}

.tl-item-hidden {
  opacity: 0;
  filter: blur(10px);
  transform: translateX(-75%);
  transition: all 1s;
}

.tl-item-show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
  transition: all 1s;
}

.tl-item:nth-child(2n-1) {
  text-align: right;
  padding-right: 10%;
}

.tl-item:nth-child(2n) {
  border-right: none;
  text-align: left;
  padding-left: 10%;
}

.wordcloud {
  margin-top: 5rem;
}

.experience {
  height: 100vh;
}

.projects {
  height: 100vh;
}

.contact {
  height: 100vh;
}

.about {
  height: 100vh;
}

.content {
  padding: 20px;
}
</style>
  