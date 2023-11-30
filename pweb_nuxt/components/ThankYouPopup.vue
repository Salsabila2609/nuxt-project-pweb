<template>
  <div class="thank-you-popup" v-if="fullName">
    <div class="popup-content">
      <h2>Thank You, {{ fullName }}!</h2>
      <p>Your message has been received. We will get back to you soon.</p>
      <button @click="closeThankYouPopup">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fullName: String,
  },
  methods: {
    closeThankYouPopup() {
      this.$emit('closePopup');
    },
  },
};
</script>

<style scoped>
.thank-you-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background: #fff;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 400px; 
  width: 90%;
}

h2 {
  color: #d9296f; 
}

p {
  color: #555; 
  margin-bottom: 15px;
}

button {
  background-color: #d9296f; 
  color: #fff; 
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #831742;
  transform: scale(1.1);
}
</style>
