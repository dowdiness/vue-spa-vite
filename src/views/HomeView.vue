<script setup lang="ts">
import { computed } from "vue";
import { useTodo } from "../feat/todo/useTodo";

const { state } = useTodo();
const todoLength = computed(() => state.value.todos.length);
</script>

<template>
  <div v-if="todoLength > 0">編集するtodoをクリックして選んでください</div>
  <div v-else>+をクリックしてtodoを作成してください</div>
</template>
