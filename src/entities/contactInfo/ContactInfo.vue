<script setup lang="ts">
import {useModalStore} from "../../app/providers/modal.store";
import {Modal} from "../../shared/ui/Modal";
import {ModalType} from "../../shared/ui/Modal/Modal.types";

const modalStore = useModalStore();
</script>

<template>
  <div class="contact-info-container">
    <div class="contact-info">
      <div class="phone">
        <div class="arrow-container">
          <h3>Позвоните нам</h3>
          <img src="/icons/arrow.svg" alt="стрелочка"/>
        </div>
        <p><a href="tel:+79315213066">8 (931) 521-30-66</a></p>
      </div>

      <div class="office">
        <div class="arrow-container">
          <h3>Офис</h3>
          <img src="/icons/arrow.svg" alt="стрелочка"/>
        </div>
        <p>г. Н.Новгород, ул. Тропинина 8</p>
        <p><a href="mailto:info@transfer-place.ru">info@transfer-place.ru</a></p>
      </div>
      <p @click="modalStore.openModal(ModalType.PaymentDetails)">Реквизиты</p>
      <Modal :id="ModalType.PaymentDetails" @click="modalStore.closeModal()" class="payment-info-modal">
        <h2>Реквизиты</h2>
        <div>ИП Эргле Татьяна Владимировна <br>ИНН 526101050703<br>ОГРНИП
          308526131500016<br>Юр. адрес: 603137 г. Н. Новгород, пр. Гагарина, д. 119<br>р/с 40802810614500000882<br>к/с
          30101810845250000999<br>ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ"<br>БИК 044525999
        </div>
      </Modal>

      <div class="payment-icons">
        <img src="/paySystems.svg" alt="MasterCard, VISA, МИР"/>
      </div>
    </div>
    <div class="car-image">
      <img class="map" src="/map.png" alt="Карта Нижнего Новгорода"/>
      <img class="car" src="/carBackground.png" alt="Машина на фоне карты"/>
    </div>
  </div>
</template>

<style scoped>
.contact-info-container {
  display: flex;
}

.contact-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > * {
    > * {
      padding-bottom: 10px;
    }
  }

  h3 {
    line-height: 33px;
    font-size: 24px;
    font-weight: 600;
  }

  a {
    font-size: 18px;
    color: rgb(13, 13, 13);
    font-weight: 500;
  }
}

.car-image {
  display: flex;
  flex-grow: 1;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    align-self: flex-end;
  }

  .map {
    max-height: 45vh;
    left: 5vw;
  }

  .car {
    max-height: 25vh;
  }
}

.arrow-container {
  display: flex;
  justify-content: flex-start;

  img {
    margin-left: 15px;
  }
}

.payment-info-modal {
  text-align: center;

  h2 {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 32px;
    line-height: 37px;
  }

  div {
    font-weight: 300;
    font-size: 16px;
    gap: 10px;
  }
}

</style>
