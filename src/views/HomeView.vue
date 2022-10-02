<script setup lang="ts">
import { computed } from "vue";
import { useTodo } from "../feat/todo/useTodo";

const { todos } = useTodo();
const todoLength = computed(() => todos.value.todos.length);
</script>

<template>
  <div v-if="todoLength > 0">編集するtodoをクリックして選んでください</div>
  <div v-else>+をクリックしてtodoを作成してください</div>
</template>
