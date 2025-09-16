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
  // Keep all tasks visible in pending view, but show their state
  const pendingCount = tasks.length;

  return (
    <div className="p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-lg min-h-[600px] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden space-y-6 border border-indigo-100/50 flex flex-col relative backdrop-blur-xl">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-8 right-0 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header with count */}
      <div className="flex items-center justify-between relative">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-tr from-indigo-500 to-pink-500 text-white rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300 group">
            <svg className="w-7 h-7 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a8 8 0 11-16 0 8 8 0 0116 0z" />
            </svg>
          </div>
          <div className="relative">
            <h4 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 tracking-tight hover:from-indigo-500 hover:to-pink-500 transition-all duration-300">Pending Tasks</h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-medium bg-indigo-100 text-indigo-600 px-2.5 py-0.5 rounded-full">
                {pendingCount} remaining
              </span>
              <span className="text-sm font-medium bg-purple-100 text-purple-600 px-2.5 py-0.5 rounded-full">
                {tasks.length} total
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Empty state */}
      {tasks.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center relative">
          <div className="p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-indigo-100/50 transform hover:scale-105 transition-all duration-500 cursor-default group">
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500">✨</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
              You're All Set!
            </div>
            <div className="text-gray-600 text-lg leading-relaxed max-w-sm">
              No pending tasks at the moment. Time to grab a coffee ☕ and plan your next achievement!
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar relative"> {/* Added custom-scrollbar */}
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white/95 p-4 sm:p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group border border-indigo-100/50 backdrop-blur-sm transform hover:-translate-y-1 hover:bg-white/80"
            >
              <label className="flex items-center cursor-pointer select-none flex-grow gap-4">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                  className="peer hidden"
                />
                <span className={`relative flex items-center justify-center w-9 h-9 rounded-xl border-2 transition-all duration-300 
                  ${task.completed 
                    ? 'border-emerald-200 bg-gradient-to-br from-emerald-400 to-emerald-500 shadow-emerald-200/50' 
                    : 'border-indigo-200 group-hover:border-indigo-300 shadow-indigo-200/50'} 
                  shadow-lg transform group-hover:scale-110`}>
                  <svg
                    className={`w-5 h-5 transition-all duration-300 ${task.completed ? 'text-white scale-100' : 'text-transparent scale-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                <span className={`flex-1 text-base sm:text-lg font-semibold transition-all duration-300 
                  ${task.completed 
                    ? 'text-emerald-600 line-through decoration-2 decoration-emerald-400/50' 
                    : 'text-gray-700 group-hover:text-indigo-600'}`}>
                  {task.text}
                </span>
              </label>

              <div className="flex items-center gap-2">
                <button
                  className={`p-2.5 rounded-xl transition-all duration-300 shadow-lg transform hover:scale-110 
                    ${task.completed 
                      ? 'bg-gradient-to-br from-emerald-400 to-emerald-500 text-white hover:shadow-emerald-200/50' 
                      : 'bg-gradient-to-br from-indigo-400 to-indigo-500 text-white hover:shadow-indigo-200/50'}`}
                  onClick={() => toggleTaskCompletion(index)}
                  aria-label={task.completed ? 'Mark as pending' : 'Mark as complete'}
                  title={task.completed ? 'Mark as pending' : 'Mark as complete'}
                >
                  {task.completed ? (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>

                <button
                  className="p-2.5 rounded-xl bg-gradient-to-br from-rose-400 to-rose-500 text-white transform hover:scale-110 hover:shadow-rose-200/50 transition-all duration-300 shadow-lg"
                  onClick={() => deleteTask(index)}
                  aria-label="Delete task"
                  title="Delete task"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Custom scrollbar styles (inline for convenience) */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { 
          width: 8px; 
        }
        .custom-scrollbar::-webkit-scrollbar-track { 
          background: rgba(255,255,255,0.1);
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb { 
          background: linear-gradient(180deg, rgba(99,102,241,0.6), rgba(236,72,153,0.6)); 
          border-radius: 9999px;
          border: 2px solid rgba(255,255,255,0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, rgba(99,102,241,0.8), rgba(236,72,153,0.8));
        }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}