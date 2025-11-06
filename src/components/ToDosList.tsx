import { useState } from "react";
import ToDosDetail from "./ToDosDetail";
import type { ToDo } from "../interfaces/ToDoInterface";

interface ToDosListProps {
  date: string;
  ToDos: ToDo[];
}

export default function ToDosList({ date, ToDos }: ToDosListProps) {
  const [selectedToDo, setSelectedToDo] = useState<ToDo | null>(null);

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2 text-xl text-blue-500">{date} 일정</h3>
      {ToDos.length === 0 && <p className="text-gray-500">일정이 없습니다.</p>}
      <ul className="space-y-3">
        {ToDos.map((ToDo) => (
          <li
            key={ToDo.id}
            onClick={() => setSelectedToDo(ToDo)}
            className="font-medium cursor-pointer border border-blue-400 p-2 rounded hover:bg-blue-100"
          >
            {ToDo.title}
          </li>
        ))}
      </ul>

      {selectedToDo && (
        <ToDosDetail
          ToDo={selectedToDo}
          onClose={() => setSelectedToDo(null)}
        />
      )}
    </div>
  );
}
