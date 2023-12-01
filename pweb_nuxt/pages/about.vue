<template>
  <div>
    <Navbar></Navbar>

    <section class="about-page" id="about">
      <div class="content" data-aos="fade-left" data-aos-delay="600">
        <span>Who we are ?</span>
        <h3>Your Gateway To Adventure</h3>
        <p>
          Welcome to our travel blog, where we bring the world to your fingertips. From the vibrant streets of bustling cities to the tranquil landscapes off the beaten path, our blog is a celebration of diversity and the beauty that exists
          in every corner of the globe. Whether you're a seasoned globetrotter or a first-time explorer, our goal is to inspire, inform, and elevate your travel experiences.
        </p>
        <a href="#services" class="btn">Explore Our Services</a>
      </div>

      <div class="video-container" data-aos="fade-right" data-aos-delay="300">
        <video src="../images/about.mp4" muted autoplay loop class="video"></video>
      </div>
    </section>

    <section class="services" id="services">
      <div class="heading-about">
        <span>Our Services</span>
        <h1>Unforgettable Experiences</h1>
      </div>

      <div class="box-container">
        <div class="box" data-aos="zoom-in-up" data-aos-delay="150">
          <i class="fas fa-globe"></i>
          <h3>Explore Worldwide</h3>
          <p>Discover the beauty of diverse cultures and landscapes across the globe. Your adventure knows no bounds.</p>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="300">
          <i class="fas fa-hiking"></i>
          <h3>Thrilling Adventures</h3>
          <p>Embark on thrilling adventures that will challenge and exhilarate you. From mountain treks to water sports, we've got it all.</p>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="450">
          <i class="fas fa-utensils"></i>
          <h3>Delicious Food & Drinks</h3>
          <p>Indulge your taste buds with our curated selection of local and international cuisines. Experience the joy of culinary exploration.</p>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="600">
          <i class="fas fa-hotel"></i>
          <h3>Comfortable Accommodations</h3>
          <p>Rest easy in affordable and cozy hotels that provide a home away from home. Comfort is our priority.</p>
        </div>
      </div>
    </section>

    <div class="banner">
      <div class="content" data-aos="zoom-in-up" data-aos-delay="300">
        <span>Start Your Journey</span>
        <h3>Let's Explore the World Together</h3>
        <p>Embark on a journey of a lifetime. Start your adventure with us and create memories that will last forever.</p>
        <router-link to="/" class="btn">Book Now</router-link>
      </div>
    </div>

    <section class="teams" id="destination">
      <div class="heading-about">
        <span>Our Teams</span>
        <h1>Meet Us</h1>
      </div>

      <div class="box-container">
        <div class="box" data-aos="fade-up" data-aos-delay="150">
          <div class="image">
            <img src="../images/adfi.jpg" alt="Destination 1" />
          </div>
          <div class="content">
            <h3>Iki Adfi Nur Mohammad</h3>
          </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="150">
          <div class="image">
            <img src="../images/caca.jpg" alt="Destination 2" />
          </div>
          <div class="content">
            <h3>Salsabila Amalia Harjanto</h3>
          </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="150">
          <div class="image">
            <img src="../images/hafiz.jpg" alt="Destination 3" />
          </div>
          <div class="content">
            <h3>Zulfa Hafizh Kusuma</h3>
          </div>
        </div>
      </div>
    </section>
    <div class="heading-about">
      <span>Contact Us</span>
      <h1>Get In Touch</h1>
    </div>

    <section class="contact" data-aos="fade-up" data-aos-delay="200">
      <div class="container-contact">
        <div class="card-contact">
          <form action="#" method="post" class="contact-form" @submit.prevent="submitForm">
            <div class="form-contact" data-aos="fade-up" data-aos-delay="0">
              <label for="fullName">Full Name</label>
              <input v-model="formData.fullName" type="text" id="fullName" name="fullName" required />
            </div>
            <div class="form-contact" data-aos="fade-up" data-aos-delay="100">
              <label for="email">Email Address</label>
              <input v-model="formData.email" type="email" id="email" name="email" required />
            </div>
            <div class="form-contact" data-aos="fade-up" data-aos-delay="100">
              <label for="phone">Phone Number</label>
              <input v-model="formData.phone" type="tel" id="phone" name="phone" required />
            </div>
            <div class="form-contact" data-aos="fade-up" data-aos-delay="100">
              <label for="message">Message</label>
              <textarea v-model="formData.message" id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" class="btn" data-aos="fade-up" data-aos-delay="200">Submit</button>
          </form>
        </div>
      </div>
      <ThankYouPopup v-if="showThankYouPopup" :fullName="submittedData.fullName" @closePopup="closeThankYouPopup" />
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
import ThankYouPopup from "@/components/ThankYouPopup.vue";

export default {
  methods: {
    toggleNavbar() {
      let navbar = document.querySelector(".header .navbar");
      navbar.classList.toggle("active");
    },
    closePopup() {
      this.showThankYouPopup = false;
    },
  },

  mode: "client",

  components: {
    Navbar,
    Footer,
    ThankYouPopup,
  },

  data() {
    return {
      showThankYouPopup: false,
      formData: {
        fullName: "",
        email: "",
        phone: "",
        message: "",
      },
      submittedData: null,
    };
  },

  mounted() {
    this.initAOS();
    let navbar = document.querySelector(".header .navbar");

    document.querySelector("#menu-btn").onclick = () => {
      navbar.classList.toggle("active");
    };

    window.onscroll = () => {
      navbar.classList.remove("active");
    };
  },

  methods: {
    initAOS() {
      if (process.client) {
        import("aos").then((AOS) => {
          AOS.init({
            duration: 800,
            offset: 150,
          });
          console.log("AOS initialized on the client side. process.client:", process.client);
        });
      } else {
        console.log("AOS not initialized on the client side. process.client:", process.client);
      }
    },

    closeThankYouPopup() {
      this.showThankYouPopup = false;
    },

    async submitForm() {
      try {
        console.log("Submitting form data:", this.formData);

        const postResponse = await $fetch("http://localhost:5000/api/submitForm", {
          method: "POST",
          body: JSON.stringify(this.formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("POST Response:", postResponse);

        await this.getSubmittedData();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },

    async getSubmittedData() {
      try {
        const response = await $fetch("http://localhost:5000/api/submitForm");

        console.log("Response:", response);

        this.submittedData = response.docs[0];
        this.showThankYouPopup = true;
      } catch (error) {
        console.error("Error fetching submitted data:", error);
      }
    },
  },
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css";
</style>
