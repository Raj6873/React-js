type Task = {
  text: string;
  completed: boolean;
};

type TaskPendingProps = {
  tasks: Task[];
  toggleTaskCompletion: (index: number) => void;
  deleteTask: (index: number) => void;
};

export default function TaskComplete({
  tasks,
  toggleTaskCompletion,
  deleteTask,
}: TaskPendingProps) {
  const completedCount = tasks.filter(t => t.completed).length;
  
  return (
    <div className="p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-md lg:max-w-lg min-h-[400px] bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden space-y-6 border border-emerald-100/50 flex flex-col relative backdrop-blur-xl">
      {/* Background blobs for visual interest */}
      <div className="absolute top-10 -left-10 w-32 h-32 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-0 right-0 w-48 h-48 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Embedded style for custom scrollbar (consider moving to global CSS) */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px; /* Width of the scrollbar */
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #fdf2f8; /* Lighter background for the track */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d8b4fe; /* Purple thumb */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #c084fc; /* Darker purple on hover */
        }
        /* For Firefox */
        .custom-scrollbar {
          scrollbar-width: thin; /* "auto" or "thin" */
          scrollbar-color: #d8b4fe #fdf2f8; /* thumb and track color */
        }

        /* Keyframes for blob animation */
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

      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-tr from-emerald-500 to-teal-500 text-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300 group">
            <svg className="w-8 h-8 transform group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h4 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Completed Tasks
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-medium bg-emerald-100 text-emerald-600 px-2.5 py-0.5 rounded-full">
                {completedCount} completed
              </span>
              <span className="text-sm font-medium bg-teal-100 text-teal-600 px-2.5 py-0.5 rounded-full">
                {((completedCount / tasks.length) * 100 || 0).toFixed(0)}% success rate
              </span>
            </div>
          </div>
        </div>
      </div>

      {tasks.filter(t => t.completed).length === 0 ? (
        <div className="flex-1 flex items-center justify-center text-center relative z-10">
          <div className="p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-emerald-100/50 transform hover:scale-105 transition-all duration-500 cursor-default group">
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500">🎯</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
              Nothing Completed Yet
            </div>
            <div className="text-gray-600 text-lg leading-relaxed max-w-sm">
              Complete some tasks from your list to see them here. You're doing great! �
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar relative z-10">
          {tasks.filter(task => task.completed).map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white/95 p-4 sm:p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group border border-emerald-100/50 transform hover:-translate-y-1 hover:scale-[1.02] relative backdrop-blur-sm"
            >
              <label className="flex items-center cursor-pointer select-none flex-grow gap-4">
                <span className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                <div className="flex-1">
                  <span className="block text-base sm:text-lg font-medium text-emerald-600 mb-0.5">
                    {task.text}
                  </span>
                  <span className="block text-sm text-emerald-500/70">
                    Completed • Nice work! 🎉
                  </span>
                </div>
              </label>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleTaskCompletion(index)}
                  className="p-2.5 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-white transform hover:scale-110 hover:shadow-amber-200/50 transition-all duration-300 shadow-lg"
                  title="Mark as pending"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>

                <button
                  onClick={() => deleteTask(index)}
                  className="p-2.5 rounded-xl bg-gradient-to-br from-rose-400 to-rose-500 text-white transform hover:scale-110 hover:shadow-rose-200/50 transition-all duration-300 shadow-lg"
                  title="Delete task"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}