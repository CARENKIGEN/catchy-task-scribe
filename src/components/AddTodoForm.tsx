
import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface AddTodoFormProps {
  onAddTodo: (text: string) => void;
}

export const AddTodoForm = ({ onAddTodo }: AddTodoFormProps) => {
  const [text, setText] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!text.trim()) {
      toast({
        title: "Empty task",
        description: "Please enter a task description",
        variant: "destructive",
      });
      return;
    }

    onAddTodo(text);
    setText("");
    
    toast({
      title: "Task added!",
      description: "Your new task has been added to the list",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <Button 
        type="submit" 
        className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
      >
        <Plus className="h-4 w-4 mr-1" />
        Add
      </Button>
    </form>
  );
};
