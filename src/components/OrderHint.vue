<script setup lang="ts">
import calendarIcon from "/src/assets/icons/calendar.svg"
import docIcon from "/src/assets/icons/docs.svg"
import infoIcon from "/src/assets/icons/info.svg"
</script>

<template>
  <div class="hints">
    <div class="info-block">
      <div class="icon-item">
        <img :src="calendarIcon" alt="иконка календаря"/>
        <p>Подача к выбранной дате и времени</p>
      </div>
      <div class="icon-item">
        <img :src="docIcon" alt="иконка документа"/>
        <p>Отчетные документы</p>
      </div>
    </div>

    <div class="steps icon-item">
      <img :src="infoIcon" alt="инфо иконка"/>
      <div>
        <h3>Ваши действия:</h3>
        <ul>
          <li>Выберите автомобиль и доп. опции.</li>
          <li>Заполните форму заказа.</li>
          <li>Оплатите поездку.</li>
          <li>Получите подтверждение поездки.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hints{
  line-height: 26px;
  .info-block{
    display: flex;
    flex-direction: column;
    gap: 12px
  }
}
.info-block img {
  width: 24px;
  height: 27px;
}

.icon-item {
  display: flex;
  gap: 10px;
}

.steps{
  margin-top: 3rem;
  img{
    height: 20px;
  }
  div{
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}

h3{
  font-size: 16px;
  font-weight: 500;
}
</style>
