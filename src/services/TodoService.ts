import type { Todo } from "../types/todo";

export class TodoService {
  static getTodos(): Todo[] {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
  }

  static saveTodos(todos: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
} 