<template>
  <div>
    <navbar></navbar>

    <div class="banner">
      <div class="content" data-aos="zoom-in-up" data-aos-delay="300">
        <h3>Let's Explore World With Us</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatum praesentium amet quibusdam quam officia suscipit odio.</p>
        <a href="#book-form" class="btn">book now</a>
      </div>
    </div>

    <section class="blogs" id="blogs">
      <div class="heading">
        <span>blogs & posts</span>
        <h1>Experience in words</h1>
      </div>

      <div class="box-container">
        <div v-for="blogPost in blogPosts" :key="blogPost.id" class="box" data-aos="fade-up" data-aos-delay="150">
          <div class="image">
            <img :src="blogPost.image" :alt="blogPost.alt" />
          </div>
          <div class="content">
            <h1 class="link">{{ blogPost.title }}</h1>
            <p>{{ truncateContent(blogPost.content) }}</p>
            <div class="icon">
              <p><i class="fas fa-clock"></i>{{ formatDate(blogPost.createdAt) }}</p>
              <p><i class="fas fa-user"></i>{{ blogPost.author }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
import axios from "axios";

export default {
  data() {
    return {
      blogPosts: [],
    };
  },
  methods: {
    toggleNavbar() {
      let navbar = document.querySelector(".header .navbar");
      navbar.classList.toggle("active");
    },
    initAOS() {
      if (process.client) {
        import("aos").then((AOS) => {
          AOS.init({
            duration: 800,
            offset: 150,
          });
        });
      }
    },
    truncateContent(content) {
      const words = content.split(" ");
      if (words.length > 50) {
        return words.slice(0, 50).join(" ") + " ...";
      } else {
        return content;
      }
    },
    formatDate(dateTimeString) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };

      return new Date(dateTimeString).toLocaleDateString("id-ID", options);
    },
  },

  components: {
    Navbar,
    Footer,
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

    axios
      .get("http://localhost:5000/api/blog") // Assuming your API endpoint for multiple blogs is /api/blogs
      .then((response) => {
        this.blogPosts = response.data.docs.map((blogPost) => {
          return {
            ...blogPost,
            createdAt: new Date(blogPost.createdAt).toISOString(),
          };
        });
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  },
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css";
/* Add any page-specific styles here */
</style>
