
import { useState, useEffect } from "react";
import { TodoItem } from "./TodoItem";
import { AddTodoForm } from "./AddTodoForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos).map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
      }));
      setTodos(parsedTodos);
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      createdAt: new Date(),
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-semibold text-gray-800">
            Tasks
          </CardTitle>
          <div className="flex gap-2">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              {totalCount} total
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              {completedCount} done
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <AddTodoForm onAddTodo={addTodo} />
        
        {todos.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">No tasks yet!</div>
            <div className="text-gray-500 text-sm">Add your first task above to get started</div>
          </div>
        ) : (
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
