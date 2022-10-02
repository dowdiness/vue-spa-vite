<script setup lang="ts">
import TodoList from "../feat/todo/TodoList.vue";
import Button from "../components/ButtonUI.vue";
import { useTodo } from "../feat/todo/useTodo";
const { addTodo } = useTodo();
</script>

<template>
  <h2 class="text-2xl font-medium">Todo一覧</h2>
  <TodoList></TodoList>
  <Button @click="addTodo">
    <span>+</span>
  </Button>
</template>
