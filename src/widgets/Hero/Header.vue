<script setup lang="ts">
import Navbar from "../../shared/ui/Navbar/Navbar.vue";
import logo from "/public/logo.svg"

const headerItems = [
  {href: "#autopark", text: "автопарк"},
  {href: "#order", text: "заказать"},
  {href: "#supportSection", text: "помощь"},
  {href: "#contacts", text: "контакты"},
];
</script>

<template>
  <header>
    <div class="logo">
      <img :src="logo" alt="Логотип">
      <p>transfer<br/>place</p>
    </div>
    <Navbar class="navbar__header">
      <li v-for="(item, index) in headerItems" :key="index">
        <a :href="item.href">{{ item.text }}</a>
      </li>
    </Navbar>
    <a class="phone__header" href="tel:89315213066">8 (931) 521-30-66</a>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  height: $header-height;
  @include container();
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  margin: 25px 0;
  gap: 15px;

  img {
    width: 48px;
    height: 48px;
  }

  p {
    font-size: $font-size-m;
    font-weight: $font-weight-header;
    text-transform: uppercase;
    line-height: 15px;
  }
}

.phone__header {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  font-size: 18px;
  font-weight: $font-weight-header;
  line-height: 16px;
  white-space: nowrap;
  margin-left: 1rem;
}

.navbar__header {
  margin-left: 8rem;
  gap: 2rem;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
}

@media(max-width: 991.98px) {
  .navbar__header {
    margin-left: 3rem;
    font-weight: 400;
    gap: 1rem;
  }

  .phone__header {
    font-size: 15px;
  }
}

@media (max-width: 768px) {
  .navbar__header {
    display: none;
  }
}
</style>
