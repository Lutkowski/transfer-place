<script setup lang="ts">
import {ref, computed} from 'vue';
import {useRouter} from 'vue-router';
import {useOrderStore} from '../../app/providers/order.store';
import {useAuthStore} from '../../app/providers/auth.store';
import {useModalStore} from '../../app/providers/modal.store';
import {useOrderForm} from './useOrderForm';

import {ModalType} from '../../shared/ui/Modal/Modal.types';
import {OrderApi} from '../../shared/api/order.api'; // путь к OrderApi
import {TransferType} from '../../shared/enums/transfer-type.enum';
import {CarClass} from '../../shared/enums/car-class.enum';

import OrderHint from '../../entities/orderHint/OrderHint.vue';
import MyRange from '../../shared/ui/MyRange/MyRange.vue';
import MyCheckbox from '../../shared/ui/MyCheckbox/MyCheckbox.vue';
import PhoneInput from '../../shared/ui/PhoneInput/PhoneInput.vue';
import {MyButton} from '../../shared/ui/MyButton';
import {Modal} from '../../shared/ui/Modal';

const orderStore = useOrderStore();
const authStore = useAuthStore();
const modalStore = useModalStore();
const router = useRouter();

const {totalPrice} = useOrderForm();

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

const isAuthenticated = computed(() => !!authStore.phone);

const submitOrder = async () => {
  if (!isAuthenticated.value) {
    modalStore.openModal(ModalType.AuthRequired);
    setTimeout(() => {
      modalStore.closeModal();
      router.push('/auth');
    }, 1500);
    return;
  }

  const dto = {
    transferType: orderStore.destination,
    carClass: orderStore.chosenCarClass,
    withChild: orderStore.withChild,
    withSign: orderStore.withSign,
    hoursQuantity: orderStore.hoursQuantity,
    pickupLocation: orderStore.pickupLocation,
    dropoffLocation: orderStore.dropoffLocation,
    pickupDate: orderStore.pickupDate,
    pickupTime: orderStore.pickupTime,
    comment: orderStore.comment,
    name: authStore.name || orderStore.name,
    phone: authStore.phone || orderStore.phone,
  };

  try {
    const priceResponse = await OrderApi.calculatePrice({
      destination: dto.transferType,
      carClass: dto.carClass,
      withChild: dto.withChild,
      withSign: dto.withSign,
    });
    const calculatedPrice = priceResponse.data.price;

    const orderResponse = await OrderApi.create({ ...dto, price: calculatedPrice });

    alert(`Заявка создана! Стоимость: ${calculatedPrice} ₽`);
  } catch (e) {
    console.error('Ошибка при создании заказа');
    alert('Не удалось создать заявку. Проверьте данные.');

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
        <option v-for="[key, label] in transferOptions" :key="key" :label="label">{{ label }}</option>
      </select>

      <label for="carClass">Класс автомобиля</label>
      <select id="carClass" v-model="orderStore.chosenCarClass">
        <option v-for="[key, label] in carClassOptions" :key="key" :label="label">{{ label }}</option>
      </select>

      <label for="pickupLocation">Откуда</label>
      <input v-model="orderStore.pickupLocation" id="pickupLocation" placeholder="Адрес подачи"/>

      <label v-if="orderStore.destination !== TransferType.RENT_WITH_DRIVER" for="dropoffLocation">Куда</label>
      <input v-if="orderStore.destination !== TransferType.RENT_WITH_DRIVER" v-model="orderStore.dropoffLocation"
             id="dropoffLocation" placeholder="Адрес назначения"/>

      <label for="pickupDate">Дата</label>
      <input v-model="orderStore.pickupDate" id="pickupDate" type="date"/>

      <label for="pickupTime">Время</label>
      <input v-model="orderStore.pickupTime" id="pickupTime" type="time"/>

      <label for="name">Имя</label>
      <input v-model="orderStore.name" id="name" placeholder="Как к вам обращаться?"/>

      <div v-if="!authStore.phone">
        <label for="phone">Телефон</label>
        <PhoneInput v-model="orderStore.phone" class="my-tel-input-order" name="phone"/>
      </div>

      <label for="comment">Комментарий</label>
      <textarea v-model="orderStore.comment" id="comment" placeholder="Пожелания, номер рейса и т.д."/>

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

      <p v-if="orderStore.destination !== TransferType.INTERCITY">
        Стоимость поездки: <strong>{{ totalPrice }} ₽</strong>
      </p>
      <p v-else>Стоимость рассчитывается оператором</p>

      <MyButton type="submit" class="submit-button">
        {{ orderStore.destination !== TransferType.INTERCITY ? 'ЗАБРОНИРОВАТЬ' : 'Рассчитать' }}
      </MyButton>
    </form>

    <OrderHint class="order-hint"/>
  </div>

  <Modal :id="ModalType.AuthRequired">
    <div class="modal-inner">
      <h2>Авторизация</h2>
      <p>Для оформления заказа необходимо авторизоваться</p>
    </div>
  </Modal>
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
