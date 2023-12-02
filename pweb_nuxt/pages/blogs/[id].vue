<template>
  <div>
    <Navbar></Navbar>

    <section class="blogdetail" id="blogdetail">
      <div class="back" @click="$router.go(-1)">
        <p><i class="fas fa-arrow-left"></i>Kembali</p>
      </div>
      <div class="content" data-aos="fade-left" data-aos-delay="600">
        <h1 class="title">{{ blogPost.title }}</h1>
        <div class="icon">
          <p class="date"><i class="fas fa-clock"></i>{{ formatDate(blogPost.createdAt) }}</p>
          <p class="author"><i class="fas fa-user"></i>{{ blogPost.author }}</p>
        </div>
        <div class="image">
          <img :src="blogPost.image" :alt="blogPost.alt" />
        </div>
        <p class="content">{{ blogPost.content }}</p>
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
      blogPost: {
        id: null,
        title: "",
        content: "",
        author: "",
        createdAt: "",
        image: "",
        alt: "",
      },
    };
  },
  methods: {
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
    // Ensure that the id is defined before making the API request
    const postId = this.$route.params.id;

    console.log("Blog Post ID:", postId); // Log the postId

    if (!postId) {
      console.error("Blog Post ID is not defined");
      return;
    }

    axios
      .get(`http://localhost:5000/api/blog/${postId}`)
      .then((response) => {
        console.log("Blog Post Data:", response.data); // Log the entire response data
        const blogPost = response.data;
        this.blogPost = {
          ...blogPost,
          createdAt: new Date(blogPost.createdAt).toISOString(),
        };
      })
      .catch((error) => {
        console.error("Error fetching blog post data:", error);
      });
  },
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css";
</style>
