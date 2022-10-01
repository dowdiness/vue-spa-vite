<script setup lang="ts">
import { useTodo } from "./useTodo";
const { state } = useTodo();
</script>

<template>
  <div class="container">
    <ul class="">
      <li v-for="todo in state.todos" :key="todo.text">
        <RouterLink :to="`/todos/${todo.id}`">{{ todo.text }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
