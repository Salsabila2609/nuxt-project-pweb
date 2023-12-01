<template>
  <header class="header">
    <div id="menu-btn" class="fas fa-bars" @click="toggleNavbar"></div>

    <a data-aos="zoom-in-left" data-aos-delay="150" href="/" class="logo"><span>T</span>ravel <span>W</span>arrior </a>

    <nav class="navbar">
      <a data-aos="zoom-in-left" data-aos-delay="450"><Nuxt-link to="/" class="nav-link">Home</Nuxt-link></a>
      <a data-aos="zoom-in-left" data-aos-delay="450"><Nuxt-link to="/about" class="nav-link">About Us</Nuxt-link></a>
      <a data-aos="zoom-in-left" data-aos-delay="450"><Nuxt-link to="/blogs" class="nav-link">Blogs</Nuxt-link></a>
    </nav>

    <a data-aos="zoom-in-left" data-aos-delay="1300" href="#book-form" class="btn">book now</a>
  </header>
</template>

<script>
export default {
  methods: {
    toggleNavbar() {
      console.log("Navbar toggled");
    },
  },
};
</script>
