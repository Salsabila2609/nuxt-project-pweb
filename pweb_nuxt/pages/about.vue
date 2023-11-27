<template>

<div>
    <Navbar></Navbar>  

<section class="about-page">

<div class="content" data-aos="fade-left" data-aos-delay="600">
    <span>Who we are ?</span>
    <h3>A smiling agent for you</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugit repellat error deserunt nam aperiam
        odit libero quos provident. Nostrum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugit repellat error deserunt nam aperiam
        odit libero quos provident. Nostrum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugit repellat error deserunt nam aperiam
        odit libero quos provident.</p>
    <a href="#services" class="btn">Our Services</a>
</div>

<div class="video-container" data-aos="fade-right" data-aos-delay="300">
    <video src="../images/about.mp4" muted autoplay loop class="video"></video>
</div>

</section>

<section class="services" id="services">

<div class="heading">
    <span>our services</span>
    <h1>Cost Effective</h1>
</div>

<div class="box-container">

    <div class="box" data-aos="zoom-in-up" data-aos-delay="150">
        <i class="fas fa-globe"></i>
        <h3>worldwide</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, cumque.</p>
    </div>

    <div class="box" data-aos="zoom-in-up" data-aos-delay="300">
        <i class="fas fa-hiking"></i>
        <h3>adventures</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, cumque.</p>
    </div>

    <div class="box" data-aos="zoom-in-up" data-aos-delay="450">
        <i class="fas fa-utensils"></i>
        <h3>food & drinks</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, cumque.</p>
    </div>

    <div class="box" data-aos="zoom-in-up" data-aos-delay="600">
        <i class="fas fa-hotel"></i>
        <h3>affordable hotels</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, cumque.</p>
    </div>

    <div class="box" data-aos="zoom-in-up" data-aos-delay="750">
        <i class="fas fa-wallet"></i>
        <h3>affordable price</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, cumque.</p>
    </div>

    <div class="box" data-aos="zoom-in-up" data-aos-delay="900">
        <i class="fas fa-headset"></i>
        <h3>24/7 support</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, cumque.</p>
    </div>

</div>

</section>

<div class="banner">

<div class="content" data-aos="zoom-in-up" data-aos-delay="300">
    <span>start your adventures</span>
    <h3>Let's Explore World With Us</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatum praesentium amet quibusdam quam
        officia suscipit odio.</p>
        <router-link to="/" class="btn">book now</router-link>
</div>
</div>

<section class="destination" id="destination">

<div class="heading-about">
    <span>our destination</span>
    <h1>Keep looking up</h1>
</div>

<div class="box-container">

    <div class="box" data-aos="fade-up" data-aos-delay="150">
        <div class="image">
            <img src="../images/des-1.jpg" alt="">
        </div>
        <div class="content">
            <h3>Iki Adfi Nur Mohamad</h3>
        </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="150">
        <div class="image">
            <img src="../images/des-1.jpg" alt="">
        </div>
        <div class="content">
            <h3>Salsabila Amalia Harjanto</h3>
        </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="150">
        <div class="image">
            <img src="../images/des-1.jpg" alt="">
        </div>
        <div class="content">
            <h3>Zulfa Hafizh Kusuma</h3>
        </div>
    </div>

</div>

</section>
    <Footer></Footer>
</div>
</template>


<script>
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';
export default {
methods: {
  toggleNavbar() {
    let navbar = document.querySelector('.header .navbar');
    navbar.classList.toggle('active');
  },
},

components: {
    Navbar,
    Footer,
  },

mounted() {
    // Inisialisasi AOS saat layout dimuat
    this.initAOS();
    let navbar = document.querySelector('.header .navbar');

    document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    }

    window.onscroll = () =>{
    navbar.classList.remove('active');
    }

    document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
    })
  },
methods: {
    initAOS() {
      if (process.client) {
        // Pastikan script hanya dijalankan di sisi klien
        import('aos').then((AOS) => {
          AOS.init({
            duration: 800,
            offset: 150,
          });
        });
      }
    },
  },
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css";
/* Add any page-specific styles here */
</style>
