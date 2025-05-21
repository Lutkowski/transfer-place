<script setup lang="ts">
import {MyInput} from "../../shared/ui/MyInput";
import {PhoneInput} from "../../shared/ui/PhoneInput";
import {MyButton} from "../../shared/ui/MyButton";
import {useContactForm} from "./useContactForm";

const {
  name, phone, message,
  nameError, phoneError, messageError,
  isFormValid, submitForm
} = useContactForm();
</script>

<template>
  <div>
    <h3>Оставить заявку</h3>
    <form @submit.prevent="submitForm">


      <MyInput
          v-model="name"
          type="text"
          name="name"
          placeholder="Имя"
      />
      <p v-if="nameError" class="error-message">{{ nameError }}</p>

      <PhoneInput
          v-model="phone"
          class="request-my-tel"
      />
      <p v-if="phoneError" class="error-message">{{ phoneError }}</p>

      <textarea v-model="message" placeholder="Ваш вопрос или комментарий" rows="5"/>
      <p v-if="messageError" class="error-message">{{ messageError }}</p>

      <div class="request-button-container">
        <div>
          <MyButton
              class="request-button"
              type="submit"
              :disabled="!isFormValid"
          >
            Перезвоните мне
          </MyButton>
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

input,
textarea {
  border: none;
  font-family: Montserrat, Arial, sans-serif;
  font-size: 16px;
  line-height: 21px;
  color: rgb(106, 106, 106);
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
}

.request-button {
  width: 80%;
}

.request-my-tel {
  border: none;
}

.error-message {
  color: #e53e3e;
  font-size: 14px;
  margin-top: -0.5rem;
}

.disclaimer {
  font-size: 13px;
  line-height: 17px;
  color: rgb(148, 154, 171);
}
</style>
