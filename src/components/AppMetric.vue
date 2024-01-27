<script setup lang="ts">
defineProps<{
  label: string;
  value: string;
}>();
</script>

<template>
  <div class="metric">
    <p class="metric__label">{{ label }}</p>
    <div class="metric__value">
      {{ value }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.metric {
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-size: 0.9rem;

  &__label {
    font-weight: 600;
  }

  &__value {
    display: flex;
    justify-content: center;
    min-width: 1.8rem;
    font-size: 0.8rem;
    padding: 2px 8px;
    border-radius: 16px;
    line-height: normal;
    background-color: #343434;
  }
}
</style>
