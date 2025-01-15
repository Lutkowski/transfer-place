<script setup lang="ts">
import Car from "../features/carSection/Car.vue";
import Order from "../widgets/Order/Order.vue";
import HowOrder from "../features/howOrderSection/HowOrder.vue";
import Support from "../features/supportSection/Support.vue";
import Contacts from "../widgets/Contact/Contacts.vue";
import MessengerMenu from "../widgets/MessengerMenu/MessengerMenu.vue";
import {Hero} from "../widgets/Hero";
import {Footer} from "../widgets/Footer"
</script>

<template>
  <MessengerMenu/>
  <Hero/>
  <Car/>
  <Order/>
  <HowOrder/>
  <Support/>
  <Contacts/>
  <Footer/>
</template>


