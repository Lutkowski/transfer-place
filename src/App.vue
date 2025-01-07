<script setup lang="ts">
import Car from "./components/Car.vue";
import Order from "./components/Order.vue";
import HowOrder from "./components/HowOrder.vue";
import Support from "./features/support/Support.vue";
import Contacts from "./components/Contacts.vue";
import Footer from "./widgets/Footer/Footer.vue";
import MessengerLink from "./components/MessengerLink.vue";
import {Hero} from "./widgets/Hero";
</script>

<template>
  <MessengerLink/>
  <Hero/>
  <Car/>
  <Order/>
  <HowOrder/>
  <Support/>
  <Contacts/>
  <Footer/>
</template>


