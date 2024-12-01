<script setup lang="ts">
import HowOrderStepCard from "./HowOrderStepCard.vue";
import Navbar from "./Navbar.vue";

const steps = [
  {
    component: HowOrderStepCard,
    props: {
      img: {
        src: "/howOrder/oneTick.svg",
        alt: "Выбрать поездку"
      },
      index: 1,
      title: "выбрать поездку",
      content: "Выберите тип поездки, класс автомобиля и дополнительные услуги, которые вам нужны."
    }
  },
  {
    component: HowOrderStepCard,
    props: {
      img: {
        src: "/howOrder/twoTick.svg",
        alt: "Оформить заявку"
      },
      index: 2,
      title: "оформить заявку",
      content: "Заполните все необходимые данные о поездке, и наш менеджер свяжется с вами для подтверждения заказа."
    }
  },
  {
    component: HowOrderStepCard,
    props: {
      img: {
        src: "/howOrder/car.svg",
        alt: "Дождаться водителя"
      },
      index: 3,
      title: "дождаться водителя",
      content: "По прибытии наш водитель будет ожидать вас в указанном месте. Он позаботится о вашем комфорте и поможет с багажом."
    }
  }
];
</script>

<template>
  <section>
    <h2>Как заказать</h2>
    <Navbar classes="navbar-grid how-order-border" liClasses="how-order-card-wrapper" :items=steps>
    </Navbar>
  </section>
</template>

<style scoped lang="scss">
section {
  background: $dark-blue-background;
  color: $secondary-color;
  margin-top: $section-margin;
  padding: $section-margin 10%;

  ul {
    margin-top: $content-section-margin;
    gap: 4rem;
  }
  .navbar-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
  }
}


@media (max-width: 768px) {
  section .navbar-grid {
    grid-template-columns: 1fr;
    align-items: stretch;
  }
}

</style>
