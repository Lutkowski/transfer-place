<script setup lang="ts">
import {ref} from 'vue';
import MyInput from "../shared/MyInput/MyInput.vue";
import PhoneInput from "../shared/PhoneInput/PhoneInput.vue";
import MyButton from "../shared/MyButton/MyButton.vue";

enum QuestionType {
  RENT = "Бронирование автомобиля",
  CANCEL = "Отмена заказа",
  QUESTION = "Задать вопрос",
}

const choosenQuetionType = ref(QuestionType.RENT)
const phone = ref('');
const name = ref('');


const submitForm = () => {
  console.log({
    type: choosenQuetionType.value,
    phone: phone.value,
    name: name.value,
  })
}
</script>

<template>
  <div>
    <h3>Оставить заявку</h3>
    <form @submit.prevent="submitForm">
      <select id="request" v-model="choosenQuetionType">
        <option>{{ QuestionType.RENT }}</option>
        <option>{{ QuestionType.CANCEL }}</option>
        <option>{{ QuestionType.QUESTION }}</option>
      </select>
      <MyInput v-model="name" type="text" name="name" placeholder="Имя"/>
      <PhoneInput
          v-model="phone"
          class="request-my-tel"
      ></PhoneInput>
      <div class="request-button-container">
        <div>
          <MyButton class="request-button" type="submit">Перезвоните мне</MyButton>
        </div>
        <div>
          <p class="disclaimer">
            Отправляя заявку, вы соглашаетесь с <a href="#">политикой конфиденциальности</a>
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
h3 {
  margin: 3rem 0 2rem 0;
  font-size: 24px;
  font-weight: 500;
  line-height: 33px;
}

input, select {
  border: none;
  font-family: Montserrat, Arial, sans-serif;
  font-size: 16px;
  line-height: 21px;
  color: rgb(106, 106, 106)
}


form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.request-button-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;

  p {
    font-size: 13px;
    line-height: 17px;
    color: rgb(148, 154, 171);
  }
}

.request-button {
  width: 80%;
}

.request-my-tel {
  border: none;
}
</style>
