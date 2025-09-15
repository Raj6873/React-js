import React, { useState } from "react";
import PropTypes from 'prop-types';

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
      className="flex flex-col sm:flex-row gap-4 bg-gradient-to-br from-blue-50/70 via-white/90 to-indigo-50/60 p-6 sm:p-8 rounded-3xl shadow-3xl items-center border border-blue-100 backdrop-blur-lg relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {/* Subtle, animated background shapes for visual interest */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
      </div>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        aria-label="Enter new task"
        className="flex-1 w-full p-3.5 border-2 border-blue-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300/70 focus:border-blue-400 transition-all duration-300 shadow-lg bg-white/95 text-lg sm:text-xl placeholder-gray-400 font-medium text-gray-800 transform focus:scale-[1.01] relative z-10"
      />
      
      <button
        type="submit"
        className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-2xl shadow-xl hover:from-blue-700 hover:to-purple-700 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 font-extrabold tracking-wide text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-300/70 focus:ring-offset-2 relative z-10 group"
      >
        <span className="flex items-center justify-center gap-2">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add Task
        </span>
      </button>
    </form>
  );
}

// Add PropTypes for better component documentation and type checking
TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};