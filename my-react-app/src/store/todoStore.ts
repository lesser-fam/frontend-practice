import { create } from "zustand";

interface Todo {
    id: number;
    title: string;
}

interface TodoState {
    todos: Todo[];
    fetchTodos: () => Promise<void>;
}

export const useTodoStore = create<TodoState>((set) => ({
    todos: [],
    fetchTodos: async () => {
        const response = await fetch("https://api.example.com/todos");
        const data = await response.json();
        set({ todos: data });
    },
}));
