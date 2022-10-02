<script setup lang="ts">
import { useTodo } from "./useTodo";
const { state } = useTodo();
</script>

<template>
  <div class="container">
    <ul>
      <li
        class="transition-colors line-clamp-1 hover:text-gray-500"
        v-for="todo in state.todos"
        :key="todo.text"
      >
        <RouterLink :to="`/todos/${todo.id}`">{{ todo.text }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
