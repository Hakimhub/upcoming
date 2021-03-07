<template>
  <nav class="main-navBar d-flex justify-content-between">
    <a href="" class="logo">CSS Nav</a>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu d-flex justify-content-between my-1">
      <li><a href="#work">Our Work</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#careers">Careers</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
  signOut: function() {
    this.$store.dispatch('signout')
    console.log('dfgdfg');
    }
  }
}
</script>

<style scoped>
a {
  color: #000;
}

/* header */

.main-navBar {
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  background-color: dodgerblue!important;
  /* position: fixed; */
  width: 100%;
  z-index: 3;
}

.main-navBar ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
}

.main-navBar li a {
  display: block;
  padding: 20px 20px;
  border-right: 1px solid #f4f4f4;
  text-decoration: none;
}

.main-navBar li a:hover,
.main-navBar .menu-btn:hover {
  background-color: #f4f4f4;
}

.main-navBar .logo {
  display: block;
  /* float: left; */
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

/* menu */

.main-navBar .menu {
  clear: both;
  max-height: 0;
  
  transition: max-height .2s ease-out;
}

/* menu icon */

.main-navBar .menu-icon {
  cursor: pointer;
  display: inline-block;
  /* float: right; */
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.main-navBar .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}

.main-navBar .menu-icon .navicon:before,
.main-navBar .menu-icon .navicon:after {
  background: #333;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.main-navBar .menu-icon .navicon:before {
  top: 5px;
}

.main-navBar .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.main-navBar .menu-btn {
  display: none;
}

.main-navBar .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.main-navBar .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.main-navBar .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.main-navBar .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.main-navBar .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.main-navBar .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (min-width: 48em) {
  .main-navBar li {
    /* float: left; */
  }
  .main-navBar li a {
    padding: 20px 30px;
  }
  .main-navBar .menu {
    clear: none;
    /* float: right; */
    max-height: none;
  }
  .main-navBar .menu-icon {
    display: none;
  }
}
</style>