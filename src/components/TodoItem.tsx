
import { useState } from "react";
import { Trash2, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Todo } from "./TodoList";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div
      className={cn(
        "group flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 hover:shadow-md",
        todo.completed
          ? "bg-gray-50 border-gray-200"
          : "bg-white border-gray-200 hover:border-blue-300"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Checkbox
        checked={todo.completed}
        onCheckedChange={handleToggle}
        className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
      />
      
      <div className="flex-1 min-w-0">
        <p
          className={cn(
            "text-sm transition-all duration-200",
            todo.completed
              ? "line-through text-gray-500"
              : "text-gray-800"
          )}
        >
          {todo.text}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {todo.createdAt.toLocaleDateString()} at {todo.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={handleDelete}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-50 hover:text-red-600",
          isHovered && "opacity-100"
        )}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};
