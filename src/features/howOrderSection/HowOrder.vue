<script setup lang="ts">
import {howOrderQuestions} from "../../shared/mocks/howOrderQuestionsMock.ts";
import {Navbar} from "../../shared/ui/Navbar";
import HowOrderCard from "../../entities/howOrderQuestion/HowOrderCard.vue";

</script>

<template>
  <section>
    <h2>Как заказать</h2>
    <Navbar classes="navbar-grid how-order-border" liClasses="how-order-card-wrapper">
      <li v-for="question in howOrderQuestions">
        <HowOrderCard :question="question"></HowOrderCard>
      </li>
    </Navbar>
  </section>
</template>

<style scoped lang="scss">
section {
  background: $dark-blue-background;
  color: $secondary-color;
  margin-top: $section-margin;
  padding: $section-margin 10%;

  ul {
    margin-top: $content-section-margin;
    gap: 4rem;
  }

  .navbar-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
  }
}


@media (max-width: 768px) {
  section .navbar-grid {
    grid-template-columns: 1fr;
    align-items: stretch;
  }
}

</style>
