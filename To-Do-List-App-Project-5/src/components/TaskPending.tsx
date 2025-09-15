import React from 'react';

type Task = {
  text: string;
  completed: boolean;
};

type TaskPendingProps = {
  tasks: Task[];
  toggleTaskCompletion: (index: number) => void;
  deleteTask: (index: number) => void;
};

export default function TaskPending({
  tasks,
  toggleTaskCompletion,
  deleteTask,
}: TaskPendingProps) {
  return (
    <div className="p-8 rounded-3xl shadow-2xl w-full max-w-lg h-96 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden space-y-6 border border-indigo-100 flex flex-col">
      <h4 className="text-3xl font-extrabold text-indigo-800 mb-4 text-center tracking-tight drop-shadow-sm">
        <span className="inline-block bg-white/90 px-5 py-2 rounded-2xl shadow-lg border border-indigo-100 transform hover:scale-105 transition-all duration-300 ease-in-out">
          ✨ Pending Task✨
        </span>
      </h4>

      {tasks.length === 0 ? (
        <div className="flex-1 flex items-center justify-center text-center text-gray-400 text-xl font-medium italic animate-fadeIn">
          <p className="p-4 bg-white/70 rounded-lg shadow-inner">
            No pending tasks! Time to relax or add some new goals. 🚀
          </p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar"> {/* Added custom-scrollbar */}
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white/95 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group border border-indigo-100 transform hover:-translate-y-1 hover:scale-[1.01]"
            >
              <label className="flex items-center cursor-pointer select-none flex-grow">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                  className="peer hidden" // Hide default checkbox
                />
                <span className="flex items-center justify-center w-6 h-6 border-2 border-indigo-300 rounded-full mr-4 shrink-0 transition-all duration-200 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 peer-checked:text-white text-transparent">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                <span className={`flex-1 text-lg md:text-xl font-semibold text-gray-800 transition-colors duration-300 ${task.completed ? 'line-through text-gray-500 italic' : ''}`}>
                  {task.text}
                </span>
              </label>

              <button
                className="ml-4 p-3 rounded-full bg-red-100 hover:bg-gradient-to-tr hover:from-red-400 hover:to-red-600 text-red-500 hover:text-white shadow-md transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6 opacity-80 hover:opacity-100 shrink-0"
                onClick={() => deleteTask(index)}
                aria-label="Delete task"
                title="Delete task"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}