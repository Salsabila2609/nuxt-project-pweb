<template>
    
<header class="header">

<div id="menu-btn" class="fas fa-bars" @click="toggleNavbar"></div>


<a data-aos="zoom-in-left" data-aos-delay="150" href="#" class="logo"><span>T</span>ravel <span>W</span>arrior
</a>

<nav class="navbar">
    <a data-aos="zoom-in-left" data-aos-delay="300" href="#home">home</a>
    <a data-aos="zoom-in-left" data-aos-delay="450"><router-link to="/about" class="nav-link">About Us</router-link></a>
    <a data-aos="zoom-in-left" data-aos-delay="600" href="#destination">destination</a>
    <a data-aos="zoom-in-left" data-aos-delay="900" href="#gallery">gallery</a>
    <a data-aos="zoom-in-left" data-aos-delay="1150" href="#blogs">blogs</a>
</nav>

<a data-aos="zoom-in-left" data-aos-delay="1300" href="#book-form" class="btn">book now</a>

</header>

</template>