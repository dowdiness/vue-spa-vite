<script setup lang="ts">
import { ref } from "vue";
import type { Todos } from "./useTodo";
import { provideTodos } from "./useTodo";

const todos: Todos = JSON.parse(
  localStorage.getItem("todos") ??
    `{
        "todos": []
    }`
);
provideTodos(ref(todos));
</script>

<template>
  <slot />
</template>
