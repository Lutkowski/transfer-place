<script setup lang="ts">
import Navbar from "./Navbar.vue";
import Modal from "./Modal.vue";
import {modalStates, openModal} from "../store/Modal.ts";
import PrivacyPolicy from "./PrivacyPolicy.vue";

const footerNavLinks = ["Автопарк", "Заказать", "Помощь"]
modalStates.value['footer'] = false;
</script>

<template>
  <footer>
    <div class="footer-privacy-policy">
      <span>© Transfer-place.ru</span>
      <p @click="openModal('footer')">Политика конфиденциальности</p>
      <Modal id="footer" classes="footer-modal">
        <h2>
          Политика в отношении обработки персональных данных
        </h2>
        <PrivacyPolicy/>
      </Modal>
    </div>
    <Navbar classes="footer-navbar" :items="footerNavLinks"/>
  </footer>
</template>

<style scoped lang="scss">
footer {
  @include padding-container;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 12.5vh;
  background: rgb(234, 237, 245);
  color: rgb(22, 22, 22);
  font-size: 16px;

  .footer-privacy-policy {
    display: flex;
    justify-content: space-between;
    gap: 55px;

    > :nth-child(2) {
      font-size: 14px;
    }
  }

  .footer-navbar {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 600;
    line-height: 15px;
  }
}

.footer-modal {
  h2 {
    font-size: 32px;
    font-weight: 600;
    line-height: 37px;
  }

  div {
    font-size: 16px;
    font-weight: 300;
    line-height: 25px;
  }
}

@media (max-width: 768px) {
  footer .footer-navbar{
    display: none;
  }
}
</style>
