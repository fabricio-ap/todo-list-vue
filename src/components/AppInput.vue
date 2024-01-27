<script setup lang="ts">
defineEmits(['onChange', 'onKeyPress']);
</script>

<template>
  <input
    class="input"
    type="text"
    placeholder="Adicione uma nova tarefa"
    @input="$emit('onChange', ($event.target as HTMLInputElement).value)"
    @keypress="$emit('onKeyPress', $event.key)"
  />
</template>

<style scoped lang="scss"> 
input[type='text'] {
  font-family: 'Nunito', sans-serif;
}

.input {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 12px;
  border-radius: 8px;
  color: #ffffff;
  border: 1px solid #000000;
  background-color: #262626;

  &:focus-visible {
    outline: none;
  }
}
</style>
