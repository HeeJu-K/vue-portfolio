<template>
  <div>
    <nav class="navbar navbar-light fixed-top">
      <ul class="navbar-nav" :class="{ 'navbar-expand': !isScrolled, 'navbar-collapse': isScrolled }">
        <li v-for="item in menuItems" :key="item.id" ref="menuItemRef" class="nav-item"
          :class="{ 'unscrolled': !isScrolled, 'scrolled': isScrolled }" :style="item.style">
          <router-link :to=item.route class="nav-link">{{ item.label }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isNavbarOpen: false,
      isScrolled: false,
      menuItems: [
        { id: 0, label: 'Based at Seattle Sep. 24 19:19 Sun', style: null, route: '/' },
        { id: 1, label: 'My Background', style: null, route: '/education' },
        { id: 2, label: 'Experience', style: null, route: '/email' },
        { id: 3, label: 'Contacts', style: null, route: '/linkedin' },
        { id: 4, label: 'More About me', style: null, route: '/about' },
      ],
      numMenus: 0,
      menuWidths: [],
      totalMenuWidth: 0,
      menuRight: [],
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      collapseMenuTop: 0,
      // widthSum: 0,
    };
  },
  computed: {
    menuStyles() {
      return this.menuItems.map((item, idx) => {
        const styles = {
          '--item-right': this.menuRight[idx] + 'px',
          '--item-top': idx * 50 + 'px',
        };
        if (this.totalMenuWidth >= this.windowWidth) {
          styles['--item-width'] = this.windowWidth / this.numMenus + 'px'
        }
        return styles
      });
    },
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    updateWindowSize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
      this.getItemWidths();
    },
    handleScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
      // Check the scroll position
      if (window.scrollY > 0) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
    getWidthOfContent(content) {
      const tempElement = document.createElement('div');
      tempElement.style.display = 'inline';
      tempElement.style.visibility = 'hidden';
      tempElement.textContent = content;
      document.body.appendChild(tempElement);
      const width = tempElement.offsetWidth;
      document.body.removeChild(tempElement);
      return width;
    },
    getItemWidths() {
      this.numMenus = this.menuItems.length
      this.menuItems.forEach((item, index) => {
        this.menuWidths[index] = this.getWidthOfContent(item.label)
      });
      this.adjustMenuWidth()
    },
    adjustMenuWidth() {
      this.totalMenuWidth = this.menuWidths.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      let rightsum = 5 // Right default margin 5px
      if (this.totalMenuWidth >= this.windowWidth) {
        this.menuRight = this.menuWidths.reverse().map((item, index) => {
          return index * (this.windowWidth / this.numMenus)
        }).reverse()
      }
      else {
        let margin = (this.windowWidth - this.totalMenuWidth - 5) / (this.numMenus - 1)
        this.menuWidths.reverse().forEach((item, index) => {
          this.menuRight[this.numMenus - index - 1] = rightsum
          rightsum = rightsum + item + margin
        })
      }
    },
  },
  created() {
    this.updateWindowSize();
    this.menuItems.forEach((item, idx) => {
      item.style = this.menuStyles[idx];
    })
  },
  mounted() {
    this.updateWindowSize();
    window.addEventListener("resize", this.updateWindowSize);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateWindowSize);
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display');

.navbar-expand {
  flex-direction: column;
  /* display: flex; */
  justify-content: flex-end;
  margin-left: auto;
  /* Stack vertically */
}

.navbar-collapse {
  flex-direction: row;
  justify-content: space-between;
  /* Stack horizontally */
}

.nav-item {
  position: fixed;
  border: 1px solid blue;
  padding: 1px;
  font-family: 'DM Serif Display', serif;
}

.nav-item.unscrolled {
  flex-direction: column;
  /* display: flex; */
  justify-content: flex-end;
  margin-left: auto;
  top: var(--item-top);
  right: 10px;
  transition: all 0.8s ease-in-out;
  width: auto;
}

.nav-item.scrolled {
  top: 5px;
  justify-content: space-between;
  right: var(--item-right);
  /* right: var(--window-width); */
  transition: all 0.8s ease-in-out;
  width: var(--item-width);
}

/* Adjust spacing or other styles as needed */
</style>
