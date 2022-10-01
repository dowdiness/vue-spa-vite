<script setup lang="ts">
import type { Ref } from "vue";
import { ref, watch } from "vue";
import type { RouteLocationNormalizedLoaded } from "vue-router";
import { useRoute } from "vue-router";
import type { Todo } from "./useTodo";
import { useTodo } from "./useTodo";

const route = useRoute();
const { getTodo, updateTodo, deleteTodo } = useTodo();

const getId = (route: RouteLocationNormalizedLoaded) =>
  Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;

const temp = getTodo(getId(route));
let todo: Ref<Todo> = ref({ id: temp.id, text: temp.text });

watch(
  () => getId(route),
  (newId) => {
    const temp = getTodo(newId);
    todo.value = { id: temp.id, text: temp.text };
  }
);
</script>

<template>
  <div class="container">
    <h1 class="text-md">{{ todo.text }}</h1>
    <textarea v-model="todo.text" class="text-gray-800"></textarea>
    <div class="flex mt-1 space-x-8">
      <button
        type="button"
        @click="updateTodo(todo)"
        class="relative items-center px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      >
        <span>編集</span>
      </button>
      <button
        type="button"
        @click="deleteTodo(todo)"
        class="relative items-center px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      >
        <span>削除</span>
      </button>
    </div>
  </div>
</template>
