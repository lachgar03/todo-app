import React, { createContext, useContext, useEffect, useState } from "react";
import type { Todo } from "../../types/todo";
import { TodoService } from "../../services/TodoService";

type TodoContextType = {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodoComplete: (id: number) => void;
    deleteTodo: (id: number) => void;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        setTodos(TodoService.getTodos());
    }, []);

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            text,
            completed: false,
        };
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        TodoService.saveTodos(updatedTodos);
    };

    const toggleTodoComplete = (id: number) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
        TodoService.saveTodos(updatedTodos);
    };

    const deleteTodo = (id: number) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        TodoService.saveTodos(updatedTodos);
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodoComplete, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodoContext must be used within a TodoProvider");
    }
    return context;
};