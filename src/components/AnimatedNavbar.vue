<template>
  <nav class="navbar navbar-light bg-light fixed-top">
    <ul class="navbar-nav" :class="{ 'navbar-expand': !isScrolled, 'navbar-collapse': isScrolled }">
      <li v-for="item in menuItems" :key="item.id" ref="menuItemRef" class="nav-item"
        :class="{ 'unscrolled': !isScrolled, 'scrolled': isScrolled }" :style="item.style">
        <a class="nav-link" href="#">{{ item.label }}</a>
      </li>
    </ul>
  </nav>
  <div class="test">
    HELLOO
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false,
      isScrolled: false,
      menuItems: [
        { id: 0, label: 'Based at Seattle Sep. 24 19:19 Sun', style: null },
        { id: 1, label: 'University of Washington / Tsinghua University', style: null },
        { id: 2, label: 'emoji heejuk.dev@gmail.com', style: null },
        { id: 3, label: 'Connect LinkedIn', style: null },
        { id: 4, label: 'About me', style: null },
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
      console.log("here menu styles")
      return this.menuItems.map((item, idx) => {
        console.log("here menu right", this.menuRight)
        return {
          '--item-right': this.menuRight[idx] + 'px',
          '--item-top': idx * 50 + 'px',
          height: '50px',
          // width: itemWidth + 'px',
          backgroundColor: 'lightblue',
        };
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
      // console.log({ top: this.windowTop });
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
      console.log("here get item width", this.menuItems)
      this.menuItems.forEach((item, index) => {
        this.menuWidths[index] = this.getWidthOfContent(item.label)
      });
      console.log("here got width 11", this.menuWidths, this.totalMenuWidth)
      this.adjustMenuWidth()
    },
    adjustMenuWidth() {
      this.totalMenuWidth = this.menuWidths.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      let rightsum = 5 // Right default margin 5px

      let margin = (this.windowWidth - this.totalMenuWidth - 5) / (this.numMenus - 1)
      this.menuWidths.reverse().forEach((item, index) => {
        this.menuRight[this.numMenus - index - 1] = rightsum
        rightsum = rightsum + item + margin
      })
    },
  },
  created() {
    this.updateWindowSize()
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
.test {
  height: 2000px;
  background-color: black;
  color: white;
}

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
  background: blue;
  padding: 1px;
}

.nav-item.unscrolled {
  flex-direction: column;
  /* display: flex; */
  justify-content: flex-end;
  margin-left: auto;
  top: var(--item-top);
  right: 10px;
  transition: all 0.3s ease-in-out;

}

.nav-item.scrolled {
  top: 5px;
  justify-content: space-between;
  right: var(--item-right);
  /* right: var(--window-width); */
  transition: all 0.3s ease-in-out;
}

/* Adjust spacing or other styles as needed */
</style>
