<script setup lang="ts">
import {ref} from "vue";
import {ButtonLabel} from "../../shared/ui/ButtonLabel";
import MessengerIcon from "../../entities/messenger/MessengerIcon.vue";
import {MessengerNames, messengers} from "../../entities/messenger/Messenger.types.ts";

const isActive = ref(true)
const activeMessenger = ref<MessengerNames | null>(null);
</script>

<template>
  <div v-if="isActive" class="messenger-link">
    <ButtonLabel>Напишите нам в мессенджер</ButtonLabel>
    <div class="messenger-menu-icon" @click="isActive = false">
      <svg role="presentation" width="35" height="32" viewBox="0 0 35 32"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.2667 12.6981H23.3667M11.2667 16.4717H23.3667M4.8104 23.5777C2.4311 21.1909 1 18.1215 1 14.7736C1 7.16679 8.38723 1 17.5 1C26.6128 1 34 7.16679 34 14.7736C34 22.3804 26.6128 28.5472 17.5 28.5472C15.6278 28.5472 13.8286 28.2868 12.1511 27.8072L12 27.7925L5.03333 31V23.8219L4.8104 23.5777Z"
            stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"
            fill="none"></path>
      </svg>
    </div>
  </div>
  <div v-else class="messenger-link active">
    <div class="cross-icon" @click="isActive=true">
      <svg role="presentation" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 23 23">
        <g>
          <path d="M10.314 -3.686H12.314V26.314H10.314z" transform="rotate(-45 11.314 11.314)"></path>
          <path d="M10.314 -3.686H12.314V26.314H10.314z" transform="rotate(45 11.314 11.314)"></path>
        </g>
      </svg>
    </div>
    <div v-for="messenger in messengers" :key="messenger.name" class="label-container">
      <MessengerIcon
          :messenger="messenger"
          :is-active="messenger.name === activeMessenger"
          @hover="activeMessenger = messenger.name"
          @leave="activeMessenger = null"
      />
    </div>
  </div>


</template>

<style scoped lang="scss">
.messenger-link {
  position: fixed;
  bottom: 25px;
  right: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 2;

  .messenger-menu-icon {
    position: relative;
    margin-left: 20px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: rgb(0, 136, 204);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    animation: scale 2s ease infinite;
  }

  .messenger-menu-icon svg {
    width: 36px;
    height: 36px;
    fill: white;
  }
}

.messenger-menu-icon::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 136, 204, 1);
  border-radius: 50%;
  z-index: -1;
  animation: wave 2s ease-in-out infinite;
}

.cross-icon {
  @include flex-center;
  background: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.cross-icon, .messenger-icon {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.active {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  gap: 10px;

  > div:not(:first-child) {
    margin-right: 5px;
  }
}

.messenger-icon {
  border-radius: 50%;
  width: 50px;
  height: 50px;

}

.label-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}


@keyframes wave {
  0% {
    transform: scale(0);
    opacity: 0.5;
    background-image: radial-gradient(circle at center, rgba(0, 136, 204, 1), rgba(0, 136, 204, 0));
  }
  50% {
    transform: scale(1.1);
    opacity: 0.3;
    background-image: radial-gradient(circle at center, rgba(0, 136, 204, 1), rgba(0, 136, 204, 0));
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
    background-image: radial-gradient(circle at center, rgba(0, 136, 204, 1), rgba(0, 136, 204, 0));
  }
}

@keyframes scale {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
}

.viber-icon {
  position: relative;
}

.viber-icon .svg-background {
  z-index: -1;
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  top: 5px;
  right: 10px;
}
</style>
