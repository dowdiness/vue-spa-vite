import type { Ref, InjectionKey } from "vue";
import { inject, provide, readonly, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { v4 as uuidv4 } from "uuid";

export type Todo = { id: string; text: string };
export type Todos = { todos: Todo[] };
export type TodosRef = Ref<Todos>;

export const TodosSymbol: InjectionKey<TodosRef> = Symbol();

export function provideTodos(Todos: TodosRef) {
  provide(TodosSymbol, Todos);
}

const updateStorage = (value: Todos) => {
  localStorage.setItem("todos", JSON.stringify(value));
};

export function useTodo() {
  const t = inject(TodosSymbol);
  if (!t) {
    throw new Error("useTodo() is called without provider.");
  }

  const todos = readonly(t);

  const router = useRouter();

  const getTodo = (id: string) => {
    return t.value.todos.filter((todo) => todo.id === id)[0];
  };

  const addTodo = () => {
    t.value.todos.push({ id: uuidv4(), text: "new todo" });
  };

  const updateTodo = (target: Todo) => {
    t.value.todos = t.value.todos.map((todo) => {
      if (todo.id === target.id) {
        todo.text = target.text;
      }
      return todo;
    });
  };

  const deleteTodo = (target: Todo) => {
    t.value.todos = t.value.todos.filter((todo) => todo.id !== target.id);
    router.push("/");
  };

  watchEffect(() => updateStorage(t.value));

  return {
    todos,
    getTodo,
    addTodo,
    updateTodo,
    deleteTodo,
  };
}
