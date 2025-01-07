<script setup lang="ts">
import {computed, ref} from "vue";
import {orderFormState, Transfer} from "../store/orderForm.ts";
import OrderHint from "./OrderHint.vue";
import MyInput from "../shared/MyInput/MyInput.vue";
import MyRange from "./MyRange.vue";
import MyCheckbox from "../shared/MyCheckbox/MyCheckbox.vue";
import PhoneInput from "../shared/PhoneInput/PhoneInput.vue";
import {useModalStore} from "../app/providers/modal.store.ts";
import {ModalType} from "../shared/Modal/Modal.types.ts";
import {Modal} from "../shared";
import MyButton from "../shared/MyButton/MyButton.vue";

enum carClass {
  STANDART = "Стандарт",
  COMFORT = "Комфорт",
  BUSINESS = "Бизнесс",
  MINIWAN = "Минивэн"
}

const carClassPrices = {
  [carClass.STANDART]: {
    [Transfer.AIRPORT]: 1200,
    [Transfer.RAILWAY_STATION]: 800,
    [Transfer.ADDRESS]: 800,
    [Transfer.RENT]: 1000
  },
  [carClass.COMFORT]: {
    [Transfer.AIRPORT]: 2500,
    [Transfer.RAILWAY_STATION]: 1500,
    [Transfer.ADDRESS]: 1500,
    [Transfer.RENT]: 1500
  },
  [carClass.BUSINESS]: {
    [Transfer.AIRPORT]: 6000,
    [Transfer.RAILWAY_STATION]: 4000,
    [Transfer.ADDRESS]: 4000,
    [Transfer.RENT]: 2000
  },
  [carClass.MINIWAN]: {
    [Transfer.AIRPORT]: 4500,
    [Transfer.RAILWAY_STATION]: 3000,
    [Transfer.ADDRESS]: 3000,
    [Transfer.RENT]: 1500
  },
}

const carClassOptions = computed(() => Object.entries(carClass));


const transferOptions = computed(() => Object.entries(Transfer));

const basePrice = ref(0);
const choosenCarClass = ref(carClass.STANDART)
const withChild = ref(false)
const withSign = ref(false)
const hoursQuantity = ref(4);
const name = ref('');

const withSignPrice = 500;
const withChildPrice = 300;


const totalPrice = computed(() => {
  let total = basePrice.value + carClassPrices[choosenCarClass.value][orderFormState.value.destination];
  if (orderFormState.value.destination === Transfer.RENT) {
    total *= hoursQuantity.value;
  }
  if (withChild.value) total += withChildPrice;
  if (withSign.value) total += withSignPrice;
  return total;
});

const showDestination = ref(true);
const changeDestination = () => {
  // Прямое изменение destination
  showDestination.value = false;
  setTimeout(() => {
    showDestination.value = true;
  }, 1000);
};

const phone = ref('');

const modalStore = useModalStore();

</script>

<template>
  <header id="order-form" :style="{ backgroundImage: `url(${orderFormState.imageUrl})` }">
    <transition name="fade">
      <h2 v-if="showDestination">{{ orderFormState.destination }}</h2>
    </transition>
    <!--
    <button>Заказать</button>
    <img :src="arrowDown" alt="Прокрутить вниз"/>
    -->
  </header>
  <div class="order-form-content">
    <form>
      <label for="transferType">Вид трансфера</label>
      <select id="transferType" @change="changeDestination" v-model="orderFormState.destination">
        <option v-for="[key, label] in transferOptions" :key="key" :label="label">
          {{ label }}
        </option>
      </select>
      <label for="carClass">Класс автомобиля</label>
      <select id="carClass" v-model="choosenCarClass">
        <option v-for="[key, label ] in carClassOptions" :key="key" :label="label">
          {{ label }}
        </option>
      </select>

      <label for="phone">Номер телефона</label>
      <PhoneInput
          :modelValue="phone" class="my-tel-input-order" name="phone"
      ></PhoneInput>
      <div v-if="orderFormState.destination === Transfer.RENT">
        <label for="hoursQuantity">Количество часов</label>
        <MyRange v-model="hoursQuantity" type="range" id="hoursQuantity"
                 :min="4" :max="24"/>
      </div>
      <div v-if="orderFormState.destination !== Transfer.INTERCITY" class="additional-options">
        <div class="checkbox-container">
          <MyCheckbox type="checkbox" name="meetingSign" v-model="withSign" :value="true"/>
          <label>
            Встреча с табличкой (500 ₽)
          </label>
        </div>
        <div class="checkbox-container">
          <MyCheckbox type="checkbox" name="childSeat" v-model="withChild" :value="true"/>
          <label>
            Детское кресло (300 ₽)
          </label>
        </div>
      </div>
      <p v-if="orderFormState.destination !== Transfer.INTERCITY">Стоимость поездки: <strong>{{ totalPrice }} ₽</strong>
      </p>
      <p v-else>Стоимость рассчитывается оператором</p>
      <MyButton type="submit" class="submit-button" @click.prevent="modalStore.openModal(ModalType.OrderDetails)">
        {{ orderFormState.destination !== Transfer.INTERCITY ? "ЗАБРОНИРОВАТЬ" : 'Рассчитать' }}
      </MyButton>
      <Modal :id="ModalType.OrderDetails" classes="order-modal">
        <div class="confirmation-order-details">
          <h2>Заказать</h2>
          <form>
            <label for="tripInformation">
              Информация о поездке
            </label>
            <textarea id="tripInformation"
                      placeholder="Укажите маршрут (откуда - куда), время, дату и ваши комментарии или пожелания"></textarea>
            <label for="name">
              Контактные данные
            </label>
            <MyInput type="text" id="name" placeholder="Как к вам обращаться?" v-model="name"/>
            <PhoneInput v-model="phone" class="my-tel-input-order"
            ></PhoneInput>
            <MyButton>Оставить заявку</MyButton>
          </form>
        </div>
      </Modal>
    </form>
    <OrderHint class="order-hint"/>
  </div>
</template>

<style scoped lang="scss">
header {
  height: 24vh;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-image 1s ease-in-out;
}

h2 {
  margin: auto 0 auto 10%;
  color: $secondary-color;
  line-height: 44px;
  font-size: 35px;
  font-weight: 600;
  transition: opacity 1s ease-in-out;
}

form{
  gap: 5px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter, .fade-leave-to
{
  opacity: 0;
}

.order-form-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5vw;
  background: white;
  padding: 4rem;
  border-radius: 1rem;
  margin-top: 1rem;

  form {
    grid-area: form;
  }

  grid-template-areas:
    "form hint";

  .order-hint {
    grid-area: hint;
  }

  > * {
    display: flex;
    flex-direction: column;
  }
}

.order-modal {
  width: 40vw;
}

.confirmation-order-details {
  h2 {
    margin: 0;
    text-transform: uppercase;
    line-height: 32px;
    font-size: 24px;
    font-weight: 600;
    color: black;
  }

  form {
    display: flex;
    flex-direction: column;
  }
}

input, select, textarea {
  margin-top: 5px;
  border: 1px solid rgb(202, 210, 233);
  color: rgb(13, 13, 13);
  font-family: Montserrat, Arial, sans-serif;
  font-size: 16px;
  line-height: 21px;
  padding: 0 45px 0 20px;
}

textarea {
  padding: 20px 20px 40px 20px;
}

.my-tel-input-order {
  border: 1px solid rgb(202, 210, 233);
  color: rgb(13, 13, 13);
  font-family: Montserrat, Arial, sans-serif;
  font-size: 16px;
  line-height: 21px;
  border-radius: 7px;
  overflow: auto;
}

.checkbox-container{
  display: flex;
  gap: 10px;
  align-items: center;
  label{
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    color: rgb(13, 13, 13);
  }
}

@media (max-width: 768px) {
  .order-form-content {
    grid-template-areas:
      "hint"
      "form";
    grid-template-columns: 1fr;
  }
}
</style>
