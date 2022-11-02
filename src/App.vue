<script setup lang="ts">
import { RouterView } from "vue-router";
import TodoView from "./views/TodoView.vue";
import TodoContext from "./feat/todo/TodoContext.vue";
</script>

<template>
  <div
    class="container flex flex-col items-center justify-center h-full px-6 mx-auto my-24 space-y-12"
  >
    <h1 class="text-4xl font-bold transition-colors hover:text-gray-500">
      <RouterLink to="/">Todo App Vue with Vite</RouterLink>
    </h1>
    <TodoContext>
      <TodoView />
      <RouterView />
    </TodoContext>
  </div>
</template>
