<script setup lang="ts">
import type { Ref } from "vue";
import { ref, watch } from "vue";
import type { RouteLocationNormalizedLoaded } from "vue-router";
import { useRoute } from "vue-router";
import type { Todo } from "../feat/todo/useTodo";
import { useTodo } from "../feat/todo/useTodo";
import Button from "../components/ButtonUI.vue";

const route = useRoute();
const { getTodo, updateTodo, deleteTodo } = useTodo();

const getId = (route: RouteLocationNormalizedLoaded) =>
  Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;

const temp = getTodo(getId(route));
const todo: Ref<Todo> = ref({ ...temp });

watch(
  () => getId(route),
  (newId) => {
    const temp = getTodo(newId);
    todo.value = { ...temp };
  }
);
</script>

<template>
  <h2 class="text-2xl font-medium">Todo編集</h2>
  <h3 class="text-md">{{ todo.text }}</h3>
  <textarea v-model="todo.text" class="text-gray-800"></textarea>
  <div class="flex mt-1 space-x-8">
    <Button @click="updateTodo(todo)">
      <span>編集</span>
    </Button>
    <Button @click="deleteTodo(todo)">
      <span>削除</span>
    </Button>
  </div>
</template>
