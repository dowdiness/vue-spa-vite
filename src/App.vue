<script setup lang="ts">
import { RouterView } from "vue-router";
import TodoList from "./feat/todo/TodoList.vue";
import TodoAdd from "./feat/todo/TodoAdd.vue";
import TodoContext from "./feat/todo/TodoContext.vue";
</script>

<template>
  <TodoContext>
    <TodoList />
    <TodoAdd />
    <RouterView />
  </TodoContext>
</template>
