<script setup lang="ts">
import {ref} from "vue";
import OrderHint from "../../entities/orderHint/OrderHint.vue";
import MyInput from "../../shared/ui/MyInput/MyInput.vue";
import MyRange from "../../shared/ui/MyRange/MyRange.vue";
import MyCheckbox from "../../shared/ui/MyCheckbox/MyCheckbox.vue";
import PhoneInput from "../../shared/ui/PhoneInput/PhoneInput.vue";
import {useModalStore} from "../../app/providers/modal.store.ts";
import {ModalType} from "../../shared/ui/Modal/Modal.types.ts";
import {MyButton} from "../../shared/ui/MyButton";
import {Modal} from "../../shared/ui/Modal";
import {Destinations} from "../../entities/destination/destination.types.ts";
import {useOrderStore} from "../../app/providers/order.store.ts";
import {useOrderForm} from "./useOrderForm.ts";
import {carClass} from "../../entities/car/car.types.ts";

const modalStore = useModalStore();
const orderStore = useOrderStore();

const {totalPrice} = useOrderForm();

const carClassOptions = Object.entries(carClass);
const transferOptions = Object.entries(Destinations);

const backgroundPath = '/transferBackground';
const transferImageURL: Record<Destinations, string> = {
  [Destinations.AIRPORT]: `${backgroundPath}/airport.jpg`,
  [Destinations.RAILWAY_STATION]: `${backgroundPath}/station.png`,
  [Destinations.ADDRESS]: `${backgroundPath}/address.png`,
  [Destinations.INTERCITY]: `${backgroundPath}/intercity.png`,
  [Destinations.RENT]: `${backgroundPath}/rent.png`,
};

const showDestination = ref(true);
const changeDestination = () => {
  showDestination.value = false;
  setTimeout(() => {
    showDestination.value = true;
  }, 1000);
};

</script>

<template>
  <header id="order-form" :style="{ backgroundImage: `url(${transferImageURL[orderStore.destination]})` }">
    <transition name="fade">
      <h2 v-if="showDestination">{{ orderStore.destination }}</h2>
    </transition>
  </header>
  <div class="order-form-content">
    <form>
      <label for="transferType">Вид трансфера</label>
      <select id="transferType" @change="changeDestination" v-model="orderStore.destination">
        <option v-for="[key, label] in transferOptions" :key="key" :label="label">
          {{ label }}
        </option>
      </select>
      <label for="carClass">Класс автомобиля</label>
      <select id="carClass" v-model="orderStore.chosenCarClass">
        <option v-for="[key, label ] in carClassOptions" :key="key" :label="label">
          {{ label }}
        </option>
      </select>

      <label for="phone">Номер телефона</label>
      <PhoneInput
          :modelValue="orderStore.phone" class="my-tel-input-order" name="phone"
      ></PhoneInput>
      <div v-if="orderStore.destination === Destinations.RENT">
        <label for="hoursQuantity">Количество часов</label>
        <MyRange v-model.number="orderStore.hoursQuantity" type="range" id="hoursQuantity"
                 :min="4" :max="24"/>
      </div>
      <div v-if="orderStore.destination !== Destinations.INTERCITY" class="additional-options">
        <div class="checkbox-container">
          <MyCheckbox type="checkbox" name="meetingSign" v-model="orderStore.withSign" :value="true"/>
          <label>
            Встреча с табличкой (500 ₽)
          </label>
        </div>
        <div class="checkbox-container">
          <MyCheckbox type="checkbox" name="childSeat" v-model="orderStore.withChild" :value="true"/>
          <label>
            Детское кресло (300 ₽)
          </label>
        </div>
      </div>
      <p v-if="orderStore.destination !== Destinations.INTERCITY">Стоимость поездки: <strong>{{ totalPrice }}
        ₽</strong>
      </p>
      <p v-else>Стоимость рассчитывается оператором</p>
      <MyButton type="submit" class="submit-button" @click.prevent="modalStore.openModal(ModalType.OrderDetails)">
        {{ orderStore.destination !== Destinations.INTERCITY ? "ЗАБРОНИРОВАТЬ" : 'Рассчитать' }}
      </MyButton>
      <Modal :id="ModalType.OrderDetails" classes="order-modal">
        <div class="confirmation-order-details">
          <h2>Заказать</h2>
          <form>
            <label for="tripInformation">
              Информация о поездке
            </label>
            <textarea id="tripInformation"
                      placeholder="Укажите маршрут (откуда - куда), время, дату и ваши комментарии или пожелания"
                      v-model="orderStore.details"
            ></textarea>
            <label for="name">
              Контактные данные
            </label>
            <MyInput type="text" id="name" placeholder="Как к вам обращаться?" v-model="orderStore.name"/>
            <PhoneInput v-model="orderStore.phone" class="my-tel-input-order"
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

form {
  gap: 5px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter, .fade-leave-to {
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

.checkbox-container {
  display: flex;
  gap: 10px;
  align-items: center;

  label {
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
