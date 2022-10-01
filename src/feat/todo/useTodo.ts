import type { Ref, InjectionKey } from "vue";
import { inject, provide, readonly, watchEffect } from "vue";
import { v4 as uuidv4 } from "uuid";

export type Todo = { id: string; text: string };
export type TodoState = { todos: Todo[] };
export type TodoStateRef = Ref<TodoState>;

export const TodoStateSymbol: InjectionKey<TodoStateRef> = Symbol();

export function provideTodoState(todoState: TodoStateRef) {
  provide(TodoStateSymbol, todoState);
}

const updateStorage = (value: TodoState) => {
  localStorage.setItem("todos", JSON.stringify(value));
};

export function useTodo() {
  const t = inject(TodoStateSymbol);
  if (!t) {
    throw new Error("useTodo() is called without provider.");
  }

  const state = readonly(t);

  const getTodo = (id: string) => {
    return t.value.todos.filter((todo) => todo.id === id)[0];
  };

  const addTodo = () => {
    t.value.todos.push({ id: uuidv4(), text: "new todo" });
  };

  const updateTodo = (target: Todo) => {
    t.value.todos = t.value.todos.map((todo) => {
      if (todo.id === target.id) {
        return target;
      } else {
        return todo;
      }
    });
  };

  const deleteTodo = (target: Todo) => {
    t.value.todos = t.value.todos.filter((todo) => todo.id !== target.id);
  };

  watchEffect(() => updateStorage(t.value));

  return {
    state,
    getTodo,
    addTodo,
    updateTodo,
    deleteTodo,
  };
}
