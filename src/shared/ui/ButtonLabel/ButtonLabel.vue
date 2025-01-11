<script setup lang="ts">

</script>

<template>
  <div>
    <span><slot></slot></span>
  </div>
</template>

<style scoped lang="scss">
span {
  background: rgb(41, 41, 41);
  color: $secondary-color;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  padding: 9px 13px;
  opacity: 0.85;
  position: relative;
}

div::after {
  content: "";
  display: inline-block;
  position: absolute;
  width: 0;
  height: 0;
  margin-left: 1px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid rgb(41, 41, 41);
}
</style>
