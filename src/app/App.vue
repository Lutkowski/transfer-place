<script setup lang="ts">
import Car from "../features/carSection/Car.vue";
import Order from "../components/Order.vue";
import HowOrder from "../features/howOrderSection/HowOrder.vue";
import Support from "../features/supportSection/Support.vue";
import Contacts from "../components/Contacts.vue";
import MessengerLink from "../components/MessengerLink.vue";
import {Hero} from "../widgets/Hero";
import {Footer} from "../widgets/Footer"
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


