<script setup lang="ts">
import Navbar from "./Navbar.vue";
import PrivacyPolicy from "./PrivacyPolicy.vue";
import {useModalStore} from "../app/providers/modal.store.ts";
import {ModalType} from "../shared/ui/Modal/Modal.types.ts";
import {Modal} from "../shared/ui/Modal";

const footerNavLinks = ["Автопарк", "Заказать", "Помощь"]
const modalStore = useModalStore();
</script>

<template>
  <footer>
    <div class="footer-privacy-policy">
      <span>© Transfer-place.ru</span>
      <p @click="modalStore.openModal(ModalType.PrivacyPolicy)">Политика конфиденциальности</p>
      <Modal :id="ModalType.PrivacyPolicy" classes="footer-modal">
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
  footer .footer-navbar {
    display: none;
  }
}
</style>
