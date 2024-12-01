<script setup lang="ts">

import RequestForm from "./ContactForm.vue";
import ContactInfo from "./ContactInfo.vue";
</script>

<template>
  <section id="contacts">
    <h2>Контакты</h2>
    <div class="contact-form-container">
      <RequestForm/>
      <ContactInfo/>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  margin-top: $section-margin;
  margin-left: 10%;
}

.contact-form-container {
  display: grid;
  grid-template-columns: 45% 55%;
  gap: 5vw;
  overflow: hidden;
  padding-bottom: 5rem;
}

@media (max-width: 768px) {
  .contact-form-container {
    grid-template-columns: 1fr;
  }
}
</style>
