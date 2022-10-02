<script setup lang="ts">
import { useTodo } from "./useTodo";
const { todos } = useTodo();
</script>

<template>
  <div class="container">
    <ul>
      <li
        class="transition-colors line-clamp-1 hover:text-gray-500"
        v-for="todo in todos.todos"
        :key="todo.text"
      >
        <RouterLink :to="`/todos/${todo.id}`">{{ todo.text }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
