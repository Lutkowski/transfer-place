<script setup lang="ts">
import { ref } from "vue";
import OrderHint from "../../entities/orderHint/OrderHint.vue";
import MyRange from "../../shared/ui/MyRange/MyRange.vue";
import MyCheckbox from "../../shared/ui/MyCheckbox/MyCheckbox.vue";
import PhoneInput from "../../shared/ui/PhoneInput/PhoneInput.vue";
// import { useModalStore } from "../../app/providers/modal.store.ts";
// import { ModalType } from "../../shared/ui/Modal/Modal.types.ts";
// import { Modal } from "../../shared/ui/Modal";
import { MyButton } from "../../shared/ui/MyButton";
import { useOrderStore } from "../../app/providers/order.store.ts";
import { useOrderForm } from "./useOrderForm.ts";
import {CalculatePriceDto} from "../../shared/api/dto/calculate-price.dto.ts";
import {OrderApi} from "../../shared/api/price-calculate.ts";
import {TransferType} from "../../shared/enums/transfer-type.enum.ts";
import {CarClass} from "../../shared/enums/car-class.enum.ts";

const orderStore = useOrderStore();
const { totalPrice } = useOrderForm();

const carClassOptions = Object.entries(CarClass);
const transferOptions = Object.entries(TransferType);

const backgroundPath = '/transferBackground';
const transferImageURL: Record<TransferType, string> = {
  [TransferType.AIRPORT]: `${backgroundPath}/airport.jpg`,
  [TransferType.RAILWAY]: `${backgroundPath}/station.png`,
  [TransferType.ADDRESS_TO_ADDRESS]: `${backgroundPath}/address.png`,
  [TransferType.INTERCITY]: `${backgroundPath}/intercity.png`,
  [TransferType.RENT_WITH_DRIVER]: `${backgroundPath}/rent.png`,
};

const showDestination = ref(true);
const changeDestination = () => {
  showDestination.value = false;
  setTimeout(() => {
    showDestination.value = true;
  }, 1000);
};

const submitOrder = async () => {
  if (orderStore.destination === TransferType.INTERCITY) {
    alert("Стоимость междугородней поездки рассчитывается оператором.");
    return;
  }


  const dto: CalculatePriceDto = {
    destination: orderStore.destination,
    carClass: orderStore.chosenCarClass,
    withChild: orderStore.withChild,
    withSign: orderStore.withSign,
    hoursQuantity: orderStore.hoursQuantity,
  };

  try {
    const res = await OrderApi.create(dto);
    alert(`Цена поездки: ${res.data.price} ₽`);
  } catch (e) {
    console.error("Ошибка при расчёте цены", e);
    alert("Ошибка при расчёте. Проверьте данные.");
  }
};
</script>

<template>
  <header id="order-form" :style="{ backgroundImage: `url(${transferImageURL[orderStore.destination]})` }">
    <transition name="fade">
      <h2 v-if="showDestination">{{ orderStore.destination }}</h2>
    </transition>
  </header>

  <div class="order-form-content">
    <form @submit.prevent="submitOrder">
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
      <PhoneInput :modelValue="orderStore.phone" class="my-tel-input-order" name="phone" />

      <div v-if="orderStore.destination === TransferType.RENT_WITH_DRIVER">
        <label for="hoursQuantity">Количество часов</label>
        <MyRange v-model.number="orderStore.hoursQuantity" type="range" id="hoursQuantity" :min="4" :max="24"/>
      </div>

      <div v-if="orderStore.destination !== TransferType.INTERCITY" class="additional-options">
        <div class="checkbox-container">
          <MyCheckbox type="checkbox" name="meetingSign" v-model="orderStore.withSign" :value="true"/>
          <label>Встреча с табличкой (500 ₽)</label>
        </div>
        <div class="checkbox-container">
          <MyCheckbox type="checkbox" name="childSeat" v-model="orderStore.withChild" :value="true"/>
          <label>Детское кресло (300 ₽)</label>
        </div>
      </div>

      <p v-if="orderStore.destination !== TransferType.INTERCITY">Стоимость поездки: <strong>{{ totalPrice }} ₽</strong></p>
      <p v-else>Стоимость рассчитывается оператором</p>

      <MyButton type="submit" class="submit-button">
        {{ orderStore.destination !== TransferType.INTERCITY ? "ЗАБРОНИРОВАТЬ" : "Рассчитать" }}
      </MyButton>
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
