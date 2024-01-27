<script setup lang="ts">
import data from '@/assets/data/todos.json';
import AppInput from '@/components/AppInput.vue';
import type { Todo } from '@/types/todo';
import { ref } from 'vue';
import TodoItem from './widgets/TodoItem.vue';
import TodoList from './widgets/TodoList.vue';
import TodoMetrics from './widgets/TodoMetrics.vue';

const newTodo = ref('');

const todos: Todo[] = [...data];
const hasTodos = todos.length;

function handleInput(event: { target: { value: string } }) {
  newTodo.value = event.target.value;
}

function handleComplete(id: number) {
  console.log('complete', id);
}

function handleRemove(id: number) {
  console.log('remove', id);
}
</script>

<template>
  <div class="home">
    <AppInput @input="handleInput" />

    <div v-if="hasTodos" class="home__todos">
      <TodoMetrics :todos="todos" />

      <TodoList>
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @on-complete="handleComplete"
          @on-remove="handleRemove"
        />
      </TodoList>
    </div>

    <div v-else class="home__todos">Você não possui tarefas criadas</div>
  </div>
</template>

<style scoped lang="scss">
.home {
  width: 100%;
  height: auto;
  padding: 24px 32px;

  &__todos {
    width: 100%;
    margin-top: 16px;
    font-size: 0.9rem;
  }
}
</style>
