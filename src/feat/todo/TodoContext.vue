<script setup lang="ts">
import { ref } from "vue";
import type { TodoState } from "./useTodo";
import { provideTodoState } from "./useTodo";

const todoState: TodoState = {
  todos: JSON.parse(
    localStorage.getItem("todos") ??
      `{
          "todos": []
        }`
  ).todos,
};

provideTodoState(ref(todoState));
</script>

<template>
  <slot />
</template>
