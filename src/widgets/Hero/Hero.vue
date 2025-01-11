<script setup lang="ts">
import Header from "./Header.vue";
import Navbar from "../../shared/ui/Navbar/Navbar.vue";
import DestinationLink from "./DestinationLink.vue";
import {MyButton} from "../../shared/ui/MyButton";
import {destinationItems} from "../../shared/mocks/destinationsMock.ts";

</script>

<template>
  <section class="hero">
    <div class="hero-wrapper">
      <Header/>
      <div class="hero-content">
        <div class="hero-content-order">
          <h1>Сервис бронирования поездок по <br/> Нижнему Новгороду, области и куда угодно</h1>
          <MyButton class="hero-button">Заказать поездку</MyButton>
        </div>
      </div>
    </div>
    <Navbar class="hero-navbar">
      <li v-for="item in destinationItems" :key="item.destination">
        <DestinationLink :destination="item"></DestinationLink>
      </li>
    </Navbar>
  </section>
</template>

<style scoped lang="scss">
.hero {
  min-height: calc(100vh + $destination-height);
  color: $secondary-color;
  background-size: cover;
  background: url("/backgroundHero.jpg") no-repeat;

  button {
    width: 17.3rem;
  }
}


.hero-content {
  @include flex-center();
  @include container();
  flex-direction: column;
  align-items: flex-start;
  min-height: calc(100vh - $header-height);

  h1 {
    line-height: 65px;
    font-size: 42px;
    text-align: left;
  }
}

.hero-wrapper {
  z-index: -1;
  background: rgba(1, 1, 19, 0.75);
  box-shadow: 0 4px 20px rgba(1, 1, 19, 0.75);
}

.hero-navbar {
  align-self: flex-end;
  background-color: $dark-blue-background;
  min-height: $destination-height;
  padding: 2rem 10%;
  align-items: center;
  flex-wrap: wrap;
  font-size: 24px;
  font-weight: 500;
  line-height: 14px;
}


.hero-button{
  text-transform: uppercase;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .hero-content h1 {
    line-height: 42px;
    font-size: 28px;
    justify-self: center;
  }
}
</style>
