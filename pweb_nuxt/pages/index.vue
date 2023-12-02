<template>
  <div>
    <navbar></navbar>

    <section class="home" id="home">
      <div class="content">
        <span data-aos="fade-up" data-aos-delay="150">Let's Start</span>
        <h3 data-aos="fade-up" data-aos-delay="300">World Tour With Us</h3>
        <p data-aos="fade-up" data-aos-delay="450">Explore Wiser, Wander Farther, Spend Smarter. Uncover Your Next Destination, Where to Next</p>
      </div>
    </section>

    <section class="book-form" id="book-form">
      <form action="">
        <div data-aos="zoom-in" data-aos-delay="150" class="inputBox">
          <span>you are planning?</span>
          <input type="text" placeholder="place name" value="" />
        </div>
        <div data-aos="zoom-in" data-aos-delay="300" class="inputBox">
          <span>When looking for ?</span>
          <input type="date" value="" />
        </div>
        <div data-aos="zoom-in" data-aos-delay="450" class="inputBox">
          <span>Total members?</span>
          <input type="number" placeholder="number of travelers" value="" />
        </div>
        <input data-aos="zoom-in" data-aos-delay="600" type="submit" value="find now" class="btn" />
      </form>
    </section>

    <section class="about" id="about">
      <div class="video-container" data-aos="fade-right" data-aos-delay="300">
        <video src="../images/about.mp4" muted autoplay loop class="video"></video>
      </div>

      <div class="content" data-aos="fade-left" data-aos-delay="600">
        <span>Who we are ?</span>
        <h3>Your Gateway To Adventure</h3>
        <p>Welcome To Our Travel Blog, Where We Bring The World To Your Fingertips. From The Vibrant Streets Of Bustling Cities To The Tranquil Landscapes Off The Beaten Path, Our Blog Is A . . .</p>
        <p id="extra-text" style="display: none">
          Celebration Of Diversity And The Beauty That Exists In Every Corner Of The Globe. Whether You're A Seasoned Globetrotter Or A First-Time Explorer, Our Goal Is To Inspire, Inform, And Elevate Your Travel Experiences.
        </p>
        <router-link to="/about" class="btn">read more</router-link>
      </div>
    </section>

    <section class="gallery" id="gallery">
      <div class="heading">
        <span>our gallery</span>
        <h1>Memories last forever</h1>
      </div>

      <div class="box-container">
        <div class="box" data-aos="zoom-in-up" data-aos-delay="150">
          <img src="../images/gallery-img-1-new.jpg" alt="" />
          <span>travel spot</span>
          <h3>jakarta</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="300">
          <img src="../images/gallery-img-2-new.jpg" alt="" />
          <span>travel spot</span>
          <h3>masjid mahligai minang</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="450">
          <img src="../images/gallery-img-3-new.jpg" alt="" />
          <span>travel spot</span>
          <h3>tumpak sewu</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="150">
          <img src="../images/gallery-img-4-new.jpg" alt="" />
          <span>travel spot</span>
          <h3>taman nasional Gunung Leuser</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="300">
          <img src="../images/gallery-img-5-new.jpg" alt="" />
          <span>travel spot</span>
          <h3>bali</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="450">
          <img src="../images/gallery-img-6-new.jpg" alt="" />
          <span>travel spot</span>
          <h3>danau sentani</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="150">
          <img src="../images/gallery-img-7-new.jpg" alt="" />
          <span>travel spot</span>
          <h3>Goa pindul</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="300">
          <img src="../images/gallery-img-8-new.jpg" alt="" />
          <span>travel spot</span>
          <h3>wakatobi</h3>
        </div>

        <div class="box" data-aos="zoom-in-up" data-aos-delay="450">
          <img src="../images/gallery-img-9-new.jpg" alt="" />
          <span>travel spot</span>
          <h3>Air Terjun Tanggedu</h3>
        </div>
      </div>
    </section>

    <section class="review">
      <div class="box-container" data-aos="fade-right" data-aos-delay="300">
        <div class="box">
          <p>A virtual journey celebrating diversity! This blog inspires and elevates my wanderlust.</p>
          <div class="user">
            <img src="../images/pic-1.png" alt="" />
            <div class="info">
              <h3>john deo</h3>
              <span>designer</span>
            </div>
          </div>
        </div>
        <div class="box">
          <p>Standout travel blog! Vibrant descriptions and tranquil landscapes - a guide that informs and inspires.</p>
          <div class="user">
            <img src="../images/pic-2.png" alt="" />
            <div class="info">
              <h3>john deo</h3>
              <span>designer</span>
            </div>
          </div>
        </div>
        <div class="box">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div class="user">
            <img src="../images/pic-3.png" alt="" />
            <div class="info">
              <h3>john deo</h3>
              <span>designer</span>
            </div>
          </div>
        </div>
        <div class="box">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <div class="user">
            <img src="../images/pic-4.png" alt="" />
            <div class="info">
              <h3>john deo</h3>
              <span>designer</span>
            </div>
          </div>
        </div>
      </div>

      <div class="content" data-aos="fade-left" data-aos-delay="600">
        <span>testimonials</span>
        <h3>good news from our clients</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium corporis fugiat quae unde perspiciatis similique ab modi enim consequatur aperiam cumque distinctio facilis sit, debitis possimus asperiores non harum.
        </p>
      </div>
    </section>

    <div class="banner">
      <div class="content" data-aos="zoom-in-up" data-aos-delay="300">
        <span>start your adventures</span>
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
        <div class="box" data-aos="fade-up" data-aos-delay="150">
          <div class="image">
            <img src="../images/blog-1.jpg" alt="" />
          </div>
          <div class="content">
            <a href="#" class="link">One Mile At A Time.</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, natus!</p>
            <div class="icon">
              <a href="#"><i class="fas fa-clock"></i> 21st may, 2021</a>
              <a href="#"><i class="fas fa-user"></i> by admin</a>
            </div>
          </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="300">
          <div class="image">
            <img src="../images/blog-2.jpg" alt="" />
          </div>
          <div class="content">
            <a href="#" class="link">Local Adventurer</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, natus!</p>
            <div class="icon">
              <a href="#"><i class="fas fa-clock"></i> 21st may, 2021</a>
              <a href="#"><i class="fas fa-user"></i> by admin</a>
            </div>
          </div>
        </div>

        <div class="box" data-aos="fade-up" data-aos-delay="450">
          <div class="image">
            <img src="../images/blog-3.jpg" alt="" />
          </div>
          <div class="content">
            <a href="#" class="link">The Blonde Abroad</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, natus!</p>
            <div class="icon">
              <a href="#"><i class="fas fa-clock"></i> 21st may, 2021</a>
              <a href="#"><i class="fas fa-user"></i> by admin</a>
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
export default {
  methods: {
    toggleNavbar() {
      let navbar = document.querySelector(".header .navbar");
      navbar.classList.toggle("active");
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

    document.querySelectorAll(".about .video-container .controls .control-btn").forEach((btn) => {
      btn.onclick = () => {
        let src = btn.getAttribute("data-src");
        document.querySelector(".about .video-container .video").src = src;
      };
    });
  },
  methods: {
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
  },
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css";
</style>
