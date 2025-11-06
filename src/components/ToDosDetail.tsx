import type { ToDo } from "../interfaces/ToDoInterface";

interface ToDosDetailProps {
  ToDo: ToDo;
  onClose: () => void;
}

export default function ToDosDetail({ ToDo, onClose }: ToDosDetailProps) {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-2">{ToDo.title}</h2>
        <p className="text-gray-700">{ToDo.description}</p>
        <button
          onClick={onClose}
          className="mt-4 px-3 py-1 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-300"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
