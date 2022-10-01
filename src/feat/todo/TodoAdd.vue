<script setup lang="ts">
import { useTodo } from "./useTodo";
const { addTodo } = useTodo();
</script>

<template>
  <button
    type="button"
    @click="addTodo"
    class="relative items-center px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
  >
    <span>+</span>
  </button>
</template>
