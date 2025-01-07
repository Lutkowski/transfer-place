<script setup lang="ts">
import SupportQuestion from "../../entities/question/SupportQuestion.vue";
import {supportQuestionsMock} from "../../shared/mocks/supportQuestionsMock";
</script>

<template>
  <section id="support">
    <h2>Помощь</h2>
    <ul>
      <SupportQuestion class="support-element" v-for="item in supportQuestionsMock" :key="item.question" :question="item.question"
                      :answer="item.answer"/>
    </ul>
  </section>
</template>

<style scoped lang="scss">
section {
  @include padding-container;
  background: white;
  padding-top: 8rem;
  padding-bottom: 8rem;

  h2 {
    margin-bottom: 6rem;
  }

  .support-element {
    border-top: 1px solid rgb(238, 238, 238);
    padding: 25px 0;
  }

  .support-element:nth-of-type(4) {
    border-bottom: 1px solid rgb(238, 238, 238);
  }
}
</style>
