<template>
  <div class="metrics">
    <AppMetric label="Tarefas criadas" :value="total" />
    <AppMetric label="Concluídas" :value="completed" />
  </div>
</template>

<script setup lang="ts">
import AppMetric from '@/components/AppMetric.vue';
import { useTodos } from '@/composables/useTodos';
import type { Todo } from '@/types/todo';

const props = defineProps<{
  todos: Todo[];
}>();

const { getTotalTodos, getCompletedTodos } = useTodos(props.todos);

const total = `${getTotalTodos()}`;
const completed = `${getCompletedTodos()} de ${total}`;
</script>

<style scoped lang="scss">
.metrics {
  width: 100%;
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
