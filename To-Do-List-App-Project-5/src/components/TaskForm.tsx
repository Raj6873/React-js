import React, { useState } from "react";

type TaskFormProps = {
  addTask: (text: string) => void;
};

export default function TaskForm({ addTask }: TaskFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText === "") return;
    addTask(trimmedText);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/80 p-6 sm:p-8 rounded-3xl shadow-3xl items-center border border-blue-100 backdrop-blur-md relative overflow-hidden transform transition-all duration-300 hover:shadow-4xl" // Adjusted gradient opacity, blur, hover shadow
    >
      {/* Custom keyframes for blob animation - should ideally be in global CSS */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.64, 0.01, 0.35, 1);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none"> {/* Increased opacity slightly */}
        {/* Subtle, animated background shapes for visual interest */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob" /> {/* Larger blobs */}
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" /> {/* Added third blob */}
      </div>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        aria-label="Enter new task"
        className="flex-1 w-full p-4 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300/60 focus:border-blue-400 transition-all duration-300 shadow-md hover:shadow-lg bg-white/95 text-lg sm:text-xl placeholder-gray-400 font-medium text-gray-800 transform focus:scale-[1.01] relative z-10" // Rounded-xl, softer shadow, adjusted focus ring
      />
      
      <button
        type="submit"
        className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 font-extrabold tracking-wide text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-300/70 focus:ring-offset-2 relative z-10 group overflow-hidden" // Rounded-xl, slightly more padding, softer shadow, overflow-hidden for spark effect
      >
        <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10 group-active:opacity-20 z-0"></span> {/* Subtle white overlay on hover/active */}
        <span className="flex items-center justify-center gap-2 relative z-10"> {/* Ensure content is above overlay */}
          <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add Task
        </span>
      </button>
    </form>
  );
}