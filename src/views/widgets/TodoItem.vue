<script setup lang="ts">
import IconMark from '@/components/icons/IconMark.vue';
import IconRemove from '@/components/icons/IconRemove.vue';
import type { Todo } from '@/types/todo';

const { todo } = defineProps<{
  todo: Todo;
}>();

const emit = defineEmits<{
  (e: 'onComplete', value: number): void;
  (e: 'onRemove', value: number): void;
}>();

function handleComplete() {
  emit('onComplete', todo.id);
}

function handleRemove() {
  emit('onRemove', todo.id);
}
</script>

<template>
  <div class="todo">
    <div
      :class="['todo__check', { 'todo__check--checked': todo.completed }]"
      @click="handleComplete"
    >
      <IconMark v-if="todo.completed" />
    </div>

    <div class="todo__content">
      {{ todo.title }}
    </div>

    <div class="todo__action" @click="handleRemove">
      <IconRemove />
    </div>
  </div>
</template>

<style scoped lang="scss">
.todo {
  width: 100%;
  height: auto;
  padding: 16px;
  border-radius: 8px;
  background-color: #343434;
  display: flex;
  justify-content: space-between;
  gap: 8px;

  &__check {
    cursor: pointer;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: transparent;
    border: 2px solid #e0c94f;

    &--checked {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #e0c94f;
      border: none;
    }
  }

  &__content {
    flex: 1;
    font-size: 0.9rem;
    line-height: 1.2rem;
  }

  &__action {
    cursor: pointer;
    width: 16px;
    height: 16px;
    color: #777777;

    &:hover {
      color: #ffffff;
    }
  }
}
</style>
