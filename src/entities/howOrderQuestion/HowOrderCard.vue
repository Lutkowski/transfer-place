<script setup lang="ts">
import {IHowOrderQuestion} from "./HowOrderQuestions.types.ts";

const {question} = defineProps<{
  question: IHowOrderQuestion;
}>();
</script>

<template>
  <div class="order-step-card">
    <img :src="question.img.src" :alt="question.img.alt"/>
    <h3>{{ question.title }}</h3>
    <p>{{ question.content }}</p>
    <span class="order-step-card-counter">{{ question.index }}</span>
  </div>
</template>

<style scoped lang="scss">
.order-step-card {
  @include flex-center;
  flex-direction: column;
  align-items: flex-start;
  padding: 4.5rem 2rem 2rem 2rem;
  position: relative;
  line-height: 33px;
  min-height: 25vh;

  h3 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-size: 16px;
  }

  p {
    line-height: 20px;
    font-size: 14px;
  }
}

.order-step-card-counter {
  color: $light-blue-background;
  font-size: 48px;
  font-weight: 600;
  position: absolute;
  top: 2rem;
  right: 2rem;
}
</style>
